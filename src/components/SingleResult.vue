<template>
    <div class="result">
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

</style>