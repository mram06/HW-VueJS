<template>
  <div>
    <label>
      <h3>Система оцінювання</h3>
      <select v-model="currentCategory">
        <option value="12" selected>12</option>
        <option value="5">5</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "ScoreCategory",
  props: {
    modelValue: {
      type: Number,
      default: null,
    },
  },
  emits: ["update:modelValue"],

  computed: {
    currentCategory: {
      get() {
        return this.modelValue;
      },
      set(val) {
        this.$emit("update:modelValue", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  display: inline;
  margin: 0 10px 0 0;
}
</style>
