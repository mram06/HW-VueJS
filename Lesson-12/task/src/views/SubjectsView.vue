<template>
  <div class="container">
    <div class="row title">
      <div>ПІБ</div>
      <div>СПЕЦІАЛІЗАЦІЯ</div>
    </div>
    <ol>
      <li v-for="lesson in getFilledLessonsList" :key="lesson.id">
        <div class="row">
          <div>{{ lesson.subject }}</div>
          <div>{{ lesson.classTitle }}</div>
          <div class="tools">
            <button @click="onEdit(lesson.id)">Edit</button>
            <button @click="deleteLesson(lesson.id)">Delete</button>
          </div>
        </div>
      </li>
    </ol>
    <button @click="onAdd">Додати заняття</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SubjectsView",
  data() {
    return {};
  },

  computed: {
    ...mapGetters("lessons", ["getFilledLessonsList"]),
  },
  methods: {
    ...mapActions("lessons", ["deleteLesson"]),
    onEdit(lessonId) {
      this.$router.push({ name: "subjectConfig", params: { id: lessonId } });
    },
    onAdd() {
      this.$router.push({ name: "subjectConfig" });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 500px;
}
.row {
  display: flex;
  justify-content: space-between;
  & > div {
    width: 150px;
    text-align: left;
  }
}
.title {
  font-weight: bold;
}
.tools {
  display: flex;
  gap: 7px;
}
</style>
