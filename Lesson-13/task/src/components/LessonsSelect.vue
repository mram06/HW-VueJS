<template>
  <p class="red">Крок 1. Сторінка вибору уроків</p>
  <p>Виберіть уроки:</p>
  <div>
    <div v-for="subject in getSubjectsList" :key="subject.id" class="row">
      <div>{{ subject.subject }}</div>
      <div>
        <input v-model="selectedSubjects" :value="subject.id" type="checkbox" />
      </div>
    </div>
  </div>
  <button @click="onAction">Вибрати вчителів</button>
  <p v-if="error" class="red">{{ errorMessage }}</p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LessonsSelect",
  data() {
    return {
      selectedSubjects: [],
      error: false,
    };
  },

  computed: {
    ...mapGetters(["getSubjectsList"]),
    errorMessage() {
      return "Потрібно обрати хоча б 1 предмет";
    },
  },
  methods: {
    onAction() {
      if (this.selectedSubjects.length) {
        this.$router.push({
          name: "lessonsSelected",
          params: { id: this.selectedSubjects },
        });
      } else this.error = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
.row {
  display: flex;
  justify-content: space-between;
  max-width: 200px;
  margin: 0 auto;
}
</style>
