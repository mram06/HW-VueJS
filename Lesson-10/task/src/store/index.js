import { createStore } from "vuex";
import { itemsData } from "@/constants/items_data";
import { isCorrespondToFilter } from "./helpers";

export default createStore({
  state: {
    itemsData: [...itemsData],
    filterObj: {},
  },
  getters: {
    getFilteredItemsList: (state) =>
      state.itemsData.filter((item) =>
        isCorrespondToFilter(item, state.filterObj)
      ),
  },
  mutations: {
    setFilter(state, filterObj) {
      state.filterObj = filterObj;
    },
  },
  actions: {
    setFilter({ commit }, filterObj) {
      commit("setFilter", filterObj);
    },
  },
  modules: {},
});
