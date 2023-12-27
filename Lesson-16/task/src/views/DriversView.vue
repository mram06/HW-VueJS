<template>
  <h2>Наші водії</h2>
  <div class="filter">
    <filter-panel />
  </div>
  <div class="row">
    <div>ПІБ</div>
    <div>Стаж</div>
  </div>
  <v-infinite-scroll v-if="isLoading" :height="200" :onLoad="load">
  </v-infinite-scroll>
  <div v-for="driver in getFilteredDriversList" :key="driver.id" class="row">
    <div>{{ driver.name }}</div>
    <div>
      {{ driver.experience }}
      <font-awesome-icon
        @click="onEdit(driver.id)"
        :icon="['fas', 'pen-to-square']"
        class="pointer"
      />
      <font-awesome-icon
        @click="onDelete(driver.id)"
        :icon="['fas', 'trash']"
        style="color: #ff0000"
        class="pointer"
      />
    </div>
  </div>
  <v-btn @click="onAdd">Додати водія </v-btn>
</template>

<script>
import FilterPanel from "@/components/FilterPanel";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DriversView",
  components: {
    FilterPanel,
  },

  computed: {
    ...mapGetters("drivers", ["getFilteredDriversList", "isLoading"]),
  },
  methods: {
    ...mapActions("drivers", ["deleteDriver", "loadList", "deleteItem"]),
    onEdit(driverId) {
      this.$router.push({
        name: "driverConfig",
        params: {
          id: driverId,
        },
      });
    },
    onDelete(driverId) {
      this.deleteItem(driverId);
    },
    onAdd() {
      this.$router.push({ name: "driverConfig" });
    },
  },
  created() {
    this.loadList();
  },
};
</script>

<style lang="scss" scoped>
.filter {
  margin: 0 0 15px 0;
}
.row {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 7px;
  border-bottom: 1px solid grey;
}
.pointer {
  cursor: pointer;
  height: 25px;
}
</style>
