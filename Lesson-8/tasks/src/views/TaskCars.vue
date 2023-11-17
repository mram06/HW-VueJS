<template>
  <div class="container">
    <filter-panel />
    <cars-panel />
  </div>
</template>

<script>
import CarsPanel from "@/components/task2/CarsPanel.vue";
import FilterPanel from "@/components/task2/FilterPanel.vue";

export default {
  name: "TaskCars",
  components: { FilterPanel, CarsPanel },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  max-width: 1440px;
  margin: auto;
}
</style>
