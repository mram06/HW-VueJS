import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeachersView from "@/views/TeachersView";
import SubjectsView from "@/views/SubjectsView";
import ManagementView from "@/views/ManagementView";
import LoginPage from "@/views/LoginPage";
import TeacherEdit from "@/components/TeacherEdit";
import SubjectEdit from "@/components/SubjectEdit";
import ManagementEdit from "@/components/ManagementEdit";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/teachers",
    name: "teachers",
    component: TeachersView,
  },
  {
    path: "/teachers/config/:id?",
    name: "teacherConfig",
    component: TeacherEdit,
  },
  {
    path: "/subjects",
    name: "subjects",
    component: SubjectsView,
  },
  {
    path: "/subjects/config/:id?",
    name: "subjectConfig",
    component: SubjectEdit,
  },
  {
    path: "/management",
    name: "management",
    component: ManagementView,
  },
  {
    path: "/management/config/:id?",
    name: "managementConfig",
    component: ManagementEdit,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
