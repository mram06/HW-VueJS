import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/laptops",
    name: "laptops",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LaptopsView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    meta: { requiredAuth: true },
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/admin-panel",
    name: "adminPanel",
    meta: { requiredAuth: true },
    component: () => import("@/views/AdminPanel.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  if (to.meta?.requiredAuth) {
    let isAuthenticated = store.state.auth.user;

    if (!isAuthenticated)
      isAuthenticated = await store.dispatch("auth/loginWithCredential");

    if (!isAuthenticated)
      return {
        name: "login",
      };
  }
});

export default router;
