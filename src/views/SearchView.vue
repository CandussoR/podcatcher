<template>
  <SearchForm @query="handleQuery" />
  <div v-if="searchResults">
    <div v-if="type == 'podcast'">
      <PodcastSearchResults :searchResults="searchResults" />
    </div>
    <div v-else>
      <EpisodeSearchResults :searchResults="searchResults" />
    </div>
  </div>

  <span @click="backHome">Go back home</span>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
import PodcastSearchResults from "@/components/PodcastSearchResults.vue";
import EpisodeSearchResults from "@/components/EpisodeSearchResult.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import client from "@/listennotes/config";

export default {
  components: { SearchForm, PodcastSearchResults, EpisodeSearchResults },
  setup() {
    const router = useRouter();

    var searchResults = ref();
    var type = ref();

    const handleQuery = async (objectQuery) => {
      searchResults.value = null;

      type.value = objectQuery.type;

      await client
        .search(objectQuery)
        .then((response) => {
          searchResults.value = response.data.results;
          console.log(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const backHome = () => {
      router.push({ name: "home" });
    };

    return { type, searchResults, handleQuery, backHome };
  },
};
</script>

<style></style>
