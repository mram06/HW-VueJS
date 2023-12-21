<template>
  <about-masterpage>
    <div>Наші контакти</div>
    <div>Адреса магазину: біля будинку Баби Галі</div>
    <div>Менеджер: Дід Петро</div>
    <div>Заступник: онука Софійка</div>
  </about-masterpage>
</template>

<script>
import AboutMasterpage from "@/masterpages/AboutMasterpage.vue";

export default {
  name: "ContactsView",
  components: { AboutMasterpage },
};
</script>

<style lang="scss" scoped></style>
