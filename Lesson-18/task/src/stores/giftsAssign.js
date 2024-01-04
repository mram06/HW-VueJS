import { defineStore } from "pinia";
import { useFriendsStore } from "./friends";
import { useGiftsStore } from "./gifts";

export const useGiftsAssignStore = defineStore("giftsAssign", {
  state: () => ({
    giftsAssignList: [
      {
        id: 1,
        friendId: 1,
        giftId: 1,
      },
      {
        id: 2,
        friendId: 2,
        giftId: 3,
      },
      {
        id: 3,
        friendId: 3,
        giftId: 2,
      },
    ],
  }),
  getters: {
    getFilledAssignsList: (state) => {
      const friends = useFriendsStore();
      const gifts = useGiftsStore();

      return state.giftsAssignList.map((gift) => ({
        id: gift.id,
        friendName: friends.getFriendById(gift.friendId).name,
        giftTitle: gifts.getGiftById(gift.giftId).title,
      }));
    },
  },
  actions: {
    addAssign(dataObj) {
      this.giftsAssignList.push({ id: new Date().getTime(), ...dataObj });
    },
    deleteAssign(giftId) {
      this.giftsAssignList = this.giftsAssignList.filter(
        (gift) => gift.id !== giftId
      );
    },
  },
});
