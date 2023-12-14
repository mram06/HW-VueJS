<template>
  <div v-if="!getLoginStatus">
    <div>
      <label>
        Ім'я користувача
        <input v-model="userLoginData.username" type="text" />
      </label>
    </div>
    <div>
      <label>
        Пароль
        <input v-model="userLoginData.password" type="text" />
      </label>
    </div>
    <button @click="onAction">Увійти</button>
  </div>
  <h3 v-else>Вхід виконано</h3>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      userLoginData: {},
    };
  },
  computed: {
    ...mapGetters(["getLoginStatus"]),
  },
  methods: {
    ...mapActions(["authorize"]),
    onAction() {
      this.authorize(this.userLoginData);
    },
  },
};
</script>

<style lang="scss" scoped></style>
