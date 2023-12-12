<template>
  <div>
    <label>
      ПІБ
      <input v-model="driverData.name" type="text" />
    </label>
    <label>
      Стаж
      <input v-model="driverData.experience" type="text" />
    </label>
    <button @click="onAction">{{ buttonTitle }}</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DriverConfig",
  data() {
    return {
      driverData: {},
    };
  },
  computed: {
    ...mapGetters("drivers", ["getDriverById"]),
    receivedId() {
      return this.$route.params.id;
    },
    buttonTitle() {
      return this.receivedId ? "Зберегти" : "Додати";
    },
  },
  methods: {
    ...mapActions("drivers", ["addDriver", "updateDriver"]),
    onAction() {
      if (!this.receivedId) this.addDriver(this.driverData);
      else this.updateDriver(this.driverData);
      this.$router.push({ name: "drivers" });
    },
  },

  created() {
    this.driverData = { ...this.getDriverById(this.receivedId) };
  },
};
</script>

<style lang="scss" scoped></style>
