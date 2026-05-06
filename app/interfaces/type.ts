export interface TypeResponse {
    name: string,
    pokemon: Array<{
        pokemon: {
            name: string,
            url: string
        },
        slot: number;
    }>;
}
