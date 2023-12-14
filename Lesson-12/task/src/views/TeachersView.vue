<template>
  <div class="container">
    <div class="row title">
      <div>ПІБ</div>
      <div>СПЕЦІАЛІЗАЦІЯ</div>
    </div>
    <ol>
      <li v-for="teacher in getFilledTeachersList" :key="teacher.id">
        <div class="row">
          <div>{{ teacher.name }}</div>
          <div>{{ teacher.subject }}</div>
          <div class="tools">
            <button @click="onEdit(teacher.id)">Edit</button>
            <button @click="deleteTeacher(teacher.id)">Delete</button>
          </div>
        </div>
      </li>
    </ol>
    <button @click="onAdd">Додати вчителя</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TeachersView",
  computed: {
    ...mapGetters("teachers", ["getFilledTeachersList"]),
  },
  methods: {
    ...mapActions("teachers", ["deleteTeacher"]),
    onEdit(teacherId) {
      this.$router.push({ name: "teacherConfig", params: { id: teacherId } });
    },
    onAdd() {
      this.$router.push({ name: "teacherConfig" });
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
