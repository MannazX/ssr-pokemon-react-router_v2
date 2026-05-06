import React, { useEffect, useState } from "react";
import { useFetchPokemonInfoQuery } from "../../services/pokemonApi";

function PokemonInfo({id}: {id?: number}) {
    const {data, error, isFetching} = useFetchPokemonInfoQuery(id || undefined);

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="text-muted">Loading details...</div>;
    }

    console.log(id, data, error, isFetching);


    let content;
    let typeInfo;
    if (!id) {
        content = <div>No ID available.</div>
    }
    if (!data) {
        content = <div>No information found on this pokémon.</div>
    } else if (isFetching) {
        content = <div>Loading.</div>
    } else if (error) {
        content = <div>Error loading info.</div>
    } else {
        typeInfo = data.types.map((type: any) => 
            type.charAt(0).toUpperCase() + type.slice(1)
        );

        content = <p className="card-text">Types: {typeInfo.join(", ")}<br></br><br></br>Height: {data.height}<br></br>Weight: {data.weight}</p>
    }

    return (
        <div>{content}</div>
    )
}

export default PokemonInfo;
