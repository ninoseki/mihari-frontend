import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Alerts from "@/views/Alerts.vue";
import Artifact from "@/views/Artifact.vue";
import Command from "@/views/Command.vue";
import Configs from "@/views/Configs.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Alerts",
    component: Alerts,
  },
  {
    path: "/command",
    name: "Command",
    component: Command,
  },
  {
    path: "/configs",
    name: "Configs",
    component: Configs,
  },
  {
    path: "/artifacts/:id",
    name: "Artifact",
    component: Artifact,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
