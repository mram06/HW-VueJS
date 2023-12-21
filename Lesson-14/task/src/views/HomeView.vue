<template>
  <main-masterpage>
    <h1>Вітаємо!</h1>
    <p>Сподіваємось ви будете чемними, і обов'язково щось купите</p>
  </main-masterpage>
</template>

<script>
import MainMasterpage from "@/masterpages/MainMasterpage.vue";

export default {
  name: "HomeView",
  components: {
    MainMasterpage,
  },
};
</script>
