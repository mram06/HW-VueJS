<template>
  <div class="row">
    <div>Шофер</div>
    <div>Номер автобуса</div>
  </div>
  <div v-for="direction in getFilledTripsList" :key="direction.id" class="row">
    <div>{{ direction.driverName }}</div>
    <div>
      {{ direction.busNumber }}
      <img @click="deleteTrip(direction.id)" src="../assets/delete.png" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TripsList",
  computed: {
    ...mapGetters("trip", ["getFilledTripsList"]),
  },
  methods: {
    ...mapActions("trip", ["deleteTrip"]),
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 25px;
  cursor: pointer;
}
.row {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 7px;
  border-bottom: 1px solid grey;
}
</style>
