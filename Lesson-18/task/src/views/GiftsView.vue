<template>
  <div class="container">
    <h3>Список подарунків</h3>
    <div v-for="(gift, index) in giftsList" :key="gift.id" class="row">
      <div>{{ index + 1 }}</div>
      <div>{{ gift.title }}</div>
      <div><button @click="deleteGift(gift.id)">Видалити</button></div>
    </div>
    <br />
    <label>
      Новий подарунок
      <input v-model="newGift" type="text" />
      <button @click="onAdd">Додати</button>
    </label>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useGiftsStore } from "@/stores/gifts";

export default {
  name: "GiftsView",
  data() {
    return {
      newGift: null,
    };
  },
  computed: {
    ...mapState(useGiftsStore, ["giftsList"]),
  },
  methods: {
    ...mapActions(useGiftsStore, ["addGift", "deleteGift"]),
    onAdd() {
      this.addGift(this.newGift);
      this.newGift = null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
