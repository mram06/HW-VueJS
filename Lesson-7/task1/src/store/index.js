import { createStore } from "vuex";
import students from "@/constants/students.json";
import { getScoreIn5Category } from "@/store/helpers";

export default createStore({
  state() {
    return {
      studentsList: ["Data not loaded"],
      currentCategory: undefined,
    };
  },
  getters: {
    getFilteredByStudentsCategoryList: ({ studentsList, currentCategory }) => {
      if (!currentCategory) return studentsList;
      else
        return studentsList.filter(
          (student) =>
            student.score >= currentCategory.minScore &&
            student.score <= currentCategory.maxScore
        );
    },

    getCurrentCategory: ({ currentCategory }) => currentCategory,

    getStudentsList: ({ studentsList }) => studentsList,

    getStudentsListWithScoreCategory: (state, getters) => (scoreCategory) => {
      if (scoreCategory == 12) return getters.getFilteredByStudentsCategoryList;
      else {
        const studentsListCopy = JSON.parse(
          JSON.stringify(getters.getFilteredByStudentsCategoryList)
        );
        studentsListCopy.forEach((student) => {
          student.score = getScoreIn5Category(student.score);
        });
        return studentsListCopy;
      }
    },
  },
  mutations: {
    setStudentList(state, list) {
      state.studentsList = list;
    },
    setCategory(state, category) {
      state.currentCategory = category;
    },
  },
  actions: {
    loadStudentsList({ commit }) {
      commit("setStudentList", students);
    },
    setStudentCategory({ commit }, category) {
      commit("setCategory", category);
    },
  },
  modules: {},
});
