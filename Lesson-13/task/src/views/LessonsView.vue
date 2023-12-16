<template>
  <h3>Сторінка вибору уроків</h3>
  <router-link :to="{ name: 'lessonsSelect' }"
    >Перейти до вибору уроків</router-link
  >
  <router-view />
</template>

<script>
export default {
  name: "LessonsView",
};
</script>

<style lang="scss" scoped></style>
