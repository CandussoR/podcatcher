<template>
    <div class="podcast-result">
        <img :src="result.thumbnail" />
        <router-link :to="{ name: 'podcast', params: { id: result.id } }">
            <p class="podcast-title">{{ result.title_original }}</p>
        </router-link>
        <p class="description">{{ snippet }}</p>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['result'],
    setup(props) {
        const snippet = computed(() => {
            return props.result.description_original.substring(0,100) + '...'
        })

        return {snippet}
    } 
}
</script>

<style>
    .podcast-result {
        max-height: 200px;
        background-color: #FEFEF3;
    }
    .podcast-result p.podcast-title {
        font-weight: bold;
    }
    img {
        max-width: 80px;
    }
</style>