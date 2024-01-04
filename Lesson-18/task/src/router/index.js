import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FriendsView from "@/views/FriendsView";
import GiftsView from "@/views/GiftsView";
import GiftsAssign from "@/views/GiftsAssign";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/friends",
    name: "friends",
    component: FriendsView,
  },
  {
    path: "/gifts",
    name: "gifts",
    component: GiftsView,
  },
  {
    path: "/gift-assign",
    name: "giftsAssign",
    component: GiftsAssign,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
