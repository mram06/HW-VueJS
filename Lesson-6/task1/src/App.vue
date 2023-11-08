<template>
  <user-age
    title="Введіть вік користувача"
    v-model.check.setColor="userAgeValue"
  />
</template>

<script>
import UserAge from "./components/UserAge.vue";

export default {
  name: "App",
  components: {
    UserAge,
  },

  data() {
    return {
      userAgeValue: "",
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
