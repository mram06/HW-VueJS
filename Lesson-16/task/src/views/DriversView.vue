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
      <img @click="onEdit(driver.id)" src="../assets/edit.png" />
      <img @click="onDelete(driver.id)" src="../assets/delete.png" />
    </div>
  </div>
  <router-link :to="{ name: 'driverConfig' }">Додати водія</router-link>
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
img {
  height: 25px;
  cursor: pointer;
}
</style>
