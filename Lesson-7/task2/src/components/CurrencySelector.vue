<template>
  <div class="container">
    <h3>Валюта</h3>
    <select
      v-model="selectedCurrency"
      @change="changeCurrency(selectedCurrency)"
    >
      <option value="uah" selected>Гривня</option>
      <option value="usd">Долар</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CurrencySelector",

  data() {
    return {
      selectedCurrency: "uah",
    };
  },

  methods: {
    ...mapActions(["changeCurrency"]),
  },
};
</script>

<style lang="scss" scoped>
select {
  font-size: 16px;
  padding: 5px 10px;
}
</style>
