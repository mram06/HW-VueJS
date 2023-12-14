<template>
  <h3>{{ configTitle }}</h3>
  <label>
    Предмет
    <select v-model="lessonDataObj.subjectId">
      <option v-for="subject in subjects" :key="subject.id" :value="subject.id">
        {{ subject.subject }}
      </option>
    </select>
  </label>
  <label>
    Предмет
    <select v-model="lessonDataObj.classId">
      <option v-for="_class in classesList" :key="_class.id" :value="_class.id">
        {{ _class.classTitle }}
      </option>
    </select>
  </label>
  <button @click="onAction">{{ actionButtonTitle }}</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { subjects } from "@/constants/subjects";
import { classesList } from "@/constants/classes";

export default {
  name: "SubjectEdit",
  data() {
    return {
      lessonDataObj: {},
      subjects,
      classesList,
    };
  },
  computed: {
    ...mapGetters("lessons", ["getLessonById"]),
    receivedId() {
      return this.$route.params.id;
    },
    configTitle() {
      return this.receivedId
        ? "Зміна даних про урок"
        : "Додавання нового заняття";
    },
    actionButtonTitle() {
      return this.receivedId ? "Зберегти" : "Додати";
    },
  },
  methods: {
    ...mapActions("lessons", ["updateLesson", "addLesson"]),
    onAction() {
      if (this.receivedId) this.updateLesson(this.lessonDataObj);
      else this.addLesson(this.lessonDataObj);
      this.$router.push({ name: "subjects" });
    },
  },
  created() {
    this.lessonDataObj = { ...this.getLessonById(this.receivedId) };
  },
};
</script>

<style lang="scss" scoped></style>
