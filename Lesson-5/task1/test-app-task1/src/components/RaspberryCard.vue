<template>
  <a class="container" :href="cardData.link">
    <div class="img">
      <img :src="cardData.imgSrc" />
    </div>
    <div class="title__container">
      <img :src="cardData.logo" class="logo" />
      <p class="title">{{ cardData.companyTitle }}</p>
    </div>
    <p class="description">{{ cardData.description }}</p>
  </a>
</template>

<script>
export default {
  name: "RaspberryCard",

  props: {
    cardData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="css" scoped>
p {
  color: #bdc1c6;
  font-size: 14px;
}
a {
  text-decoration: none;
}

.container {
  max-width: 250px;
  display: flex;
  flex-direction: column;
}
.img {
  width: 250px;
  max-height: 230px;
  overflow: hidden;
  height: 100%;
  border-radius: 15px;
}
.img img {
  height: 110%;
}
.logo {
  width: 12px;
  height: 12px;
}
.title {
  font-size: 12px;
  margin: 0;
}
.title__container {
  display: flex;
  gap: 5px;
  margin: 5px 0 0 0;
}
.description {
  margin: 0;
  text-align: left;
}
</style>
