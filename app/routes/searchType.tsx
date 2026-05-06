import { useLoaderData } from "react-router";
import { makeStore } from "~/store";
import PokemonCard from "~/components/pokemonCard";
import type { Pokemon } from "~/interfaces/pokemon";

export async function loader({ request }: any) {
    const url = new URL(request.url);
    const type = url.searchParams.get("t");

    if (!type) {
        return new Response(JSON.stringify({ error: "No type provided" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const store = makeStore();

    try {
        const typeResponse = await fetch(`https://pokeapi.co/api/v2/type/${type.toLowerCase()}`);
        if (!typeResponse.ok) {
            throw new Error("Type not found");
        }

        const typeData = await typeResponse.json();
        const pokemonList = typeData.pokemon.map((item: any) => ({
            name: item.pokemon.name,
            url: item.pokemon.url,
            id: undefined
        }));

        return new Response(JSON.stringify(pokemonList), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Search type error:", error);
        return new Response(JSON.stringify({ error: "Type not found or error fetching" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export default function SearchTypePage() {
    const data = useLoaderData() as Pokemon[] | { error: string };
    if (!("error" in data)) {
        if (data.length === 0) {
            return <div className="container mt-4"><h1>No Pokémon found with this type.</h1></div>
        }
        return (
            <div className="container">
                <h1 className="text-white my-4">Pokémon by Searched Type</h1>
                <p className="text-muted">Showing {data.length} results.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {data.map((pokemon) => (
                        <PokemonCard key={pokemon.url} pokemon={pokemon} />
                    ))}
                </div>
                <a href="/searchType" className="btn btn-secondary mt-3">Search New Pokemon</a>
            </div>
        )
    } else {
        return (
            <div className="card bg-slate-800 text-white border-slate-700 h-100 shadow-lg max-w-xs mx-auto">
                <h1 className="text-white my-4">Search by Type</h1>
                <div className="alert alert-danger">{data.error}</div>
                <a href="/searchType" className="btn btn-secondary mt-3">Search Again</a>
            </div>
        )
    }    
}