import DbOperations from "@/store/helpers/DbOperations";
import { isCorrespondToFilter } from "../helpers/helpers";
const collectionDB = new DbOperations("items");
export default {
  namespaced: true,
  state: () => ({
    itemsList: [],
    loading: false,
    error: null,

    filterObj: {},
  }),
  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,

    getItemsList: (state) => state.itemsList,
    getItemById: (state) => (itemId) =>
      state.itemsList.find((item) => item.id == itemId),

    getItemBrands: (state) =>
      new Set(state.itemsList.map((item) => item.brand)),
    getFilteredItemsList: (state) =>
      state.itemsList.filter((item) =>
        isCorrespondToFilter(item, state.filterObj)
      ),
  },
  mutations: {
    setItemsList(state, itemsList) {
      state.itemsList = itemsList;
    },

    setLoading(state, value) {
      state.loading = value;
    },
    setError(state, error) {
      state.error = error;
    },

    setFilter(state, obj) {
      state.filterObj = obj;
    },
  },
  actions: {
    setFilter({ commit }, obj) {
      commit("setFilter", obj);
    },

    loadList({ commit }) {
      commit("setError", null);
      commit("setLoading", true);
      collectionDB
        .loadItemsList()
        .then((list) => {
          commit("setItemsList", list);
        })
        .catch((error) => {
          commit("setError", error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    },
    addItem({ commit, dispatch }, item) {
      commit("setError", null);
      commit("setLoading", true);
      collectionDB
        .addItem(item)
        .then(() => {
          dispatch("loadList");
        })
        .catch((error) => {
          commit("setError", error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    },
    deleteItem({ commit, dispatch }, itemId) {
      commit("setError", null);
      commit("setLoading", true);

      collectionDB
        .deleteItem(itemId)
        .then(() => {
          dispatch("loadList");
        })
        .catch((error) => {
          commit("setError", error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    },
    updateItem({ commit, dispatch }, { itemId, data }) {
      commit("setError", null);
      commit("setLoading", true);

      collectionDB
        .updateItem(itemId, data)
        .then(() => {
          dispatch("loadList");
        })
        .catch((error) => {
          commit("setError", error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    },
    loadFilteredData(
      { commit },
      { fieldTitle, compareOperator, valueToCompare }
    ) {
      commit("setError", null);
      commit("setLoading", true);
      collectionDB
        .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
        .then((list) => {
          commit("setItemsList", list);
        })
        .catch((error) => {
          commit("setError", error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    },
  },
};
