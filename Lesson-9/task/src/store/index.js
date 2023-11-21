import { createStore } from "vuex";
import {
  laptopsData,
  carBatteriesData,
  highPressureDevicesData,
  powerStationsData,
} from "@/constants/items_data";

export default createStore({
  state() {
    return {
      laptopsData,
      carBatteriesData,
      highPressureDevicesData,
      powerStationsData,
      currentCategory: null,
    };
  },
  getters: {
    getLaptopsList: ({ laptopsData }) => laptopsData,
    getCarBatteriesList: ({ carBatteriesData }) => carBatteriesData,
    getHighPressureDevicesList: ({ highPressureDevicesData }) =>
      highPressureDevicesData,
    getPowerStationsList: ({ powerStationsData }) => powerStationsData,

    getCurrentCategory: ({ currentCategory }) => currentCategory,

    getItems({ currentCategory }, getters) {
      if (currentCategory === "laptops") return getters.getLaptopsList;
      else if (currentCategory === "carBatteries")
        return getters.getCarBatteriesList;
      else if (currentCategory === "powerStations")
        return getters.getPowerStationsList;
      else if (currentCategory === "highPressureDevices")
        return getters.getHighPressureDevicesList;
    },
  },
  mutations: {
    setCategory(state, category) {
      state.currentCategory = category;
    },
  },
  actions: {
    setCategory({ commit }, category) {
      commit("setCategory", category);
    },
  },
  modules: {},
});
