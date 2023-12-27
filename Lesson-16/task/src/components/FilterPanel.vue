<template>
  <div>
    <p>Фільтри:</p>
    <label>
      ПІБ
      <input v-model="filterData.name" type="text" />
    </label>
    <label>
      Стаж: від
      <input v-model="filterData.expMin" type="number" class="input-short" />
    </label>
    <label>
      До
      <input v-model="filterData.expMax" type="number" class="input-short" />
    </label>
    <button @click="resetFilter">Скинути фільтри</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterPanel",
  data() {
    return {
      filterData: {},
    };
  },
  methods: {
    ...mapActions("drivers", ["setFitler"]),
    resetFilter() {
      this.filterData = {};
    },
  },

  watch: {
    filterData: {
      handler(newFilterValue) {
        this.setFitler(newFilterValue);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.input-short {
  width: 35px;
}
</style>
