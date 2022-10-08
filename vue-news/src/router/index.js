import { createWebHistory, createRouter } from "vue-router";

import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";

const routes = [
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/NewsView"),
  },
  {
    path: "/ask",
    component: AskView,
  },
  {
    path: "/jobs",
    component: JobsView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
