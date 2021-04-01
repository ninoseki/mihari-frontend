import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Alerts from "@/views/Alerts.vue";
import Config from "@/views/Config.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Alerts",
    component: Alerts,
  },
  {
    path: "/config",
    name: "Config",
    component: Config,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
