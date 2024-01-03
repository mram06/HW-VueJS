<template>
  <div class="row">
    <items-filter />
    <items-panel />
  </div>
</template>

<script>
import ItemsFilter from "@/components/ItemsFilter.vue";
import ItemsPanel from "@/components/ItemsPanel.vue";

export default {
  name: "LaptopsView",
  components: { ItemsFilter, ItemsPanel },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>
