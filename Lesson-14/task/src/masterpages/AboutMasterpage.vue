<template>
  <div>
    <nav>
      <router-link to="/">На головну</router-link>
    </nav>
    <slot></slot>
    <div>Галерея</div>
    <div class="gallery">
      <div class="gallery__img">
        <img
          src="https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg"
        />
      </div>
      <div class="gallery__img">
        <img
          src="https://i.pinimg.com/236x/d3/4b/ec/d34becc9ecf6f8b4b5c861bf61109176.jpg"
        />
      </div>
      <div class="gallery__img">
        <img
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=80"
        />
      </div>
      <div class="gallery__img">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/024/815/857/small/ai-generated-picture-of-little-red-riding-hood-fairytale-personage-walking-in-the-forest-with-basket-in-her-hand-photo.jpeg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMasterpage",
};
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  justify-content: space-between;
  max-width: 700px;
  margin: 0 auto;
  &__img {
    width: 150px;
    img {
      max-width: 100%;
    }
  }
}
</style>
