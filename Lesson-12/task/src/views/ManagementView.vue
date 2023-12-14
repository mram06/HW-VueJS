<template>
  <div class="container">
    <div class="row title">
      <div>ПІБ</div>
      <div>СПЕЦІАЛІЗАЦІЯ</div>
      <div>КЛАС</div>
    </div>
    <ol>
      <li v-for="assignment in getFilledAssignmentsList" :key="assignment.id">
        <div class="row">
          <div>{{ assignment.teacher }}</div>
          <div>{{ assignment.lesson }}</div>
          <div>{{ assignment.classTitle }}</div>
          <div class="tools">
            <button @click="onEdit(assignment.id)">Edit</button>
            <button @click="deleteAssignment(assignment.id)">Delete</button>
          </div>
        </div>
      </li>
    </ol>
    <button @click="onAdd">Додати призначення</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ManagementView",
  computed: {
    ...mapGetters("assignments", ["getFilledAssignmentsList"]),
  },
  methods: {
    ...mapActions("assignments", ["deleteAssignment"]),
    onEdit(assignmentId) {
      this.$router.push({
        name: "managementConfig",
        params: {
          id: assignmentId,
        },
      });
    },
    onAdd() {
      this.$router.push({
        name: "managementConfig",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 500px;
}
.row {
  display: flex;
  justify-content: space-between;
  & > div {
    width: 150px;
    text-align: left;
  }
}
.title {
  font-weight: bold;
}
.tools {
  display: flex;
  gap: 7px;
}
</style>
