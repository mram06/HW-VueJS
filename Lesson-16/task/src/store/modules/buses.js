import DbOperations from "@/store/DbOperations";
const collectionDB = new DbOperations("buses");
export default {
  namespaced: true,
  state: {
    busesList: [],
    loading: false,
    error: null,
  },
  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,

    getBusesList: (state) => state.busesList,
    getBusById: (state) => (busId) =>
      state.busesList.find((bus) => bus.id == busId),
  },
  mutations: {
    deleteBus(state, busId) {
      state.busesList = state.busesList.filter((bus) => bus.id !== busId);
    },
    addBus(state, bus) {
      state.busesList.push({ id: new Date().getTime(), ...bus });
    },
    updateBus(state, busToUpdate) {
      const busIndex = state.busesList.findIndex(
        (bus) => bus.id == busToUpdate.id
      );
      state.busesList[busIndex] = busToUpdate;
    },
    // ---------------------------------
    setItemsList(state, itemsList) {
      state.busesList = itemsList;
    },
    setLoading(state, value) {
      state.loading = value;
    },
    setError(state, error) {
      state.error = error;
    },
    deleteItem(state, itemId) {
      state.busesList.filter((bus) => bus.id !== itemId);
    },
    addItem(state, item) {
      state.busesList.push(item);
    },
  },
  actions: {
    deleteBus({ commit, dispatch }, busId) {
      commit("deleteBus", busId);
      dispatch("trip/deleteTripByBusId", busId, { root: true });
    },
    addBus({ commit }, bus) {
      commit("addBus", bus);
    },
    updateBus({ commit }, bus) {
      commit("updateBus", bus);
    },
    // ----------------------------------------------
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
    addItem({ commit }, item) {
      commit("setError", null);
      commit("setLoading", true);
      collectionDB
        .addItem(item)
        .then(() => {
          commit("addItem", item);
        })
        .catch((error) => {
          commit("setError", error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    },
    deleteItem({ commit }, itemId) {
      commit("setError", null);
      commit("setLoading", true);

      collectionDB
        .deleteItem(itemId)
        .then(() => {
          commit("deleteItem", itemId);
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
