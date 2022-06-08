<template>
    <SearchForm @query="handleQuery"/>
    <div v-if="searchResults">
    <SearchResults :results="searchResults" />
    </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import SearchResults from '@/components/SearchResults.vue'
import { ref } from 'vue'
import client from '@/listennotes/config'

export default {
    components: { SearchForm, SearchResults },
    setup() {

        var searchResults = ref()

        const handleQuery = async (objectQuery) => {
            searchResults.value = null

            console.log(objectQuery)

            await client.search(objectQuery)
            .then((response) => {
                searchResults.value = response.data.results
            }).catch((error) => {
                console.log(error)
            });
        }

        return { searchResults, handleQuery}
    }
}
</script>

<style>

</style>