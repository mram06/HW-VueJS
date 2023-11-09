import { createStore } from "vuex";
import { itemsData } from "@/constants/items_data";

export default createStore({
  state: {
    itemsData: [...itemsData],
  },
  getters: {
    getItemsList: (state) => state.itemsData,
  },
  mutations: {},
  actions: {},
  modules: {},
});
