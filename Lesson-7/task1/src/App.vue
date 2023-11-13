<template>
  <students-activity />
</template>

<script>
import StudentsActivity from "./components/StudentsActivity.vue";

export default {
  name: "App",
  components: {
    StudentsActivity,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
