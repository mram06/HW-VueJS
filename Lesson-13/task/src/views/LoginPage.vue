<template>
  <div>
    <label>
      Ім'я користувача
      <input v-model="userName" type="text" /> </label
    ><br /><br />
    <label>
      Пароль
      <input v-model="password" type="password" /> </label
    ><br />
    <button @click="onLogin">Увійти</button>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      userName: null,
      password: null,
    };
  },
  methods: {
    onLogin() {
      window.userName = this.userName;
      if (this.$route.query.redirect)
        this.$router.push({
          path: this.$route.query.redirect,
        });
      else this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
