<template>
  <raspberry-panel :cardsListData="raspberryList" />
</template>

<script>
import RaspberryPanel from "./components/RaspberryPanel.vue";
import { raspberryList } from "./constants/2_data_raspberry.js";

export default {
  name: "App",

  components: {
    RaspberryPanel,
  },
  data() {
    return {
      raspberryList,
    };
  },
};
</script>

<style>
body{
  background-color: #202124;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
