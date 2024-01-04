<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link :to="{ name: 'friends' }">Друзі</router-link> |
    <router-link :to="{ name: 'gifts' }">Подарунки</router-link> |
    <router-link :to="{ name: 'giftsAssign' }"
      >Призначення подарунків</router-link
    >
  </nav>
  <router-view />
</template>

<style lang="scss">
.row {
  display: flex;
  gap: 10px;
  margin: 0 auto;
}
.container {
  max-width: 500px;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
