<template>
  <div>
    <label>
      <h3>Категорія</h3>
      <select v-model="currentCategory">
        <option
          v-for="category in studentsCategoryList"
          :key="category.title"
          :value="category"
        >
          {{ category.title }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { studentsCategoryList } from "./settings";
export default {
  name: "StudentsCategory",

  computed: {
    ...mapGetters(["getCurrentCategory"]),
    studentsCategoryList() {
      return studentsCategoryList;
    },
    currentCategory: {
      get() {
        return this.getCurrentCategory;
      },
      set(val) {
        this.setStudentCategory(val);
      },
    },
  },
  methods: {
    ...mapActions(["setStudentCategory"]),
  },
};
</script>

<style lang="scss" scoped>
h3 {
  display: inline;
  margin: 0 10px 0 0;
}
</style>
