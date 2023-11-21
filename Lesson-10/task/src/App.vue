<template>
  <div class="container">
    <div class="wrapper">
      <products-filters :items-list="itemsData" />
      <products-list :items-list="itemsData" />
    </div>
  </div>
</template>

<script>
import ProductsFilters from "./components/ProductsFilters.vue";
import ProductsList from "./components/ProductsList.vue";

import { itemsData } from "@/constants/items_data.js";

export default {
  name: "App",
  components: {
    ProductsFilters,
    ProductsList,
  },
  data() {
    return {
      itemsData,
    };
  },
};
</script>

<style lang="scss">
@import url("./assets/style/index.scss");
</style>
