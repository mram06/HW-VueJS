<template>
  {{ title }}
  <input ref="userAge" type="number" v-model="userAgeValue" />
  <div class="danger" v-if="isCorrect">Вік не може бути більше за 150!</div>
</template>

<script>
export default {
  name: "UserAge",

  props: {
    title: {
      type: String,
    },
    modelValue: {
      type: Number,
    },
    modelModifiers: {
      default: () => ({}),
    },
  },

  computed: {
    userAgeValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        if (this.modelModifiers.check && val > 150) val = null;

        if (this.modelModifiers.setColor) {
          if (val < 10) this.$refs.userAge.style.backgroundColor = "green";
          else if (val >= 10 && val <= 21)
            this.$refs.userAge.style.backgroundColor = "yellow";
          else this.$refs.userAge.style.backgroundColor = "red";
        }
        this.$emit("update:modelValue", val);
      },
    },
    isCorrect(){
      return this.modelValue === null
    }
  },
};
</script>

<style lang="css" scoped>
.danger {
  color: red;
}
</style>
