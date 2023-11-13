<template>
  <div>
    <h3>Кошик</h3>
    <div v-if="getCartSum">
      <div
        v-for="(item, index) in getUserCartListWithCurrency"
        :key="index"
        class="item"
      >
        <div class="item__title">{{ item.title }}</div>
        <div class="item__price">{{ item.price.toFixed(2) }}</div>
        <div class="item__button">
          <button @click="removeItemFromCart(index)">Видалити</button>
        </div>
      </div>
      <div>
        <h3>Разом до сплати</h3>
        <div class="cart-sum">
          {{ currencySign }} {{ getCartSum.toFixed(2) }}
        </div>
        <button class="buy-button">Сплатити</button>
      </div>
    </div>
    <div v-else>Кошик порожній</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartPanel",

  data() {
    return {
      cartSum: null,
    };
  },

  computed: {
    ...mapGetters(["getUserCartListWithCurrency", "getCurrentCurrency"]),
    getCartSum() {
      let sum = 0;
      for (const item of this.getUserCartListWithCurrency) {
        sum += item.price;
      }
      return sum;
    },
    currencySign() {
      return this.getCurrentCurrency === "uah" ? "₴" : "$";
    },
  },

  methods: {
    ...mapActions(["removeItemFromCart"]),
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
      background-color: rgb(188, 29, 29);
    }
  }
}
.cart-sum {
  display: inline;
  font-size: 22px;
  font-weight: bold;
}
.buy-button {
  cursor: pointer;
  margin: 0 0 0 50px;
  font-size: 22px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  padding: 10px 10px;
  color: white;
  background-color: rgb(45, 192, 26);
}
</style>
