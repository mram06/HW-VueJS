import { createStore } from "vuex";
import lessons from "@/store/modules/lessons";
import teachers from "@/store/modules/teachers";
import assignments from "@/store/modules/assignments";

export default createStore({
  state: {
    loginStatus: false,
    loginData: { username: "admin", password: "admin" },
  },
  getters: {
    getLoginStatus: (state) => state.loginStatus,
    getLoginName: (state) => state.loginData.username,
  },
  mutations: {
    setLoginStatus(state, status) {
      state.loginData = status;
    },
    authorize(state, userLoginData) {
      if (
        state.loginData.username === userLoginData.username &&
        state.loginData.password === userLoginData.password
      ) {
        state.loginStatus = true;
      }
    },
  },
  actions: {
    setLoginStatus({ commit }, status) {
      commit("setLoginStatus", status);
    },
    authorize({ commit }, userLoginData) {
      commit("authorize", userLoginData);
    },
  },
  modules: { lessons, teachers, assignments },
});
