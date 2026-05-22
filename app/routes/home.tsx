import type { Route } from "./+types/home";
import Front from "../front/frontPage";
//import { Welcome } from "../welcome/welcome";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pokémon Finder SSR-WebApp with React Router v7" },
    { name: "description", content: "Welcome to my Pokémon Finder app via PokeApi.co" },
  ];
}

export default function Home() {
  return <Front />;
}
