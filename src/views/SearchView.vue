<template>
    <SearchForm @query="handleQuery"/>
    <div v-if="searchResults">
        <div v-if="type == 'podcast'">
            <PodcastSearchResults :searchResults="searchResults" />
        </div>
        <div v-else>
            <EpisodeSearchResults :searchResults="searchResults" />
        </div>
    </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import PodcastSearchResults from '@/components/PodcastSearchResults.vue'
import EpisodeSearchResults from '@/components/EpisodeSearchResult.vue'
import { ref } from 'vue'
import client from '@/listennotes/config'

export default {
    components: { SearchForm, PodcastSearchResults, EpisodeSearchResults },
    setup() {

        var searchResults = ref()
        var type = ref()

        const handleQuery = async (objectQuery) => {
            searchResults.value = null

            type.value = objectQuery.type

            await client.search(objectQuery)
            .then((response) => {
                searchResults.value = response.data.results
            }).catch((error) => {
                console.log(error)
            });
        }

        return { type, searchResults, handleQuery}
    }
}
</script>

<style>

</style>