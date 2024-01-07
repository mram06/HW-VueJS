<template>
  <h3>Список подарунків</h3>
  <div>
    <div v-for="(gift, index) in giftsList" :key="gift.id" class="row">
      <div>{{ index + 1 }}</div>
      <div>{{ gift.title }}</div>
      <div><button @click="deleteGift(gift.id)">Видалити</button></div>
    </div>
    <div>
      <label>
        Новий подарунок
        <input v-model="newGift" type="text" />
      </label>
      <button @click="onAdd">Додати</button>
    </div>
  </div>
</template>

<script setup>
import { useGiftsStore } from '@/stores/gifts'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const giftsStore = useGiftsStore()
const { giftsList } = storeToRefs(giftsStore)

const { addGift, deleteGift } = giftsStore

const newGift = ref('')

function onAdd() {
  if (newGift.value) {
    addGift(newGift.value)
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  gap: 5px;
}
</style>
