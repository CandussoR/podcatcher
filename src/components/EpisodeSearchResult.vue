<template>
  <div class="results">
    <div v-for="result in searchResults" :key="result">
      <SearchEpisode :result="result" />
    </div>
  </div>
</template>

<script>
import SearchEpisode from "./SearchEpisode.vue";
export default {
    props: ["searchResults"],
    components: { SearchEpisode }
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