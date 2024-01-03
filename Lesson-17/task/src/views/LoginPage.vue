<template>
  <div>
    <button @click="loginWithGoogle">Login with Google</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginPage",
  methods: {
    ...mapActions("auth", ["loginWithGoogle"]),
  },
};
</script>

<style lang="scss" scoped></style>
