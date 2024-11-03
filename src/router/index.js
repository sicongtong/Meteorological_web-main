import { createRouter, createWebHistory } from "vue-router";
import MenuRoutes from "./routes.js";

const routes = [MenuRoutes];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
