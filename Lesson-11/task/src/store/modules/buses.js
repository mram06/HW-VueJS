export default {
  namespaced: true,
  state: {
    busesList: [
      { id: 1, numberPlate: "AA1324XF", seats: 50 },
      { id: 2, numberPlate: "AI5321PI", seats: 40 },
      { id: 3, numberPlate: "AK1231XG", seats: 30 },
    ],
  },
  getters: {
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
  },
};
