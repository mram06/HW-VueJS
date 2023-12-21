import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ItemsView from "@/views/ItemsView";
import SuppliersView from "@/views/SuppliersView";
import ContactsView from "@/views/ContactsView";
import ShoppingRulesView from "@/views/ShoppingRulesView";
import ProductsView from "@/views/ProductsView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/items",
    name: "items",
    component: ItemsView,
  },
  {
    path: "/suppliers",
    name: "suppliers",
    component: SuppliersView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/shopping-rules",
    name: "shoppingRules",
    component: ShoppingRulesView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    children: [
      {
        path: "selector",
        name: "productsSelector",
        components: {
          default: () => import("@/components/ItemsList"),
          action: () => import("@/components/ProductsFilter"),
        },
      },
      {
        path: "editor",
        name: "productsEditor",
        components: {
          default: () => import("@/components/ItemsList"),
          action: () => import("@/components/AddItem"),
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
