<template>
  <card-form
    v-model:cardNumber.divideDigits="cardNumberValue"
    v-model:secureCode.limitDigits="secureCodeValue"
  />
</template>

<script>
import CardForm from "@/components/CardForm.vue";

export default {
  name: "App",
  components: { CardForm },

  data() {
    return {
      cardNumberValue: null,
      secureCodeValue: null,
    };
  },
};
</script>

<style lang="scss">
@import url("./assets/style/nullstyle.scss");
body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 50px;
}
</style>
