<template>
  <div class="items">
    <div class="items_item" v-for="item in getItems" :key="item.id">
      <div class="items__img"><img :src="item.imgSrc" /></div>
      <div class="items__about">
        <div class="items__title">{{ item.title }}</div>
        <div class="items__price">{{ item.price }} ₴</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ItemsPanel",

  computed: {
    ...mapGetters(["getItems"]),
  },
};
</script>

<style lang="scss" scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  &_item {
    padding: 5px;
    overflow: hidden;
    background: white;
    border-radius: 10px;
    display: flex;
    gap: 5px;
    height: 100px;
    width: 260px;
  }

  &__img {
    & img {
      width: 100px;
    }
  }

  &__about {
  }

  &__title {
    font-size: 12px;
    overflow: hidden;
    height: 40px;
  }
  &__price {
    color: red;
    margin: 10px 0 0 0;
  }
}
</style>
