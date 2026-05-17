import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("searchName", "routes/searchName.tsx"),
    route("searchType", "routes/searchType.tsx"),
    route("kanto", "routes/kanto.tsx"),
    route("johto", "routes/johto.tsx"),
] satisfies RouteConfig;
