import VueRouter from "vue-router";
import { Routes } from "./config";
const routes = [
  {
    path: "/",
    redirect: "/index",
    component: () => import("@/components/index.vue"),
  },
  {
    path: "/index",
    component: () => import("@/components/index.vue"),
    children: Routes,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
