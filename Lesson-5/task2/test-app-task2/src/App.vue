<template>
  <div class="container"></div>
  <item-panel :item-data-list="itemData" />
</template>

<script>
import { itemData } from "./constants/items_data.js";
import ItemPanel from "./components/ItemPanel.vue";

export default {
  name: "App",
  components: {
    ItemPanel,
  },
  data() {
    return {
      itemData,
    };
  },
};
</script>

<style lang="scss">
@import url("./assets//style/nullstyle.scss");
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}
.container {
  width: 100%;
  margin: 0 auto;
  max-width: 800px;
}
</style>
