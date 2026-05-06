import { useLoaderData } from 'react-router';
import { makeStore } from '~/store';
import PokemonCard from '~/components/pokemonCard';
import type { Pokemon } from '~/interfaces/pokemon';

export async function loader({ request }: any) {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");

    if (!query) {
        return new Response(JSON.stringify({ error: "No search query provided"}), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const store = makeStore();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
        if (!response.ok) {
            throw new Error("Pokémon not found")
        }
        const data = await response.json();
        const pokemonData: Pokemon = {
            name: data.name,
            url: data.url,
            id: data.id
        };

        return new Response(JSON.stringify(pokemonData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Search error:", error);
        return new Response(JSON.stringify({ error: "Pokemon Not Found" }), {
            status: 404,
            headers: { "Content-Type": "application/json"}
        });
    }
}

export default function SearchNamePage() {
    const data = useLoaderData() as Pokemon | { error: string }

    if (!("error" in data )) {
        return (
            <div className="container">
                <h1 className='text-white my-4'>Search Results for {data.name}</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <PokemonCard pokemon={data} />
                </div>
                <a href="/searchName" className='btn btn-secondary mt-3'>Search New Pokémon</a>
            </div>
        )
    } else {
        return (
            <div className='card bg-slate-800 text-white border-slate-700 h-100 shadow-lg max-w-xs mx-auto'>
                <h1 className='text-white my-4'>Search By Name</h1>
                <div className='alert alert-danger'>{data.error}</div>
                <a href="/searchName" className='btn btn-secondary mt-3'>Search Again</a>
            </div>
        )
    }
}