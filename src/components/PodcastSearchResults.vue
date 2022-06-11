<template>
  <div class="results">
    <div v-for="result in searchResults" :key="result">
      <SinglePodcast :result="result" />
    </div>
  </div>
</template>

<script>
import SinglePodcast from './SinglePodcast.vue'
export default {
    props: ["searchResults"],
    components: { SinglePodcast }
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