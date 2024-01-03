<template>
  <div>
    <h2>Додавання нового товару</h2>
    <label>
      imgSrc :
      <input v-model="addItemObj.imgSrc" type="text" />
    </label>
    <label>
      title :
      <input v-model="addItemObj.title" type="text" />
    </label>
    <label>
      price :
      <input v-model="addItemObj.price" type="number" />
    </label>
    <label>
      brand :
      <input v-model="addItemObj.brand" type="text" />
    </label>
    <label>
      seller :
      <input v-model="addItemObj.seller" type="text" />
    </label>
    <button @click="onAdd">Додати</button>
  </div>

  <div>
    <h2>Видалення товару</h2>
    <label>
      Назва товару :
      <select v-model="itemIdToDelete">
        <option v-for="item in getItemsList" :key="item.id" :value="item.id">
          {{ item.title }}
        </option>
      </select>
    </label>
    <button v-if="itemIdToDelete" @click="deleteItem(itemIdToDelete)">
      Видалити
    </button>
  </div>

  <div>
    <h2>Зміна товару</h2>
    <label>
      Назва товару :
      <select @change="setItemData" v-model="itemIdToUpdate">
        <option v-for="item in getItemsList" :key="item.id" :value="item.id">
          {{ item.title }}
        </option>
      </select> </label
    ><br />
    <label>
      imgSrc :
      <input v-model="updateItemObj.imgSrc" type="text" />
    </label>
    <label>
      title :
      <input v-model="updateItemObj.title" type="text" />
    </label>
    <label>
      price :
      <input v-model="updateItemObj.price" type="number" />
    </label>
    <label>
      brand :
      <input v-model="updateItemObj.brand" type="text" />
    </label>
    <label>
      seller :
      <input v-model="updateItemObj.seller" type="text" />
    </label>
    <button @click="onUpdate">Змінити</button>
    <div v-if="hasError" class="error">{{ hasError }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdminPanel",
  data() {
    return {
      addItemObj: {},
      itemIdToDelete: null,
      itemIdToUpdate: null,
      updateItemObj: {},
    };
  },
  computed: {
    ...mapGetters("items", ["getItemsList", "hasError"]),
  },
  methods: {
    ...mapActions("items", ["addItem", "loadList", "deleteItem", "updateItem"]),
    onAdd() {
      const item = this.addItemObj;
      if (item.imgSrc && item.title && item.price && item.brand && item.seller)
        this.addItem(this.addItemObj);
      this.addItemObj = {};
    },
    setItemData() {
      this.updateItemObj = this.getItemsList.find(
        (item) => item.id == this.itemIdToUpdate
      );
    },
    onUpdate() {
      this.updateItem({
        itemId: this.itemIdToUpdate,
        data: {
          brand: this.updateItemObj.brand,
          imgSrc: this.updateItemObj.imgSrc,
          price: this.updateItemObj.price,
          seller: this.updateItemObj.seller,
          title: this.updateItemObj.title,
        },
      });
      this.updateItemObj = {};
    },
  },
  created() {
    this.loadList();
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: red;
  font-size: 20px;
}
</style>
