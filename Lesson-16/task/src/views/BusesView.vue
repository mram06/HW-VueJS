<template>
  <div class="container">
    <h2>Наші автобуси</h2>
    <div class="row">
      <div>Номерний знак</div>
      <div>Кількість місць</div>
    </div>
    <v-infinite-scroll v-if="isLoading" :height="200" :onLoad="load">
    </v-infinite-scroll>
    <div v-for="bus in getBusesList" :key="bus.id" class="row">
      <div>{{ bus.numberPlate }}</div>
      <div>
        {{ bus.seats }}
        <font-awesome-icon
          @click="onEdit(bus.id)"
          :icon="['fas', 'pen-to-square']"
          class="pointer"
        />
        <font-awesome-icon
          @click="deleteItem(bus.id)"
          :icon="['fas', 'trash']"
          style="color: #ff0000"
          class="pointer"
        />
      </div>
    </div>
    <v-btn @click="onAdd">Додати автобус </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BusesView",
  components: {},
  computed: {
    ...mapGetters("buses", ["getBusesList", "isLoading"]),
  },
  methods: {
    ...mapActions("buses", ["deleteBus", "loadList", "deleteItem"]),
    onEdit(id) {
      this.$router.push({
        name: "busConfig",
        params: {
          id: id,
        },
      });
    },
    onAdd() {
      this.$router.push({ name: "busConfig" });
    },
  },
  created() {
    this.loadList();
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 700px;
  margin: 0 auto;
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
