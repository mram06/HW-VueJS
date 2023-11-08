<template>
  <aside>
    <!-- seller -->
    <div class="category">
      <div class="filter__title">Продавець</div>
      <div class="filter__item">
        <label> <input type="checkbox" />Rozetka </label>
      </div>
      <div class="filter__item">
        <label> <input type="checkbox" />Інші продавці </label>
      </div>
    </div>
    <!-- end of seller -->

    <!-- brand -->
    <div class="category">
      <div class="filter__title">Бренд</div>
      <div
        class="filter__item"
        v-for="brand in filteredBrandsList"
        :key="brand"
      >
        <label><input type="checkbox" />{{ brand }}</label>
      </div>
    </div>

    <!-- end of brand -->
  </aside>
</template>

<script>
import { setTransitionHooks } from "vue";

export default {
  name: "ProductsFilters",

  props: {
    itemsList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      filteredBrandsList: null,
    };
  },

  created() {
    setTransitionHooks;
    this.filteredBrandsList = [
      ...new Set(this.itemsList.map((item) => item.brand)),
    ];
  },
};
</script>

<style lang="scss" scoped>
body {
  font-size: 14px;
}
aside {
  width: 250px;
  border-right: 0.5px solid rgb(210, 210, 210);
}
.filter__title {
  color: #3e77aa;
}
.filter__item {
  padding: 8px 0;
  & input {
    margin: 0 8px 0 0;
    width: 14px;
    height: 14px;
    accent-color: green;
  }
}
.category {
  padding: 5px 0;
  border-bottom: 0.5px solid rgb(210, 210, 210);
}
</style>
