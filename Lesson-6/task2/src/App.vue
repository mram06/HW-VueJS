<template>
  <input-path-check title="Введіть шлях до зображення" v-model.checkPath="pathValue"/>
  <div>{{pathValue}}</div>
</template>

<script>
import InputPathCheck from "./components/InputPathCheck.vue";

export default {
  name: "App",
  components: {
    InputPathCheck,
  },

  data() {
    return {
      pathValue: null,
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
