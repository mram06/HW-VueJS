import { defineStore } from "pinia";
import { useGiftsAssignStore } from "./giftsAssign";

export const useGiftsStore = defineStore("gifts", {
  state: () => ({
    giftsList: [
      {
        id: 1,
        title: "Торт",
      },
      {
        id: 2,
        title: "Листівка",
      },
      {
        id: 3,
        title: "Шовдарь",
      },
    ],
  }),
  getters: {
    getGiftById: (state) => (giftId) =>
      state.giftsList.find((gift) => gift.id == giftId),
  },
  actions: {
    addGift(title) {
      this.giftsList.push({ id: new Date().getTime(), title });
    },
    deleteGift(giftId) {
      this.giftsList = this.giftsList.filter((gift) => gift.id !== giftId);

      const assigns = useGiftsAssignStore();
      const assignToDelete = assigns.giftsAssignList.find(
        (assign) => assign.giftId == giftId
      );
      assigns.deleteAssign(assignToDelete.id);
    },
  },
});
