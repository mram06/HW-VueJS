import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PageNotFound from "@/views/PageNotFound";
import LoginPage from "@/views/LoginPage";
import LessonsSelect from "@/components/LessonsSelect";
import TeachersSelect from "@/components/TeachersSelect";
import StudyPlan from "@/components/StudyPlan";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/lessons",
    name: "lessons",
    component: () => import("@/views/LessonsView"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "select",
        name: "lessonsSelect",
        component: LessonsSelect,
      },
      {
        path: ":id(\\d*)+",
        name: "lessonsSelected",
        component: TeachersSelect,
      },
      {
        path: ":id+",
        name: "studyPlan",
        component: StudyPlan,
      },
    ],
  },
  {
    path: "/teachers",
    name: "teachers",
    component: () => import("@/views/TeachersView"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const isAuthenticated = window.userName;
  if (to.meta.requiresAuth && !isAuthenticated) {
    return {
      name: "login",
      query: { redirect: to.fullPath },
    };
  }
});

export default router;
