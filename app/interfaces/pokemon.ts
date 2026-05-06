export interface Pokemon {
    name: string,
    url: string,
    id?: number
}

export interface PokemonDisplayInfo {
    types: string[],
    height: number,
    weight: number
}

export interface PokemonResults {
    count: number,
    next: string,
    previous: null,
    results: Pokemon[]
}
