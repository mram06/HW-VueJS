<template>
  <div class="cars">
    <car-item
      :car-data="car"
      v-for="car in getFilteredCarsList"
      :key="car.id"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CarItem from "./CarItem.vue";

export default {
  name: "CarsPanel",
  components: { CarItem },

  computed: {
    ...mapGetters(["getCarsList", "getFilteredCarsList"]),
  },
};
</script>

<style lang="scss" scoped>
.cars {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
