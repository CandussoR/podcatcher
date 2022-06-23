<template>
    <h1>{{ podTitle }}</h1>
    <p>{{ description }}</p>
    <div v-for="result in results" :key="result.id">
        <SingleEpisode :result="result" />
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import client from '@/listennotes/config'
import { ref } from '@vue/reactivity'
import SingleEpisode from '@/components/SingleEpisode.vue'

export default {
    props: ['id'],
    components: { SingleEpisode },
    setup() {
        const route = useRoute()
        const router = useRouter()

        const podTitle = ref()
        const results = ref()
        const description = ref()

        client.fetchPodcastById({
            id: route.params.id,
            sort: 'recent_first'
            }).then(response => {
                results.value = response.data.episodes
                podTitle.value = response.data.title
                description.value = response.data.description
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })

        return { results, podTitle, description }
    }
}
</script>

<style>

</style>