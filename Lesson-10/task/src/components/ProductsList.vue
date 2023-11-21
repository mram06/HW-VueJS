<template>
  <div class="items">
    <div class="item" v-for="item in getFilteredItemsList" :key="item.id">
      <div class="item__body">
        <div class="item__img">
          <img :src="item.imgSrc" />
        </div>
        <div class="item__title">{{ item.title }}</div>
        <div class="item__price">{{ item.price }}<span>₴</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductsList",

  props: {
    itemsList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      filteredList: [],
    };
  },

  computed: {
    ...mapGetters(["getFilteredItemsList"]),
  },
};
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
}
.item {
  &__body {
    display: flex;
    flex-direction: column;
    border-right: 0.5px solid rgb(210, 210, 210);
    border-bottom: 0.5px solid rgb(210, 210, 210);
    padding: 50px 10px 10px 10px;
    height: 400px;
  }

  &__img {
    align-self: center;
    overflow: hidden;
    width: 240px;
    height: 170px;
    & img {
      max-width: 100%;
    }
  }

  &__title {
    margin: 15px 0 0 0;
  }

  &__price {
    margin: 20px 0 0 0;
    font-size: 24px;
    color: #f84147;
    & span {
      font-size: 16px;
    }
  }
}
</style>
