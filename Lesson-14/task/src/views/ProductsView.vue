<template>
  <h3>Сторінка товарів</h3>
  <router-view name="action" />
  <router-view />
</template>

<script>
export default {
  name: "ProductsView",
};
</script>

<style lang="scss" scoped></style>
