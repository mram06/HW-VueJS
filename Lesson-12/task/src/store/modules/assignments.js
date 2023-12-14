import { getClassById } from "@/constants/classes";
import { getSubjectById } from "@/constants/subjects";
export default {
  namespaced: true,
  state: {
    assignmentsList: [
      { id: 1, lessonId: 3, teacherId: 2, classId: 2 },
      { id: 2, lessonId: 1, teacherId: 5, classId: 5 },
      { id: 3, lessonId: 5, teacherId: 7, classId: 7 },
      { id: 4, lessonId: 2, teacherId: 1, classId: 4 },
      { id: 5, lessonId: 4, teacherId: 3, classId: 3 },
      { id: 6, lessonId: 6, teacherId: 6, classId: 1 },
      { id: 7, lessonId: 7, teacherId: 4, classId: 6 },
    ],
  },
  getters: {
    getFilledAssignmentsList: (state, getters, rootState, rootGetters) =>
      state.assignmentsList.map((assignment) => ({
        id: assignment.id,
        lesson: getSubjectById(assignment.lessonId).subject,
        teacher: rootGetters["teachers/getTeacherById"](assignment.teacherId)
          .name,
        classTitle: getClassById(assignment.classId).classTitle,
      })),
    getAssignmentById: (state) => (assginmentId) =>
      state.assignmentsList.find((assginment) => assginment.id == assginmentId),
  },
  mutations: {
    deleteAssignment(state, assignmentId) {
      state.assignmentsList = state.assignmentsList.filter(
        (assignment) => assignment.id !== assignmentId
      );
    },
    updateAssignment(state, assginmentObj) {
      const index = state.assignmentsList.findIndex(
        (assignment) => assignment.id == assginmentObj.id
      );
      state.assignmentsList[index] = assginmentObj;
    },
    addAssignment(state, assginmentObj) {
      state.assignmentsList.push({
        id: new Date().getTime(),
        ...assginmentObj,
      });
    },
    deleteAssignmentByTeacherId(state, teacherIdToDelete) {
      state.assignmentsList = state.assignmentsList.filter(
        (assignment) => assignment.teacherId !== teacherIdToDelete
      );
    },
    deleteAssignmentBySubjectId(state, subjectIdToDelete) {
      state.assignmentsList = state.assignmentsList.filter(
        (assginment) => assginment.lessonId !== subjectIdToDelete
      );
    },
  },
  actions: {
    deleteAssignment({ commit }, assignmentId) {
      commit("deleteAssignment", assignmentId);
    },
    updateAssignment({ commit }, assginmentObj) {
      commit("updateAssignment", assginmentObj);
    },
    addAssignment({ commit }, assginmentObj) {
      commit("addAssignment", assginmentObj);
    },
    deleteAssignmentByTeacherId({ commit }, teacherId) {
      commit("deleteAssignmentByTeacherId", teacherId);
    },
    deleteAssignmentBySubjectId({ commit }, subjectId) {
      commit("deleteAssignmentBySubjectId", subjectId);
    },
  },
};
