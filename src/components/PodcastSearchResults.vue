<template>
  <div class="results">
    <div v-for="result in searchResults" :key="result">
      <SearchPodcast :result="result" />
    </div>
  </div>
</template>

<script>
import SearchPodcast from './SearchPodcast.vue'
export default {
    props: ["searchResults"],
    components: { SearchPodcast }
}
</script>

<style>
  .results {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F7FBFF;
  }
</style>