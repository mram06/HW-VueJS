<template>
  <div class="container">
    <item-card v-for="item in itemDataList" :key="item.id" :card-data="item" />
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue";

export default {

  props: {
    itemDataList: {
      type: Array,
      default: () => [],
    },
  },
  components: { ItemCard },
};
</script>

<style lang="scss">
</style>
