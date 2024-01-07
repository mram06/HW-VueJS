import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useGiftsAssignStore } from './giftsAssign'

export const useFriendsStore = defineStore('friends', () => {
  const friendsList = ref([
    {
      id: 1,
      name: 'Баба Галя'
    },
    {
      id: 2,
      name: 'Дід Петро'
    },
    {
      id: 3,
      name: 'Онука Оленка'
    }
  ])

  const getFriendById = computed(
    () => (friendId) => friendsList.value.find((friend) => friend.id == friendId)
  )

  function addFriend(name) {
    friendsList.value.push({ id: new Date().getTime(), name })
  }
  function deleteFriend(friendId) {
    const assignStore = useGiftsAssignStore()
    assignStore.deleteAssignByFriendId(friendId)
    friendsList.value = friendsList.value.filter((friend) => friend.id !== friendId)
  }

  return { friendsList, getFriendById, addFriend, deleteFriend }
})
