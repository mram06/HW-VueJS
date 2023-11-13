<template>
  <div class="container">
    <div><students-list :students-data="filteredStudentsList" /></div>
    <div><score-category v-model="scoreCategory" /></div>
    <div><students-category /></div>
  </div>
</template>

<script>
import ScoreCategory from "./ScoreCategory.vue";
import StudentsCategory from "./StudentsCategory.vue";
import StudentsList from "./StudentsList.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "StudentsActivity",
  components: {
    StudentsList,
    ScoreCategory,
    StudentsCategory,
  },

  data() {
    return {
      scoreCategory: null,
    };
  },

  computed: {
    ...mapGetters([
      "getStudentsList",
      "getStudentsListWithScoreCategory",
      "getFilteredByStudentsCategoryList",
    ]),
    filteredStudentsList() {
      if (this.scoreCategory)
        return this.getStudentsListWithScoreCategory(this.scoreCategory);
      else return this.getFilteredByStudentsCategoryList;
    },
  },

  methods: {
    ...mapActions(["loadStudentsList"]),
  },

  created() {
    this.loadStudentsList();
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  max-width: 1000px;
}
</style>
