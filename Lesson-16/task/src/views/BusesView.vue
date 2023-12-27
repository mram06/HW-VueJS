<template>
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
      <img @click="onEdit(bus.id)" src="../assets/edit.png" />
      <img @click="deleteItem(bus.id)" src="../assets/delete.png" />
    </div>
  </div>
  <router-link :to="{ name: 'busConfig' }">Додати автобус</router-link>
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
  },
  created() {
    this.loadList();
  },
};
</script>

<style lang="scss" scoped>
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
