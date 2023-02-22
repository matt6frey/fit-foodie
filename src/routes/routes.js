import { createRouter, createWebHistory } from "vue-router";


export const routes = [
  { name: "Home", path: "/", redirect: { name: "Dashboard" } },
  { name: "Dashboard", path: "/dashboard", component: () => import("@/pages/Dashboard.vue") },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: "Dashboard" }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
