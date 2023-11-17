<template>
  <aside>
    <p class="title">Тип транспорта</p>
    <select v-model="filterObj.type">
      <option selected value="Легкові">Легкові</option>
      <option value="Вантажівки">Вантажівки</option>
    </select>

    <p class="title">Тип кузова</p>
    <div>
      <label>
        <input
          v-model="filterObj.bodyType"
          type="radio"
          value="Седан"
        />Седан</label
      >
      <label>
        <input
          v-model="filterObj.bodyType"
          type="radio"
          value="Позашляховик"
        />Позашляховик / кросовер</label
      >
      <label>
        <input
          v-model="filterObj.bodyType"
          type="radio"
          value="Мінівен"
        />Мінівен</label
      >
      <label>
        <input
          v-model="filterObj.bodyType"
          type="radio"
          value="Універсал"
        />Універсал</label
      >
      <label>
        <input
          v-model="filterObj.bodyType"
          type="radio"
          value="Хетчбек"
        />Хетчбек</label
      >
    </div>

    <p class="title">Марка</p>
    <select v-model="filterObj.make">
      <option v-for="brand in brandsList" :key="brand" :value="brand">
        {{ brand }}
      </option>
    </select>

    <p class="title">Модель</p>
    <select v-model="filterObj.model">
      <option v-for="model in modelsList" :key="model" :value="model">
        {{ model }}
      </option>
    </select>

    <p class="title">Рік</p>
    <div class="year-row">
      <select>
        <option disabled selected>Від</option>
        <option v-for="year in carYearsList" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
      <select>
        <option disabled selected>До</option>
        <option v-for="year in carYearsList" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>
  </aside>
</template>

<script>
/* eslint-disable */
import { handleError } from "vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FilterPanel",

  data() {
    return {
      selectedBrand: null,
      filterObj: {},
    };
  },
  watch: {
    filterObj: {
      handler(newValue) {
        this.setFilter(newValue);
      },
      deep: true,
    },
  },

  computed: {
    ...mapGetters(["getCarsList"]),
    brandsList() {
      return [...new Set(this.getCarsList.map((car) => car.make))].sort();
    },
    modelsList() {
      return [
        ...new Set(
          this.getCarsList
            .filter((car) => car.make === this.filterObj.make)
            .map((car) => car.model)
        ),
      ];
    },
    carYearsList() {
      const currentModelYear = new Date().getFullYear() + 1;
      const yearsList = [];
      for (let year = currentModelYear; year > 1970; year--) {
        yearsList.push(year);
      }
      return yearsList;
    },
  },
  methods: {
    ...mapActions(["setFilter"]),
  },
};
</script>

<style lang="scss" scoped>
aside {
  width: 220px;
}
select {
  width: 200px;
  padding: 5px;
  font-size: 16px;
}
label {
  display: block;
}
input {
  width: 19px;
  height: 19px;
  vertical-align: middle;
}
.title {
  font-size: 16px;
  font-weight: bold;
}
.year-row {
  display: flex;
  gap: 5px;
  & > select {
    width: 100px;
  }
}
</style>
