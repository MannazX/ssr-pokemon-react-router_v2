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
            fetchPokemonHoenn: builder.query<Pokemon[], void>({
                query: () => {
                    return {
                        url: 'pokemon',
                        params: {
                            offset: 251,
                            limit: 135
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
            fetchPokemonSinnoh: builder.query<Pokemon[], void>({
                query: () => {
                    return {
                        url: 'pokemon',
                        params: {
                            offset: 386,
                            limit: 107
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
            fetchPokemonUnova: builder.query<Pokemon[], void>({
                query: () => {
                    return {
                        url: 'pokemon',
                        params: {
                            offset: 493,
                            limit: 156
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
            fetchPokemonKalos: builder.query<Pokemon[], void>({
                query: () => {
                    return {
                        url: 'pokemon',
                        params: {
                            offset: 649,
                            limit: 72
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
            fetchPokemonAlola: builder.query<Pokemon[], void>({
                query: () => {
                    return {
                        url: 'pokemon',
                        params: {
                            offset: 721,
                            limit: 86
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
            fetchPokemonGalar: builder.query<Pokemon[], void>({
                query: () => {
                    return {
                        url: 'pokemon',
                        params: {
                            offset: 809,
                            limit: 89
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
            fetchPokemonHisui: builder.query<Pokemon[], void>({
                query: () => {
                    return {
                        url: 'pokemon',
                        params: {
                            offset: 898,
                            limit: 7
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
            fetchPokemonPaldea: builder.query<Pokemon[], void>({
                query: () => {
                    return {
                        url: 'pokemon',
                        params: {
                            offset: 905,
                            limit: 120
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
export const { 
    fetchPokemonKanto, 
    fetchPokemonJohto, 
    fetchPokemonHoenn, 
    fetchPokemonSinnoh,
    fetchPokemonUnova,
    fetchPokemonKalos,
    fetchPokemonAlola,
    fetchPokemonGalar,
    fetchPokemonHisui,
    fetchPokemonPaldea,
    fetchPokemonInfo, 
    fetchPokemonByName, 
    fetchPokemonByType } = pokemonApi.endpoints;