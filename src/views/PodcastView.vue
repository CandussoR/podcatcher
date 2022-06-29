<template>
    <div class="title">
        <img :src="podcast.image">
        <h1>{{ podcast.title }}</h1>
    </div>
    <div class="description">
        <p>{{ podcast.description }}</p>
    </div>
    <div v-for="genre in podcast.genre_ids" :key="genre">
        <p>{{genre}}</p>
    </div>
    <div v-for="episode in podcast.episodes" :key="episode.id">
        <PodcastEpisode :episode="episode" />
    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import client from '@/listennotes/config'
import { ref } from '@vue/reactivity'
import PodcastEpisode from '@/components/PodcastEpisode.vue'
export default {
    props: ['id'],
    components: { PodcastEpisode },
    setup() {
        const route = useRoute()
        const router = useRouter()

        const podcast = ref()

        client.fetchPodcastById({
            id: route.params.id,
            sort: 'recent_first'
            }).then(response => {
                podcast.value = response.data
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })

        return { podcast }
    }
}
</script>

<style scoped>
.description {
    padding: 30px;
    text-align: left;
}
.title {
    display: flex;
    justify-content: center;
    align-content: center;
}
</style>