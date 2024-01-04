import { defineStore } from "pinia";
import { useGiftsAssignStore } from "./giftsAssign";

export const useFriendsStore = defineStore("friends", {
  state: () => ({
    friendsList: [
      {
        id: 1,
        name: "Баба Галя",
      },
      {
        id: 2,
        name: "Дід Петро",
      },
      {
        id: 3,
        name: "Онука Оленка",
      },
    ],
  }),
  getters: {
    getFriendById: (state) => (friendId) =>
      state.friendsList.find((friend) => friend.id == friendId),
  },
  actions: {
    addFriend(name) {
      this.friendsList.push({ id: new Date().getTime(), name });
    },
    deleteFriend(friendId) {
      this.friendsList = this.friendsList.filter(
        (friend) => friend.id !== friendId
      );
      const assigns = useGiftsAssignStore();
      const assignToDelete = assigns.giftsAssignList.find(
        (assign) => assign.friendId == friendId
      );
      assigns.deleteAssign(assignToDelete.id);
    },
  },
});
