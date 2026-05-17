import { useLoaderData } from 'react-router';
import { makeStore } from '~/store';
import { fetchPokemonGalar } from '../../services/pokemonApi';
import type { Pokemon } from '~/interfaces/pokemon';
import PokemonCard from '~/components/pokemonCard';

export async function loader(args: any) {
    const { requests } = args;
    const store = makeStore();

    try {
        const result = await store.dispatch(fetchPokemonGalar.initiate());
        if (result.error) {
            return new Response(JSON.stringify({ error: "Failed to fetch" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }
        return new Response(JSON.stringify(result.data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        })
    } catch (error) {
        console.error("Error in loader - Kanto")
        return new Response(JSON.stringify({ error: "Internal server error"}), {
            status: 500,
            headers: { "Content-Type": "application/json"},
        })
    }
}

export default function GalarPage() {
    const pokemonList = useLoaderData() as Pokemon[];
    if (!pokemonList || pokemonList.length === 0) {
        return <div>No Pokémon found.</div>
    }

    return (
        <div className='container'>
            <h1 className='text-white my-4'>Generation 8 - Galar Region</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                 {pokemonList.map((pokemon) => (
                    <div key={pokemon.url}>
                        <PokemonCard pokemon={pokemon} />
                    </div>
                 ))}
            </div>
        </div>
    );
}