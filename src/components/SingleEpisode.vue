<template>
    <div class="episode-result">
        <img :src="result.thumbnail" />
        <div class="details">
            <p class="episode-title">{{ result.title_original }}</p>
            <p class="description">{{ descriptionSnippet }}</p>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
    props: ['result'],
    setup(props) {
        const descriptionSnippet = computed(() => {
            return props.result.description_original.substring(0,100) + '...'
        })

        return { descriptionSnippet }
    }
}
</script>

<style>
    .episode-result {
        display: flex;
        max-height: 200px;
        background-color: #FB8574;
        max-height: 100px;
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
        justify-content: center;
    }
    img {
        max-width: 80px;
        max-height: 80px;
        justify-content: flex-start;
        align-items: center;
    }
</style>