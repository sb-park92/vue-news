import { createWebHistory, createRouter } from "vue-router";
import NewsView from "../views/NewsView.vue";
import JobsView from "../views/JobsView.vue";
import AskView from "../views/AskView.vue";

const routes = [
  {
    path: "/news",
    component: NewsView,
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
