import { createStore } from "vuex";
import items from "@/store/modules/items";
import auth from "@/store/modules/auth";
import cart from "@/store/modules/cart";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { items, auth, cart },
});
