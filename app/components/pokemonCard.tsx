import React from "react";
import { Link } from 'react-router';
import type { Pokemon } from "~/interfaces/pokemon";
import PokemonInfo  from "./pokemonInfo";

function PokemonCard({pokemon} : {pokemon: Pokemon}) {
    let id: number | undefined;
    let image: string | undefined;
    if (pokemon.id) { // search bar pokemon scenario
        id = pokemon.id; 
        image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
    else if (pokemon.url) { // full kanto list scenario
        const urlSegment = pokemon.url.split('/').filter(Boolean);
        const idSegment = urlSegment[urlSegment.length - 1].replace("/", "");
        id = parseInt(idSegment, 10);
        image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    }
    //console.log("ID: ", id);
    //console.log("Pokemon: ", pokemon);
    return (
        <div className="card bg-slate-800 text-white border-slate-700 h-100 shadow-lg">
            <div className="card-header bg-slate-700 border-slate-600 text-white">
                <span>{'#' + id}</span>
            </div>
            <img src={image} className="card-img-top d-block mx-auto" alt={`Pokemon ${pokemon.name}`} width={"96"} height={"96"} loading={"lazy"} style={{ width: '96px', height: '96px' }} />
            <div className="card-body text-center">
                <h5 className="card-title text-white">
                    <Link to={`/pokemon/${pokemon.name}`} className="text-white hover:text-blue-400 transition-colors">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Link>
                </h5>
                <div className="text-center"><PokemonInfo id={id}/></div>
            </div>
        </div>
    );
}

export default PokemonCard;
