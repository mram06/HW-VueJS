export default {
  namespaced: true,
  state: {
    tripsList: [
      {
        id: 1,
        driverId: 2,
        busId: 1,
      },
      {
        id: 2,
        driverId: 1,
        busId: 2,
      },
    ],
  },
  getters: {
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
  },
};
