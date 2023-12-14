<template>
  <h3>{{ pageTitle }}</h3>
  <div>
    <label>
      ПІБ
      <select v-model="assignmentDataObj.teacherId">
        <option
          v-for="teacher in getTeachersList"
          :key="teacher.id"
          :value="teacher.id"
        >
          {{ teacher.name }}
        </option>
      </select>
    </label>
    <label>
      СПЕЦІАЛІЗАЦІЯ
      <select v-model="assignmentDataObj.lessonId">
        <option
          v-for="subject in subjects"
          :key="subject.id"
          :value="subject.id"
        >
          {{ subject.subject }}
        </option>
      </select>
    </label>
    <label>
      КЛАС
      <select v-model="assignmentDataObj.classId">
        <option
          v-for="_class in classesList"
          :key="_class.id"
          :value="_class.id"
        >
          {{ _class.classTitle }}
        </option>
      </select>
    </label>
    <button @click="onAction">{{ actionButtonTitle }}</button>
  </div>
</template>

<script>
import { subjects } from "@/constants/subjects";
import { classesList } from "@/constants/classes";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ManagementEdit",
  data() {
    return {
      assignmentDataObj: {},
      subjects,
      classesList,
    };
  },
  computed: {
    ...mapGetters("assignments", ["getAssignmentById"]),
    ...mapGetters("teachers", ["getTeachersList"]),
    receivedId() {
      return this.$route.params.id;
    },
    pageTitle() {
      return this.receivedId
        ? "Зміна призначення"
        : "Додавання нового призначення";
    },
    actionButtonTitle() {
      return this.receivedId ? "Зберегти" : "Додати";
    },
  },
  methods: {
    ...mapActions("assignments", ["updateAssignment", "addAssignment"]),
    onAction() {
      if (this.receivedId) this.updateAssignment(this.assignmentDataObj);
      else this.addAssignment(this.assignmentDataObj);
      this.$router.push({ name: "management" });
    },
  },
  created() {
    this.assignmentDataObj = { ...this.getAssignmentById(this.receivedId) };
  },
};
</script>

<style lang="scss" scoped></style>
