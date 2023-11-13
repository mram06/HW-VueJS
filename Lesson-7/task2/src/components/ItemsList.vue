<template>
  <div class="container">
    <h3>Список товарів</h3>
    <div v-for="item in getItemsWithCurrency" :key="item.id" class="item">
      <div class="item__title">{{ item.title }}</div>
      <div class="item__price">{{ item.price.toFixed(2) }}</div>
      <div class="item__button">
        <button @click="addItemToCart(item.id)">Купити</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ItemsList",

  computed: {
    ...mapGetters(["getItemsWithCurrency"]),
  },

  methods: {
    ...mapActions(["addItemToCart"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 500px;
}
.item {
  display: flex;
  justify-content: space-between;
  gap: 10px;

  padding: 3px;

  border-bottom: 1px solid grey;

  max-width: 300px;
  &__price {
    margin-left: auto;
  }
  &__button {
    & > button {
      cursor: pointer;
      border-radius: 5px;
      border: none;
      padding: 5px 10px;
      color: white;
      background-color: rgb(45, 192, 26);
    }
  }
}
</style>
