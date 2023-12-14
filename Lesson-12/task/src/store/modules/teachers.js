import { getSubjectById } from "@/constants/subjects";
export default {
  namespaced: true,
  state: {
    teachersList: [
      { id: 1, name: "Олександр", subjectId: 7 },
      { id: 2, name: "Наталія", subjectId: 2 },
      { id: 3, name: "Іван", subjectId: 5 },
      { id: 4, name: "Оксана", subjectId: 9 },
      { id: 5, name: "Андрій", subjectId: 4 },
      { id: 6, name: "Тетяна", subjectId: 10 },
      { id: 7, name: "Михайло", subjectId: 1 },
      { id: 8, name: "Вікторія", subjectId: 3 },
      { id: 9, name: "Сергій", subjectId: 8 },
      { id: 10, name: "Юлія", subjectId: 6 },
      { id: 11, name: "Артем", subjectId: 7 },
      { id: 12, name: "Олена", subjectId: 2 },
      { id: 13, name: "Володимир", subjectId: 5 },
      { id: 14, name: "Марія", subjectId: 9 },
      { id: 15, name: "Василь", subjectId: 4 },
    ],
  },
  getters: {
    getTeachersList: (state) => state.teachersList,
    getFilledTeachersList: (state) =>
      state.teachersList.map((teacher) => ({
        id: teacher.id,
        name: teacher.name,
        subject: getSubjectById(teacher.subjectId).subject,
      })),
    getTeacherById: (state) => (teacherId) =>
      state.teachersList.find((teacher) => teacher.id == teacherId),
  },
  mutations: {
    deleteTeacher(state, teacherId) {
      state.teachersList = state.teachersList.filter(
        (teacher) => teacher.id !== teacherId
      );
    },
    updateTeacher(state, teacherObj) {
      const teacherIndex = state.teachersList.findIndex(
        (teacher) => teacher.id == teacherObj.id
      );
      state.teachersList[teacherIndex] = teacherObj;
    },
    addTeacher(state, teacherObj) {
      state.teachersList.push({ id: new Date().getTime(), ...teacherObj });
    },
  },
  actions: {
    deleteTeacher({ commit, dispatch }, teacherId) {
      commit("deleteTeacher", teacherId);
      dispatch("assignments/deleteAssignmentByTeacherId", teacherId, {
        root: true,
      });
    },
    updateTeacher({ commit }, teacherObj) {
      commit("updateTeacher", teacherObj);
    },
    addTeacher({ commit }, teacherObj) {
      commit("addTeacher", teacherObj);
    },
  },
};
