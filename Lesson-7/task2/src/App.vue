<template>
  <h2>Вітаємо на нашому сайті</h2>
  <div class="row">
    <items-list />
    <currency-selector />
  </div>
  <cart-panel />
</template>

<script>
import CartPanel from "./components/CartPanel.vue";
import CurrencySelector from "./components/CurrencySelector.vue";
import ItemsList from "./components/ItemsList.vue";

export default {
  name: "App",
  components: { ItemsList, CurrencySelector, CartPanel },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  display: flex;
  justify-content: space-between;

  max-width: 500px;
}
</style>
