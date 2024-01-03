<template>
  <aside class="filter">
    <div class="filter__seller">
      <p class="filter__seller-title title">{{ $t("aside.seller") }}</p>
      <div>
        <label>
          <input v-model="filterObj.seller" type="checkbox" value="rozetka" />
          Rozetka
        </label>
      </div>
      <div>
        <label>
          <input v-model="filterObj.seller" type="checkbox" value="other" />
          {{ $t("aside.otherSellers") }}
        </label>
      </div>
    </div>
    <div class="filter__brand">
      <p class="filter__seller-title title">{{ $t("aside.brand") }}</p>
      <input
        v-model="filterObj.brandText"
        type="text"
        :placeholder="$t('actionTitles.search')"
      />
      <div v-for="brand in getItemBrands" :key="brand">
        <label>
          <input v-model="filterObj.brand" type="checkbox" :value="brand" />
          {{ brand }}
        </label>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "itemsFilter",
  data() {
    return {
      filterObj: {
        seller: [],
        brand: [],
      },
    };
  },
  computed: {
    ...mapGetters("items", ["getItemBrands"]),
  },
  methods: {
    ...mapActions("items", ["setFilter"]),
  },
  /* eslint-disable */
  watch: {
    filterObj: {
      handler(newValue) {
        this.setFilter(newValue);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  border-right: 1px solid grey;
  width: 200px;
}
.filter {
  .title {
    color: #4078a9;
  }
}
</style>
