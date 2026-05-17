import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon, PokemonResults, PokemonDisplayInfo } from '~/interfaces/pokemon';
import type { TypeResponse } from '~/interfaces/type';

export const pokemonApi = createApi({
    reducerPath: 'pokemon',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/',
    }),
    endpoints(builder) {
        return {
            fetchPokemonKanto: builder.query<Pokemon[], void>({
                query: () => {
                    return {
                        url: 'pokemon',
                        params: {
                            offset: 0,
                            limit: 151
                        },
                        method: 'GET',
                    };
                },
                transformResponse: (response: PokemonResults) => {
                    return response.results.map((pokemon) => {
                        return {
                            name: pokemon.name,
                            url: pokemon.url 
                        }
                    });
                },
            }),
            fetchPokemonJohto: builder.query<Pokemon[], void>({
                query: () => {
                    return {
                        url: 'pokemon',
                        params: {
                            offset: 151,
                            limit: 100
                        },
                        method: 'GET',
                    };
                },
                transformResponse: (response: PokemonResults) => {
                    return response.results.map((pokemon) => {
                        return {
                            name: pokemon.name,
                            url: pokemon.url 
                        }
                    });
                },
            }),
            fetchPokemonInfo: builder.query<PokemonDisplayInfo, Number | undefined>({
                query: (id) => {
                    return {
                        url: `pokemon/${id}`,
                        method: 'GET',
                    };
                },
                transformResponse: (response: PokemonDisplayInfo) => {
                    const types = response.types.map((item: any) => item.type.name)
                    return {
                        types: types,
                        height: response.height,
                        weight: response.weight
                    }
                }
            }),
            fetchPokemonByName: builder.query<Pokemon, String>({
                query: (name) => {
                    return {
                        url: `pokemon/${name.toLowerCase()}`,
                        method: 'GET',
                    };
                },
                transformResponse: (response: Pokemon): Pokemon => {
                    return {
                        name: response.name,
                        url: response.url,
                        id: response.id
                    }
                }
            }),
            fetchPokemonByType: builder.query<Pokemon[], String>({
                query: (type) => {
                    return {
                        url: `type/${type.toLowerCase()}`,
                        method: 'GET'
                    };
                },
                transformResponse: (response: TypeResponse): Pokemon[] => {
                    return response.pokemon.map((poke) => {
                        return {
                            name: poke.pokemon.name,
                            url: poke.pokemon.url 
                        }
                    });
                }
            }),
        }
    }
    
});

export const { useFetchPokemonInfoQuery, useFetchPokemonByNameQuery, useFetchPokemonByTypeQuery } = pokemonApi;
export const { fetchPokemonKanto, fetchPokemonJohto, fetchPokemonInfo, fetchPokemonByName, fetchPokemonByType } = pokemonApi.endpoints;