import { createRouter, createWebHistory } from "vue-router";

import Login from "@/pages/Auth/Login";

export const routes = [
  { name: "Home", path: "/", redirect: { name: "Login" } },
  { name: "Login", path: "/login", component: Login },
  { name: "Dashboard", path: "/dashboard", component: () => import("@/pages/Dashboard.vue") },
  { name: "Register", path: "/register", component: () => import("../pages/Auth/Register.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
