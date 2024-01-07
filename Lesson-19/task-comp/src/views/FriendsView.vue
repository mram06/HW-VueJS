<template>
  <h3>Список друзів</h3>
  <div>
    <div v-for="(friend, index) in friendsList" :key="friend.id" class="row">
      <div>{{ index + 1 }}</div>
      <div>{{ friend.name }}</div>
      <div><button @click="deleteFriend(friend.id)">Видалити</button></div>
    </div>
    <div>
      <label>
        Новий друг
        <input v-model="newFriend" type="text" />
      </label>
      <button @click="onAdd">Додати</button>
    </div>
  </div>
</template>

<script setup>
import { useFriendsStore } from '@/stores/friends'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const friendsStore = useFriendsStore()
const { friendsList } = storeToRefs(friendsStore)
const { addFriend, deleteFriend } = friendsStore

const newFriend = ref('')

function onAdd() {
  if (newFriend.value) {
    addFriend(newFriend.value)
    newFriend.value = ''
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  gap: 5px;
}
</style>
