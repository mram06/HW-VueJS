<template>
  <div class="container">
    <raspberry-card
      v-for="card in cardsListData"
      :key="card.id"
      :card-data="card"
    />
  </div>
</template>

<script>
import RaspberryCard from "./RaspberryCard.vue";

export default {
  name: "RaspberryPanel",
  props: {
    cardsListData: {
      type: Array,
      default: () => [],
    },
  },
  components: { RaspberryCard },
};
</script>

<style lang="css" scoped>
.container {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    max-width: 700px;
}
</style>
