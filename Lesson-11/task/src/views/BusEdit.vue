<template>
  <div>
    <label>
      Номерний знак
      <input v-model="busData.numberPlate" type="text" />
    </label>
    <label>
      Кількість місць
      <input v-model="busData.seats" type="text" />
    </label>
    <button @click="onAction">{{ buttonTitle }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BusEdit",
  data() {
    return {
      busData: {},
    };
  },

  computed: {
    ...mapGetters("buses", ["getBusById"]),
    receivedBusId() {
      return this.$route.params.id;
    },
    buttonTitle() {
      return this.receivedBusId ? "Зберегти" : "Створити";
    },
  },
  methods: {
    ...mapActions("buses", ["addBus", "updateBus"]),
    onAction() {
      if (!this.receivedBusId) this.addBus(this.busData);
      else this.updateBus(this.busData);
      this.$router.push({ name: "buses" });
    },
  },

  created() {
    this.busData = { ...this.getBusById(this.receivedBusId) };
  },
};
</script>

<style lang="scss" scoped></style>
