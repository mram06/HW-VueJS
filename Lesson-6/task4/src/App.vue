<template>
  <user-info v-model:userNameValue="userNameVal" v-model:userAgeValue.check="userAgeVal" />
</template>

<script>
import UserInfo from "./components/UserInfo.vue";

export default {
  name: "App",
  components: {
    UserInfo,
  },

  data() {
    return {
      userNameVal: null,
      userAgeVal: null,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
