<template>
  <div class="item">
    <div class="item__img">
      <img :src="cardData.imgSrc" />
    </div>
    <div class="item__about">
      <p class="item__title">
        {{ cardData.title }}
      </p>
      <div class="item__price-row">
        <div>
          <p class="item__saving">
            Ваша економія <span>{{ cardData.savingSum }} ₴</span>
          </p>
          <p class="item__oldprice">{{ cardData.oldPrice }} <span>₴</span></p>
          <p class="item__price">{{ cardData.price }} <span>₴</span></p>
        </div>
        <div class="item__buy">
          <button class="item__buy-button">Купити</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",

  props: {
    cardData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  gap: 10px;
  padding: 20px 0;
  border-bottom: 1px solid #f4f4f4;

  &__img {
    width: 250px;
    & img {
        width: 250px;
    }
  }

  &__about {
  }

  &__title {
    font-size: 16px;
    color: #487ead;
  }

  &__price-row {
    display: flex;
    justify-content: space-between;
  }

  &__saving {
    margin: 10px 0 0 0;
    font-size: 12px;
    & span {
      color: red;
    }
  }

  &__oldprice {
    font-size: 16px;
    margin: 15px 0 0 0;
    color: #aaa9a9;
    text-decoration: line-through;
    & span {
      font-size: 14px;
    }
  }

  &__price {
    margin: 5px 0 0 0;
    color: #f6404c;
    font-size: 26px;
    & span {
      font-size: 16px;
    }
  }
  &__buy {
    align-self: flex-end;
    &-button {
      font-size: 14px;
      padding: 10px 18px 10px 18px;
      border-radius: 6px;
      background-color: #12a049;
      color: white;
    }
  }
}
</style>
