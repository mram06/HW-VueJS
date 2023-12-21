<template>
  <h3>Фільтр</h3>
  <label>
    Назва
    <input v-model="filter" type="text" />
  </label>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductsFilter",
  data() {
    return {
      filter: "",
    };
  },
  methods: {
    ...mapActions(["setFilter"]),
  },
  watch: {
    filter: {
      handler(newValue) {
        this.setFilter(newValue);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
