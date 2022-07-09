<template>
  <div class="home">
    <nav>
      <router-link :to="{ name: 'search' }">Make your search!</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
.home {
  max-width: 960px;
  max-height: 960px;
  background-color: #e2f0ff;
  border-radius: 10px;
}
img {
  max-width: 80px;
}
a.router-link-active {
  color: #444;
  font-weight: bold;
}
</style>
