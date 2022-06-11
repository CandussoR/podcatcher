<template>
    <div class="episode-result">
        <img :src="result.thumbnail" />
        <p class="episode-title">{{ result.title_original }}</p>
        <p class="description">{{ result.description_original }}</p>
    </div>
</template>

<script>
export default {
    props: ['result']
}
</script>

<style>
    .episode-result {
        max-height: 200px;
        background-color: #FB8574;
    }
    .episode-result p.episode-title {
        font-weight: bold;
    }
    img {
        max-width: 80px;
    }
</style>