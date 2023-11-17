import { createRouter, createWebHistory } from "vue-router";
import TaskLaptops from "../views/TaskLaptops.vue";
import TaskCars from "../views/TaskCars.vue";

const routes = [
  {
    path: "/",
    name: "task1",
    component: TaskLaptops,
  },
  {
    path: "/task2",
    name: "task2",
    component: TaskCars,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
