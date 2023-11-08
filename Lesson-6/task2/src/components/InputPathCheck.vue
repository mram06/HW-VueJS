<template>
  <div>{{ title }}</div>
  <input ref="pathInput" type="text" v-model="pathValue"/>
</template>

<script>
export default {
  name: "InputPathCheck",

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

  data() {
    return {
      isPassCorrect: true,
    };
  },

  computed: {
    pathValue: {
      get() {
        return this.modelValue;
      },
      set(val) {
        if (this.modelModifiers.checkPath) {
          if (this.isUserPassCorrect(val)) {
            this.$refs.pathInput.style.backgroundColor = 'green'
          } else {
            this.$refs.pathInput.style.backgroundColor = 'red'
          }
        }

        this.$emit("update:modelValue", val);
      },
    },
  },

  methods: {
    isUserPassCorrect(val) {
      const regex = /\.js$/;
      return regex.test(val);
    },
  },
};
</script>

<style lang="css" scoped></style>
