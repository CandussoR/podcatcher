<template>
    <div class="episode-episode">
        <img :src="episode.thumbnail"/>
        <div class="details">
            <p class="episode-title">{{ episode.title }}</p>
            <p class="description">{{ descriptionSnippet }}</p>
        </div>
        <div class="action">
            <div v-if="!reading || paused">
                <span class="material-icons" @click="readAudio">play_arrow</span>
            </div>
            <div v-else>
                <span class="material-icons" @click="pauseAudio">pause</span>
            </div>

        </div>

    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { ref } from 'vue'


export default {
    props: ['episode'],
    setup(props) {
        const reading = ref(false);
        const paused = ref(false);
        const descriptionSnippet = computed(() => {
            return props.episode.description.substring(0,100) + '...'
        })

        const audio = new Audio(props.episode.audio)

        const readAudio = () => {
            audio.play()
            reading.value = true;
        }

        const pauseAudio = () => {
            audio.pause()
            reading.value = false;
            paused.value = true;
        }

        return { descriptionSnippet, readAudio, pauseAudio, reading, paused }
    }
}
</script>

<style>
    .episode-episode {
        display: flex;
        max-height: 200px;
        background-color: #FB8574;
        padding: 10px;
        border-bottom: 1px solid #171E2B;
        border-radius: 20px;
    }
    .details {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
    .episode-episode p.episode-title {
        font-weight: bold;
    }
    img {
        max-width: 80px;
        max-height: 80px;
    }
    .action {
        display: flex;
        justify-content: space-between;
    }
</style>