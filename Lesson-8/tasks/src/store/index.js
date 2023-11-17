import { createStore } from "vuex";
import {
  laptopsData,
  carBatteriesData,
  highPressureDevicesData,
  powerStationsData,
} from "@/constants/items_data";
import { carsList } from "@/constants/cars_data";
import { isCorrespondToFilter } from "@/store/helpers";

export default createStore({
  state() {
    return {
      // -----------------------------task1----------------------------
      laptopsData: [...laptopsData],
      carBatteriesData: [...carBatteriesData],
      highPressureDevicesData: [...highPressureDevicesData],
      powerStationsData: [...powerStationsData],

      currentCategory: "laptops",

      // -----------------------------task2----------------------------
      carsData: [...carsList],
      filterObj: {},
    };
  },
  getters: {
    // -----------------------------task1----------------------------
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

    // -----------------------------task2----------------------------
    getCarsList: ({ carsData }) => carsData,

    getFilteredCarsList: (state) =>
      state.carsData.filter((car) =>
        isCorrespondToFilter(car, state.filterObj)
      ),
  },
  mutations: {
    // -----------------------------task1----------------------------
    setCategory(state, category) {
      state.currentCategory = category;
    },

    // -----------------------------task2----------------------------
    setFilter(state, filterObj) {
      state.filterObj = filterObj;
    },
  },
  actions: {
    // -----------------------------task1----------------------------
    setCategory({ commit }, category) {
      commit("setCategory", category);
    },

    // -----------------------------task2----------------------------
    setFilter({ commit }, filterObj) {
      commit("setFilter", filterObj);
    },
  },
  modules: {},
});
