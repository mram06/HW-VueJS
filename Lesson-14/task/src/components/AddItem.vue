<template>
  <div>
    <label>
      Назва товару:
      <input v-model="itemData.title" type="text" />
    </label>
    <label
      ><br />
      Ціна:
      <input v-model="itemData.price" type="text" />
    </label>
    <label
      ><br />
      Посилання на картинку:
      <input v-model="itemData.imgSrc" type="text" /> </label
    ><br />
    <button @click="onAction">Додати</button><br /><br />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddItem",
  data() {
    return {
      itemData: {},
    };
  },
  methods: {
    ...mapActions(["addItem"]),
    onAction() {
      this.addItem(this.itemData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
