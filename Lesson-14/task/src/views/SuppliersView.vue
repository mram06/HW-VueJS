<template>
  <main-masterpage>
    <div class="card-container">
      <item-card
        v-for="supplier in getSuppliersList"
        :key="supplier.id"
        :info="{ img: supplier.imgSrc, title: supplier.title }"
      >
        <div class="labels-row">
          <div v-for="(label, index) in supplier.labels" :key="index">
            <img :src="label" />
          </div>
        </div>
      </item-card>
    </div>
    <template #footer-left-label>
      Найбіль популярний: <span>економ</span>
    </template>
    <template #footer-right-label> Статус: <span>відкрито</span> </template>
  </main-masterpage>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import MainMasterpage from "@/masterpages/MainMasterpage.vue";
import { mapGetters } from "vuex";

export default {
  name: "SuppliersView",
  components: { MainMasterpage, ItemCard },
  computed: {
    ...mapGetters(["getSuppliersList"]),
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
.labels-row {
  display: flex;
  align-self: flex-start;
}
</style>
