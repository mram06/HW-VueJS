<template>
  <h3>Список подарунків</h3>
  <div>
    <div v-for="assign in getFilledGiftsAssignList" :key="assign.id" class="row">
      <div>{{ assign.friend }} -</div>
      <div>{{ assign.gift }}</div>
      <div><button @click="deleteAssign(assign.id)">Видалити</button></div>
    </div>
    <div>
      <label>
        Друг
        <select v-model="selectedFriendId">
          <option v-for="friend in friendsList" :key="friend.id" :value="friend.id">
            {{ friend.name }}
          </option>
        </select>
      </label>
      <label>
        Подарунок
        <select v-model="selectedGiftId">
          <option v-for="gift in giftsList" :jey="gift.id" :value="gift.id">
            {{ gift.title }}
          </option>
        </select>
      </label>
      <button @click="onAdd">Додати</button>
    </div>
  </div>
</template>

<script setup>
import { useGiftsAssignStore } from '@/stores/giftsAssign'
import { useFriendsStore } from '@/stores/friends'
import { useGiftsStore } from '@/stores/gifts'

import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const assignsStore = useGiftsAssignStore()
const { giftsAssignList, getFilledGiftsAssignList } = storeToRefs(assignsStore)

const friendsStore = useFriendsStore()
const { friendsList } = storeToRefs(friendsStore)

const giftsStore = useGiftsStore()
const { giftsList } = storeToRefs(giftsStore)

const { addAssign, deleteAssign } = assignsStore

const selectedFriendId = ref('')
const selectedGiftId = ref('')

function onAdd() {
  if (selectedFriendId.value && selectedGiftId.value)
    addAssign({
      friendId: selectedFriendId.value,
      giftId: selectedGiftId.value
    })
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  gap: 5px;
}
</style>
