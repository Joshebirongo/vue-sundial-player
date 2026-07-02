// Import the Vue.js Router functions
import { createRouter, createWebHistory } from "vue-router";
// Import the application pages
import LibraryView from "../pages/LibraryView.vue";
import ArtistView from "../pages/ArtistView.vue";

// Decline the application routes (end-points)
const routes = [
    { path: "/", component: LibraryView },
    { path: "/artists", component: ArtistView}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;