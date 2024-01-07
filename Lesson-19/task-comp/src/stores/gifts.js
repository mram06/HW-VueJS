import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useGiftsAssignStore } from './giftsAssign'

export const useGiftsStore = defineStore('gifts', () => {
  const giftsList = ref([
    {
      id: 1,
      title: 'Торт'
    },
    {
      id: 2,
      title: 'Листівка'
    },
    {
      id: 3,
      title: 'Шовдарь'
    }
  ])

  const getGiftById = computed(() => (giftId) => giftsList.value.find((gift) => gift.id == giftId))

  function addGift(title) {
    giftsList.value.push({ id: new Date().getTime(), title })
  }
  function deleteGift(giftId) {
    const giftsStore = useGiftsAssignStore()
    giftsStore.deleteAssignByGiftId(giftId)
    giftsList.value = giftsList.value.filter((gift) => gift.id !== giftId)
  }

  return { giftsList, getGiftById, addGift, deleteGift }
})
