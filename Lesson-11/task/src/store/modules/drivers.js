import { isMatchFilter } from "../helpers";

export default {
  namespaced: true,
  state: {
    driversList: [
      {
        id: 1,
        name: "Іванов І.І.",
        experience: 12,
      },
      {
        id: 2,
        name: "Григоренко П.А.",
        experience: 10,
      },
    ],
    filter: {},
  },
  getters: {
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
  },
};
