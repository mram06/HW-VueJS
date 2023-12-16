import { createStore } from "vuex";

export default createStore({
  state: {
    loginStatus: false,
    userInfo: { name: "admin", password: "admin" },
    subjectsData: [
      { id: 1, subject: "Математика" },
      { id: 2, subject: "Інформатика" },
      { id: 3, subject: "Хімія" },
      { id: 4, subject: "Фізика" },
      { id: 5, subject: "Німецька мова" },
      { id: 6, subject: "Англійська мова" },
      { id: 7, subject: "Література" },
    ],
    teachersData: [
      { id: 1, name: "Світлана В." },
      { id: 2, name: "Інна М." },
      { id: 3, name: "Олександр Ф." },
      { id: 4, name: "Антон Ж." },
      { id: 5, name: "Марина М." },
    ],
  },
  getters: {
    getLoginStatus: (state) => state.loginStatus,
    getUserInfo: (state) => state.userInfo,
    getSubjectsList: (state) => state.subjectsData,
    getSubjectById: (state) => (subjectId) =>
      state.subjectsData.find((subject) => subject.id == subjectId),
    getTeacherById: (state) => (teacherId) =>
      state.teachersData.find((teacher) => teacher.id == teacherId),
    getTeachersList: (state) => state.teachersData,
  },
  mutations: {},
  actions: {},
  modules: {},
});
