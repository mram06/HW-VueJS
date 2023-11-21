<template>
  <router-link to="/store">На головну</router-link>
  <div v-if="!targetValue">
    <h3>Список товарів:</h3>
    <div class="category">
      <router-link to="store/carBatteries"
        >Автомобільні акумулятори</router-link
      >
    </div>
    <div class="category">
      <router-link to="store/laptops">Ноутбуки</router-link>
    </div>
    <div class="category">
      <router-link to="store/powerStations">Зарядні станції</router-link>
    </div>
    <div class="category">
      <router-link to="store/highPressureDevices"
        >Апарати високого тиску</router-link
      >
    </div>
  </div>
  <div class="container">
    <items-panel />
  </div>
</template>

<script>
import ItemsPanel from "@/components/ItemsPanel.vue";
import { mapActions } from "vuex";

export default {
  name: "StoreView",
  components: { ItemsPanel },
  data() {
    return {
      currentCategory: "",
    };
  },
  computed: {
    targetValue() {
      return this.$route.params.category;
    },
  },
  methods: {
    ...mapActions(["setCategory"]),
  },

  watch: {
    targetValue: {
      handler(newValue) {
        this.setCategory(newValue);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  cursor: pointer;
  padding: 5px 0;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
