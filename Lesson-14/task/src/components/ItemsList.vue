<template>
  <div class="card-container">
    <item-card
      v-for="item in getFilteredItemsList"
      :key="item.id"
      :info="{
        img: item.imgSrc,
        title: item.title,
        label: item.price,
      }"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ItemCard from "./ItemCard.vue";

export default {
  name: "ItemsList",
  components: { ItemCard },
  computed: {
    ...mapGetters(["getFilteredItemsList"]),
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
