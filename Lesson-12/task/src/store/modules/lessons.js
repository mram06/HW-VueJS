import { getSubjectById } from "@/constants/subjects";
import { getClassById } from "@/constants/classes";
export default {
  namespaced: true,
  state: {
    lessonsList: [
      { id: 1, subjectId: 7, classId: 3 },
      { id: 2, subjectId: 2, classId: 5 },
      { id: 3, subjectId: 5, classId: 1 },
      { id: 4, subjectId: 9, classId: 6 },
      { id: 5, subjectId: 4, classId: 2 },
      { id: 6, subjectId: 10, classId: 4 },
      { id: 7, subjectId: 1, classId: 7 },
    ],
  },
  getters: {
    getFilledLessonsList: (state) =>
      state.lessonsList.map((lesson) => ({
        id: lesson.id,
        subject: getSubjectById(lesson.subjectId).subject,
        classTitle: getClassById(lesson.classId).classTitle,
      })),
    getLessonById: (state) => (lessonId) =>
      state.lessonsList.find((lesson) => lesson.id == lessonId),
    getFilledLessonById: (state, getters) => (lessonId) =>
      getters.getFilledLessonsList.find((lesson) => lesson.id == lessonId),
  },
  mutations: {
    deleteLesson(state, lessonId) {
      state.lessonsList = state.lessonsList.filter(
        (lesson) => lesson.id !== lessonId
      );
    },
    updateLesson(state, lessonObj) {
      const lessonIndex = state.lessonsList.findIndex(
        (lesson) => lesson.id == lessonObj.id
      );
      state.lessonsList[lessonIndex] = lessonObj;
    },
    addLesson(state, lessonObj) {
      state.lessonsList.push({ id: new Date().getTime(), ...lessonObj });
    },
  },
  actions: {
    deleteLesson({ commit, dispatch }, lessonId) {
      commit("deleteLesson", lessonId);
      dispatch("assignments/deleteAssignmentBySubjectId", lessonId, {
        root: true,
      });
    },
    updateLesson({ commit }, lessonObj) {
      commit("updateLesson", lessonObj);
    },
    addLesson({ commit }, lessonObj) {
      commit("addLesson", lessonObj);
    },
  },
};
