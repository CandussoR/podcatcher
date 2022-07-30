<template>
  <div class="results">
    <div v-for="result in searchResults" :key="result">
      <div class="podcast-result">
        <img :src="result.thumbnail" />
        <router-link :to="{ name: 'podcast', params: { id: result.id } }">
          <p class="podcast-title">{{ result.title_original }}</p>
        </router-link>
        <p class="description">{{ snippet }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["searchResults"],
  setup(props) {
    console.log(props.searchResults);
    const snippet = computed(() => {
      return props.searchResults.forEach(
        (pod) => pod.description_original.substring(0, 100) + "..."
      );
    });

    return { snippet };
  },
};
</script>

<style>
.results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7fbff;
}
.podcast-result {
  max-height: 200px;
  background-color: #fefef3;
}
.podcast-result p.podcast-title {
  font-weight: bold;
}
img {
  max-width: 80px;
}
</style>
