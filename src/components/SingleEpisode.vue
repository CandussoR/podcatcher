<template>
    <div class="episode-result">
        <img :src="result.thumbnail" />
        <div class="details">
            <p class="episode-title">{{ result.title_original }}</p>
            <p class="description">{{ descriptionSnippet }}</p>
        </div>
        <div class="action">
            <div v-if="!reading">
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
    props: ['result'],
    setup(props) {
        const reading = ref(false);
        const descriptionSnippet = computed(() => {
            return props.result.description_original.substring(0,100) + '...'
        })

        const audio = new Audio(props.result.audio)

        const readAudio = () => {
            audio.play()
            reading.value = true;
        }

        const pauseAudio = () => {
            audio.pause()
            reading.value = false;
        }

        return { descriptionSnippet, readAudio, pauseAudio, reading }
    }
}
</script>

<style>
    .episode-result {
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
    .episode-result p.episode-title {
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