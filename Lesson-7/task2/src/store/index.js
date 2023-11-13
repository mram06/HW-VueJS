import { createStore } from "vuex";
import { data } from "@/constants/items_list";

export default createStore({
  state() {
    return {
      itemsList: [...data],
      userCart: [],
      currentCurrency: "uah",
    };
  },
  getters: {
    getItemsList: ({ itemsList }) => itemsList,
    getUserCartList: ({ userCart }) => userCart,
    getCurrentCurrency: ({ currentCurrency }) => currentCurrency,

    getItemsWithCurrency: (state, getters) => {
      if (state.currentCurrency === "uah") return getters.getItemsList;
      else {
        const itemsListCopy = JSON.parse(JSON.stringify(getters.getItemsList));
        itemsListCopy.forEach((item) => {
          item.price = item.price / 37;
        });
        return itemsListCopy;
      }
    },

    getUserCartListWithCurrency: (state, getters) => {
      if (state.currentCurrency === "uah") return getters.getUserCartList;
      else {
        const itemsListCopy = JSON.parse(
          JSON.stringify(getters.getUserCartList)
        );
        itemsListCopy.forEach((item) => {
          item.price = item.price / 37;
        });
        return itemsListCopy;
      }
    },
  },
  mutations: {
    addItemToCart(state, id) {
      state.userCart.push(...state.itemsList.filter((item) => item.id === id));
    },
    removeItemFromCart(state, index) {
      state.userCart.splice(index, 1);
    },
    changeCurrency(state, currency) {
      state.currentCurrency = currency;
    },
  },
  actions: {
    addItemToCart({ commit }, id) {
      commit("addItemToCart", id);
    },
    removeItemFromCart({ commit }, index) {
      commit("removeItemFromCart", index);
    },
    changeCurrency({ commit }, currency) {
      commit("changeCurrency", currency);
    },
  },
  modules: {},
});
