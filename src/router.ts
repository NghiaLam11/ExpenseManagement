import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./views/HomeView.vue";
import SignUpView from "./views/SignUpView.vue";
import SignInView from "./views/SignInView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/signup", component: SignUpView },
  { path: "/signin", component: SignInView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
