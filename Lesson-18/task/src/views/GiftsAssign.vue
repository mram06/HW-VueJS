<template>
  <div class="container">
    <h3>Розподіл подарунків</h3>
    <div v-for="gift in getFilledAssignsList" :key="gift.id" class="row">
      <div>{{ gift.friendName }}</div>
      -
      <div>{{ gift.giftTitle }}</div>
      <div><button @click="deleteAssign(gift.id)">Видалити</button></div>
    </div>
    <br />
    <div>
      <label>
        Друг
        <select v-model="dataObj.friendId">
          <option
            v-for="friend in friendsList"
            :key="friend.id"
            :value="friend.id"
          >
            {{ friend.name }}
          </option>
        </select>
      </label>
      <label>
        Подарунок
        <select v-model="dataObj.giftId">
          <option v-for="gift in giftsList" :key="gift.id" :value="gift.id">
            {{ gift.title }}
          </option>
        </select>
      </label>
      <button @click="onAdd">Додати</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useGiftsAssignStore } from "@/stores/giftsAssign";
import { useFriendsStore } from "@/stores/friends";
import { useGiftsStore } from "@/stores/gifts";

export default {
  name: "GiftsAssign",
  data() {
    return {
      dataObj: {},
    };
  },
  computed: {
    ...mapState(useGiftsAssignStore, ["getFilledAssignsList"]),
    ...mapState(useFriendsStore, ["friendsList"]),
    ...mapState(useGiftsStore, ["giftsList"]),
  },
  methods: {
    ...mapActions(useGiftsAssignStore, ["deleteAssign", "addAssign"]),
    onAdd() {
      this.addAssign(this.dataObj);
    },
  },
};
</script>

<style lang="scss" scoped></style>
