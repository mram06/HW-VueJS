<template>
  <input-email title="Введіть ваш email" v-model.check="inputValue" />
</template>

<script>
import InputEmail from "./components/InputEmail.vue";

export default {
  name: "App",
  components: {
    InputEmail,
  },

  data() {
    return {
      inputValue: null,
    }
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
