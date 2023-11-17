<template>
  <div class="selector">
    <div class="selector__item" @click="setCategory('laptops')">
      <img
        src="https://content1.rozetka.com.ua/goods/images/big/144249716.jpg"
      />
      <div>Ноутбуки</div>
    </div>
    <div class="selector__item" @click="setCategory('carBatteries')">
      <img
        src="https://content1.rozetka.com.ua/goods/images/big/65724301.jpg"
      />
      <div>Автомобільні акумулятори</div>
    </div>
    <div class="selector__item" @click="setCategory('powerStations')">
      <img
        src="https://content1.rozetka.com.ua/goods/images/big/290782931.jpg"
      />
      <div>Зарядні станції</div>
    </div>
    <div class="selector__item" @click="setCategory('highPressureDevices')">
      <img
        src="https://content2.rozetka.com.ua/goods/images/big/346822025.jpg"
      />
      <div>Апарати високого тиску</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SelectorPanel",

  methods: {
    ...mapActions(["setCategory"]),
  },
};
</script>

<style lang="scss" scoped>
.selector {
  display: flex;
  gap: 20px;
  &__item {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border: 5px solid white;
    cursor: pointer;
    & img {
      height: 70%;
    }
  }
}
</style>
