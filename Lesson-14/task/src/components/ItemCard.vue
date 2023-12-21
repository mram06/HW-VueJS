<template>
  <div class="card">
    <div class="card__img"><img :src="info.img" /></div>
    <div class="card__title">{{ info.title }}</div>
    <slot
      ><div class="card__price">{{ info.label }} грн</div></slot
    >
    <button>Купити</button>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 5px;
  border: 2px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__img {
    overflow: hidden;
    width: 200px;
    height: 200px;
    img {
      max-height: 100%;
    }
  }

  &__title {
    font-size: 18px;
    margin-top: 15px;
    align-self: flex-start;
  }

  &__price {
    align-self: flex-start;
    margin-top: 10px;
    max-height: 20px;
  }
  button {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
