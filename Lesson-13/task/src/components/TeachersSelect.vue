<template>
  <div>
    <p class="red">Навчальний план</p>
    <div v-for="(id, index) in receivedIdList" :key="id" class="row">
      <div>{{ getSubjectById(id).subject }}</div>
      <div>
        <select v-model="selectedTeachers[index]">
          <option selected disabled>- Не обрано -</option>
          <option
            v-for="teacher in getTeachersList"
            :key="teacher.id"
            :value="teacher.id"
          >
            {{ teacher.name }}
          </option>
        </select>
      </div>
    </div>
    <button @click="onAction">Розпочати навчання</button>
    <p v-if="error" class="red">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TeachersSelect",
  data() {
    return {
      selectedTeachers: [],
      error: false,
    };
  },
  computed: {
    ...mapGetters(["getSubjectById", "getTeachersList"]),
    receivedIdList() {
      return this.$route.params.id;
    },
    isListCorrespond() {
      if (this.selectedTeachers.length >= this.receivedIdList.length) {
        for (let i = 0; i < this.selectedTeachers.length; i++) {
          if (this.selectedTeachers[i] == undefined) return false;
        }
      } else return false;
      return true;
    },
    selectedIdList() {
      const selectedId = [];
      for (let i = 0; i < this.receivedIdList.length; i++) {
        selectedId[i] = `${this.receivedIdList[i]}-${this.selectedTeachers[i]}`;
      }
      return selectedId;
    },
    errorMessage() {
      return "Усі предмети мають бути з обраним вчителем";
    },
  },
  methods: {
    onAction() {
      if (this.isListCorrespond)
        this.$router.push({
          name: "studyPlan",
          params: {
            id: this.selectedIdList,
          },
        });
      else this.error = true;
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
  max-width: 250px;
  margin: 0 auto;
}
</style>
