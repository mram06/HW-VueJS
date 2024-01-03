<template>
  <h2>{{ $t("menu.cart") }}</h2>
  <div class="row">
    <div>
      <div v-for="item in getUserItems" :key="item.id" class="item">
        <div class="item__img"><img :src="item.imgSrc" /></div>
        <div class="item__about">
          <div class="item__title">{{ item.title }}</div>
          <div class="item__price">{{ item.price }} <span>₴</span></div>
          <button @click="deleteItemFromCart(item.id)">Видалити</button>
        </div>
      </div>
    </div>
    <div>
      <h3>{{ $t("menu.total") }}</h3>
      <div class="item__price">{{ getCartSum }} <span>₴</span></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartView",
  computed: {
    ...mapGetters("items", ["getItemsList", "getItemById"]),
    ...mapGetters("cart", ["getCartList", "getCartByUserId"]),
    ...mapGetters("auth", ["getUser"]),
    getUserItems() {
      const list = [];
      // const itemsIds = this.getCartList[0].items;\
      if (this.getCartByUserId(this.getUser.uid)) {
        const itemsIds = this.getCartByUserId(this.getUser.uid).items;
        for (let i = 0; i < itemsIds.length; i++) {
          list.push(this.getItemById(itemsIds[i]));
        }
      }
      return list;
    },
    getCartSum() {
      return this.getUserItems.reduce(
        (prevSum, item) => prevSum + item.price,
        0
      );
    },
  },
  methods: {
    ...mapActions("cart", ["loadList", "updateItem"]),
    deleteItemFromCart(itemIdToDelete) {
      const newItemsList = this.getUserItems
        .map((item) => item.id)
        .filter((itemId) => itemId !== itemIdToDelete);
      this.updateItem({
        itemId: this.getCartByUserId(this.getUser.uid).id,
        data: { items: newItemsList },
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
}
.item {
  max-width: 900px;
  padding: 20px;
  display: flex;
  border-bottom: 1px solid grey;
  &__img {
    width: 200px;
    img {
      max-width: 100%;
    }
  }

  &__about {
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
