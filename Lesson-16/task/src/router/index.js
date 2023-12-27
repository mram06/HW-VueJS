import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import DriversView from "@/views/DriversView";
import BusesView from "@/views/BusesView";
import DirectionView from "@/views/DirectionView";
import ContactsView from "@/views/ContactsView";
import BusEdit from "@/views/BusEdit";
import DriverConfig from "@/views/DriverConfig";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/drivers",
    name: "drivers",
    component: DriversView,
  },
  {
    path: "/drivers/config/:id?",
    name: "driverConfig",
    component: DriverConfig,
  },
  {
    path: "/buses",
    name: "buses",
    component: BusesView,
  },
  {
    path: "/busses/config/:id?",
    name: "busConfig",
    component: BusEdit,
  },
  {
    path: "/direction",
    name: "direction",
    component: DirectionView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
