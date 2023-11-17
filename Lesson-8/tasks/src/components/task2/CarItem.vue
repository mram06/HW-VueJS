<template>
  <div class="car">
    <div class="car__img">
      <img :src="carData.imgSrc" />
    </div>
    <div class="car__about">
      <div class="car__title">
        {{ carData.make }} {{ carData.model }} {{ carData.year }}
      </div>
      <div class="car__price">
        <span>{{ carData.price }} $</span> {{ priceUsd }} грн
      </div>
      <div class="car__specifications-row">
        <div class="car__mileage">
          <span>Пробіг</span> {{ carData.mileage }}
        </div>
        <div class="car__city"><span>Місто</span> {{ carData.city }}</div>
        <div class="car__fuel"><span>Тип палива</span> {{ carData.fuel }}</div>
        <div class="car__gearbox">
          <span>Трансмісія</span> {{ carData.gearbox }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarItem",

  props: {
    carData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    priceUsd() {
      return this.carData.price * 38;
    },
  },
};
</script>

<style lang="scss" scoped>
.car {
  font-size: 16px;
  border-bottom: 1px solid grey;
  padding: 20px;
  display: flex;
  gap: 20px;
  &__img {
    width: 300px;
    height: 200px;
    overflow: hidden;
    & img {
      width: 100%;
    }
  }

  &__title {
    color: #256799;
  }

  &__price {
    span {
      font-size: 22px;
      color: #3c9806;
    }
  }

  &__mileage,
  &__city,
  &__fuel,
  &__gearbox {
    span {
      font-size: 13px;
      color: grey;
    }
  }
  &__specifications-row {
    margin: 10px 0 0 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
