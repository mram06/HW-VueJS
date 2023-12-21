<template>
  <main-masterpage>
    <div class="card-container">
      <item-card
        v-for="item in getItemsList"
        :key="item.id"
        :info="{
          img: item.imgSrc,
          title: item.title,
          label: item.price,
        }"
      />
    </div>
    <template #footer-right-label> Статус: <span>відкрито</span> </template>
  </main-masterpage>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import MainMasterpage from "@/masterpages/MainMasterpage.vue";
import { mapGetters } from "vuex";

export default {
  name: "ItemsView",
  components: { MainMasterpage, ItemCard },
  computed: {
    ...mapGetters(["getItemsList"]),
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  max-width: 800px;
  margin: 0 auto;
}
span {
  color: green;
}
</style>
