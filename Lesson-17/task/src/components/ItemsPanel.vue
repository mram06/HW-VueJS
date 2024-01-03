<template>
  <div class="row">
    <div v-for="item in getFilteredItemsList" :key="item.id" class="item">
      <div class="item__img">
        <img :src="item.imgSrc" />
      </div>
      <div class="item__title">
        {{ item.title }}
      </div>
      <div class="item__price">{{ item.price }} <span>₴</span></div>
      <div :class="['item__seller', { green: isRozetka(item.seller) }]">
        {{ item.seller }}
      </div>
      <button @click="onAddToCart(item.id)">
        {{ $t("actionTitles.buy") }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ItemsPanel",
  computed: {
    ...mapGetters("items", ["getFilteredItemsList"]),
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters("cart", ["getCartList", "getCartByUserId"]),
    userCart() {
      if (this.getCartList.length !== 0) return true;
      return false;
    },
  },
  methods: {
    ...mapActions("items", ["loadList"]),
    ...mapActions("cart", ["addItem", "loadFilteredData", "updateItem"]),
    isRozetka(seller) {
      return seller.toLowerCase() === "rozetka" ? true : false;
    },

    onAddToCart(itemId) {
      if (this.userCart) {
        this.updateItem({
          itemId: this.getCartByUserId(this.getUser.uid).id,
          data: {
            items: [...this.getCartByUserId(this.getUser.uid).items, itemId],
          },
        });
      } else {
        this.addItem({ userId: this.getUser.uid, items: [itemId] });
      }
    },
  },
  created() {
    this.loadList();
    if (this.getUser) {
      this.loadFilteredData({
        fieldTitle: "userId",
        compareOperator: "==",
        valueToCompare: this.getUser.uid,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: #17bc56;
  border: none;
  color: white;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.green {
  color: green;
  font-weight: bold;
}
.row {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid grey;
}
.item {
  border-bottom: 1px solid grey;
  border-right: 1px solid grey;
  padding: 10px;
  width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__seller {
  }
  &__img {
    img {
      max-width: 100%;
    }
  }

  &__title {
  }

  &__price {
    font-size: 24px;
    color: #f40a1f;
    span {
      font-size: 16px;
    }
  }
}
</style>
