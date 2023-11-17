<template>
  <div class="container">
    <selector-panel />
    <items-panel />
  </div>
</template>

<script>
import ItemsPanel from "@/components/task1/ItemsPanel.vue";
import SelectorPanel from "@/components/task1/SelectorPanel.vue";

export default {
  name: "TaskLaptops",
  components: { SelectorPanel, ItemsPanel },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
