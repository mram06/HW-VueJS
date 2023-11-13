<template>
  <h3>Список студентів</h3>
  <div class="title_row">
    <h4>ПІБ</h4>
    <h4>Середній бал</h4>
  </div>

  <div v-for="student in studentsData" :key="student.id" class="container">
    <div>{{ student.name }}</div>
    <div>{{ student.score }}</div>
  </div>
</template>

<script>
export default {
  name: "StudentsList",

  props: {
    studentsData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 0;
}
.container {
  display: flex;
  justify-content: space-between;
  width: 300px;
}
.title_row {
  display: flex;
  justify-content: space-between;
  width: 300px;
}
</style>
