<template>
  <div class="results">
    <div v-for="result in searchResults" :key="result">
      <SingleEpisode :result="result" />
    </div>
  </div>
</template>

<script>
import SingleEpisode from "./SingleEpisode.vue";
export default {
    props: ["searchResults"],
    components: { SingleEpisode }
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