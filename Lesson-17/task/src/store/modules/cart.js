import DbOperations from "@/store/helpers/DbOperations";
const collectionDB = new DbOperations("cart");
export default {
  namespaced: true,
  state: () => ({
    cartList: [],
    loading: false,
    error: null,
  }),
  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,

    getCartList: (state) => state.cartList,
    getCartByUserId: (state) => (id) =>
      state.cartList.find((cart) => cart.userId == id),
  },
  mutations: {
    setItemsList(state, itemsList) {
      state.cartList = itemsList;
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
