<template>
  <NavBar />
  <nav v-if="user" class="user-playlist">
    <NavBarPlaylist />
  </nav>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import NavBarPlaylist from "./components/NavBarPlaylist.vue";
import getUser from "./composables/getUser";

export default {
  components: { NavBar, NavBarPlaylist },
  setup() {
    const { user } = getUser();

    return { user };
  },
};
</script>
<style>
#app {
  max-width: 960px;
  background-color: #e2f0ff;
  border-radius: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
