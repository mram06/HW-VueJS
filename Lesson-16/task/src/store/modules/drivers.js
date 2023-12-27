import { isMatchFilter } from "../helpers";
import DbOperations from "@/store/DbOperations";
const collectionDB = new DbOperations("drivers");

export default {
  namespaced: true,
  state: {
    driversList: [],
    loading: false,
    error: null,
    filter: {},
  },
  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,

    getDriversList: (state) => state.driversList,
    getFilteredDriversList: (state) =>
      state.driversList.filter((driver) => isMatchFilter(driver, state.filter)),
    getDriverById: (state) => (driverId) =>
      state.driversList.find((driver) => driver.id == driverId),
  },
  mutations: {
    deleteDriver(state, driverId) {
      state.driversList = state.driversList.filter(
        (driver) => driver.id !== driverId
      );
    },
    addDriver(state, driver) {
      state.driversList.push({ id: new Date().getTime(), ...driver });
    },
    updateDriver(state, driverToUpdate) {
      const driverIndex = state.driversList.findIndex(
        (driver) => driver.id == driverToUpdate.id
      );
      state.driversList[driverIndex] = driverToUpdate;
    },
    setFitler(state, filterData) {
      state.filter = filterData;
    },
    // ---------------------------------
    setItemsList(state, itemsList) {
      state.driversList = itemsList;
    },
    setLoading(state, value) {
      state.loading = value;
    },
    setError(state, error) {
      state.error = error;
    },
    deleteItem(state, itemId) {
      state.driversList.filter((driver) => driver.id !== itemId);
    },
  },
  actions: {
    deleteDriver({ commit, dispatch }, driverId) {
      commit("deleteDriver", driverId);
      dispatch("trip/deleteTripByDriverId", driverId, { root: true });
    },
    addDriver({ commit }, driver) {
      commit("addDriver", driver);
    },
    updateDriver({ commit }, driver) {
      commit("updateDriver", driver);
    },
    setFitler({ commit }, filterData) {
      commit("setFitler", filterData);
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
