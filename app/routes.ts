import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("searchName", "routes/searchName.tsx"),
    route("searchType", "routes/searchType.tsx"),
    route("kanto", "routes/kanto.tsx"),
    route("johto", "routes/johto.tsx"),
    route("hoenn", "routes/hoenn.tsx"),
    route("sinnoh", "routes/sinnoh.tsx"),
    route("unova", "routes/unova.tsx"),
    route("kalos", "routes/kalos.tsx"),
    route("alola", "routes/alola.tsx"),
    route("galar", "routes/galar.tsx"),
    route("hisui", "routes/hisui.tsx"),
    route("paldea", "routes/paldea.tsx"),
] satisfies RouteConfig;
