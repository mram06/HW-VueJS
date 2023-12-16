<template>
  <div>
    <p class="red">Навчальний план</p>
    <div>
      <div v-for="id in receivedIdList" :key="id" class="row">
        <div>{{ getSubjectById(id[0]).subject }}</div>
        <div>- {{ getTeacherById(id[2]).name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StudyPlan",
  computed: {
    ...mapGetters(["getSubjectById", "getTeacherById"]),
    receivedIdList() {
      return this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
.row {
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  margin: 0 auto;
}
</style>
