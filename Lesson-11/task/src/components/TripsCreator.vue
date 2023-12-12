<template>
  <div>
    <label>
      Шофер:
      <select v-model="trip.driverId">
        <option
          v-for="driver in getDriversList"
          :key="driver.id"
          :value="driver.id"
        >
          {{ driver.name }} - {{ driver.experience }}р.
        </option>
      </select> </label
    ><br />
    <label>
      Автобус:
      <select v-model="trip.busId">
        <option v-for="bus in getBusesList" :key="bus.id" :value="bus.id">
          {{ bus.numberPlate }}
        </option>
      </select>
    </label>
    <div>
      <button @click="onAdd">Додати</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TripsCreator",
  data() {
    return {
      trip: {},
    };
  },
  computed: {
    ...mapGetters("drivers", ["getDriversList"]),
    ...mapGetters("buses", ["getBusesList"]),
  },
  methods: {
    ...mapActions("trip", ["addTrip"]),
    onAdd() {
      this.addTrip(this.trip);
    },
  },
};
</script>

<style lang="scss" scoped></style>
