import React, { useEffect, useState } from 'react'

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}

interface pokemonProps {
    id: number
}

export const usePokemon = (props: pokemonProps) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const getPokemonById = async (id: number) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`);
        const data = await response.json();
        setPokemon({
            id: id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });
    }

    useEffect(() => {
        getPokemonById(props.id);
    }, [props.id])
    return { pokemon }
}
