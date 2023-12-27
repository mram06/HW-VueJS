import DbOperations from "@/store/DbOperations";
const collectionDB = new DbOperations("trips");
export default {
  namespaced: true,
  state: {
    tripsList: [],
    loading: false,
    error: null,
  },
  getters: {
    isLoading: (state) => state.loading,
    hasError: (state) => state.error,

    getTripsList: (state) => state.tripsList,
    getFilledTripsList: (state, getters, rootState, rootGetters) =>
      state.tripsList.map((trip) => ({
        id: trip.id,
        driverName: rootGetters["drivers/getDriverById"](trip.driverId).name,
        busNumber: rootGetters["buses/getBusById"](trip.busId).numberPlate,
      })),
  },
  mutations: {
    deleteTripByBusId(state, busId) {
      state.tripsList = state.tripsList.filter((trip) => trip.busId !== busId);
    },
    deleteTripByDriverId(state, driverId) {
      state.tripsList = state.tripsList.filter(
        (trip) => trip.driverId !== driverId
      );
    },
    deleteTrip(state, tripId) {
      state.tripsList = state.tripsList.filter((trip) => trip.id !== tripId);
    },
    addTrip(state, tripObj) {
      state.tripsList.push({ id: new Date().getTime(), ...tripObj });
    },
    // ---------------------------------
    setItemsList(state, itemsList) {
      state.tripsList = itemsList;
    },
    setLoading(state, value) {
      state.loading = value;
    },
    setError(state, error) {
      state.error = error;
    },
    deleteItem(state, itemId) {
      state.tripsList.filter((trip) => trip.id !== itemId);
    },
    addItem(state, item) {
      state.tripsList.push(item);
    },
  },
  actions: {
    deleteTripByDriverId({ commit }, driverId) {
      commit("deleteTripByDriverId", driverId);
    },
    deleteTripByBusId({ commit }, busId) {
      commit("deleteTripByBusId", busId);
    },
    deleteTrip({ commit }, tripId) {
      commit("deleteTrip", tripId);
    },
    addTrip({ commit }, tripObj) {
      commit("addTrip", tripObj);
    },
    loadAllLists({ dispatch }) {
      dispatch("loadList");
      dispatch("drivers/loadList", { root: true });
      dispatch("buses/loadList", { root: true });
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
