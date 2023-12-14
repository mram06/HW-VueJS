<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link :to="{ name: 'teachers' }">Вчителі</router-link> |
    <router-link :to="{ name: 'subjects' }">Предмети</router-link> |
    <router-link :to="{ name: 'management' }">Призначення</router-link> |
    <router-link :to="{ name: 'login' }">{{ loginTitle }}</router-link>
  </nav>
  <router-view />
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getLoginStatus", "getLoginName"]),
    loginTitle() {
      return this.getLoginStatus ? this.getLoginName : "Вхід";
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
