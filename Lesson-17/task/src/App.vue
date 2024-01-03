<template>
  <div class="container">
    <nav>
      <div>
        <router-link to="/">{{ $t("menu.home") }}</router-link> |
        <router-link to="/laptops">{{ $t("menu.laptops") }}</router-link>
      </div>
      <div class="tools">
        <div class="cart">
          <router-link to="/cart">{{ $t("menu.cart") }}</router-link>
          <div class="cart__label">{{ cartItemsCount }}</div>
        </div>

        <div class="lang">
          <font-awesome-icon
            :icon="['fas', 'language']"
            style="color: #2474ff"
            class="fa-lg"
          />
          <div @click="changeLang('ua')" class="lang__sign">UA</div>
          |
          <div @click="changeLang('en')" class="lang__sign">EN</div>
        </div>
        <div v-if="getUser" class="user">
          <div>{{ $t("messages.welcome") }} {{ getUser.displayName }}!</div>
          <img :src="getUser.photoURL" />
          <button @click="onLogout">{{ $t("actionTitles.logout") }}</button>
        </div>
        <div v-else>
          <router-link to="/login">{{ $t("actionTitles.login") }}</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["getUser"]),
    ...mapGetters("cart", ["getCartList", "getCartByUserId"]),
    cartItemsCount() {
      if (this.getUser && this.getCartByUserId(this.getUser.uid)) {
        return this.getCartByUserId(this.getUser.uid).items.length;
      }
      return 0;
    },
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    ...mapActions("cart", ["loadList"]),
    onLogout() {
      this.logout();
      this.$router.push({ name: "login" });
    },
    changeLang(lang) {
      this.$i18n.locale = lang;
    },
  },
  created() {
    this.loadList();
  },
};
</script>

<style lang="scss">
.cart {
  position: relative;
  &__label {
    position: absolute;
    background-color: red;
    color: white;
    border-radius: 50%;
    font-size: 14px;
    padding: 1px;
    top: -10px;
    right: -10px;
  }
}
.lang {
  display: flex;
  gap: 5px;
  &__sign {
    cursor: pointer;
  }
}
.tools {
  display: flex;
  align-items: center;
  gap: 20px;
}
.user {
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 70px;
    border-radius: 50%;
  }
}
.container {
  margin: 0 auto;
  max-width: 1440px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
