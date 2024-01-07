import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useGiftsStore } from './gifts'
import { useFriendsStore } from './friends'

export const useGiftsAssignStore = defineStore('giftsAssign', () => {
  const giftsAssignList = ref([
    {
      id: 1,
      friendId: 1,
      giftId: 1
    },
    {
      id: 2,
      friendId: 2,
      giftId: 3
    },
    {
      id: 3,
      friendId: 3,
      giftId: 2
    }
  ])

  const getFilledGiftsAssignList = computed(() => {
    const friendsStore = useFriendsStore()
    const giftsStore = useGiftsStore()
    return giftsAssignList.value.map((assign) => ({
      id: assign.id,
      friend: friendsStore.getFriendById(assign.friendId).name,
      gift: giftsStore.getGiftById(assign.giftId).title
    }))
  })

  function addAssign(assignObj) {
    giftsAssignList.value.push({ id: new Date().getTime(), ...assignObj })
  }
  function deleteAssign(assignId) {
    giftsAssignList.value = giftsAssignList.value.filter((assign) => assign.id !== assignId)
  }
  function deleteAssignByFriendId(friendId) {
    giftsAssignList.value = giftsAssignList.value.filter((assign) => assign.friendId !== friendId)
  }
  function deleteAssignByGiftId(giftId) {
    giftsAssignList.value = giftsAssignList.value.filter((assign) => assign.giftId !== giftId)
  }

  return {
    giftsAssignList,
    getFilledGiftsAssignList,
    addAssign,
    deleteAssign,
    deleteAssignByFriendId,
    deleteAssignByGiftId
  }
})
