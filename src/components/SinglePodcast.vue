<template>
    <div class="podcast-result">
        <img :src="result.thumbnail" />
        <p class="podcast-title">{{ result.title_original }}</p>
        <p class="description">{{ result.description_original }}</p>
    </div>
</template>

<script>
export default {
    props: ['result']
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