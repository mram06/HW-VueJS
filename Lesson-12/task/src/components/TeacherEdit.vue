<template>
  <h3>{{ configTitle }}</h3>
  <label>
    Ім'я вчителя
    <input v-model="teacherDataObj.name" type="text" />
  </label>
  <label>
    Предмет
    <select v-model="teacherDataObj.subjectId">
      <option v-for="subject in subjects" :key="subject.id" :value="subject.id">
        {{ subject.subject }}
      </option>
    </select>
  </label>
  <button @click="onAction">{{ actionButtonTitle }}</button>
</template>

<script>
import { subjects } from "@/constants/subjects";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TeacherEdit",
  data() {
    return {
      teacherDataObj: {},
      subjects,
    };
  },
  computed: {
    ...mapGetters("teachers", ["getTeacherById"]),
    receivedId() {
      return this.$route.params.id;
    },
    configTitle() {
      return this.receivedId
        ? "Зміна даних про вчителя"
        : "Додавання нового вчителя";
    },
    actionButtonTitle() {
      return this.receivedId ? "Зберегти" : "Додати";
    },
  },
  methods: {
    ...mapActions("teachers", ["updateTeacher", "addTeacher"]),
    onAction() {
      if (this.receivedId) this.updateTeacher(this.teacherDataObj);
      else this.addTeacher(this.teacherDataObj);
      this.$router.push({ name: "teachers" });
    },
  },
  created() {
    this.teacherDataObj = { ...this.getTeacherById(this.receivedId) };
  },
};
</script>

<style lang="scss" scoped></style>
