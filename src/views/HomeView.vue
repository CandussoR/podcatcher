<template>
  <div class="home">
    <h1>Home View</h1>
    <nav>
      <router-link :to="{name: 'search'}">Make your search!</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
 
  }
</script>

<style>
  .home {
    max-width: 960px;
    background-color: #E2F0FF;
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