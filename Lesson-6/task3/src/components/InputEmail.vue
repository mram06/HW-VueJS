<template>
  <div>{{ title }}</div>
  <input ref="emailInput" type="text" v-model.lazy="emailValue" />
</template>

<script>
export default {
  name: "InputEmail",

  props: {
    title: {
      type: String,
    },
    modelValue: {
      type: String,
    },
    modelModifiers: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    emailValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        let emailVal;
        if (this.modelModifiers.check) {
          if (val.includes("@inv.mn.edu")) {
            emailVal = val;
            this.$refs.emailInput.style.backgroundColor = "green";
          } else {
            emailVal = this.addDomain(val)
            this.$refs.emailInput.style.backgroundColor = "red";
          }
        }
        this.$emit("update:modelValue", emailVal);
      },
    },
  },

  methods: {
    addDomain(val) {
      return val.includes("@inv.mn.edu") ? val : val + "@inv.mn.edu";
    },
  },
};
</script>

<style lang="scss" scoped></style>
