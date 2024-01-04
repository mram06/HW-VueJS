<template>
  <div class="container">
    <h3>Список друзів</h3>
    <div v-for="(friend, index) in friendsList" :key="friend.id" class="row">
      <div>{{ index + 1 }}</div>
      <div>{{ friend.name }}</div>
      <div><button @click="deleteFriend(friend.id)">Видалити</button></div>
    </div>
    <br />
    <label>
      Новий друг
      <input v-model="newFriend" type="text" />
      <button @click="onAdd">Додати</button>
    </label>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useFriendsStore } from "@/stores/friends";

export default {
  name: "FriendsView",
  data() {
    return {
      newFriend: null,
    };
  },
  computed: {
    ...mapState(useFriendsStore, ["friendsList"]),
  },
  methods: {
    ...mapActions(useFriendsStore, ["deleteFriend", "addFriend"]),
    onAdd() {
      this.addFriend(this.newFriend);
      this.newFriend = null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
