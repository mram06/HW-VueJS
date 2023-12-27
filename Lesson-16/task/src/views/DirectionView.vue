<template>
  <h2>Призначення</h2>
  <trips-list />
  <h4>Нове призначення</h4>
  <trips-creator />
</template>

<script>
import TripsCreator from "@/components/TripsCreator.vue";
import TripsList from "@/components/TripsList.vue";
import { mapActions } from "vuex";

export default {
  name: "DirectionView",
  components: { TripsList, TripsCreator },
  methods: {
    ...mapActions("trip", ["loadAllLists"]),
  },
  created() {
    this.loadAllLists();
  },
};
</script>

<style lang="scss" scoped></style>
