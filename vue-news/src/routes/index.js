import { createWebHistory, createRouter } from "vue-router";

import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView";

const routes = [
  {
    path: "/",
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
  {
    path: "/item",
    component: ItemView,
  },
  {
    path: "/user",
    component: UserView,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
