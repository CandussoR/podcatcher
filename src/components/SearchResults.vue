<template>
  <div v-for="result in results" :key="result">
        <div class="result">
          <img :src="result.thumbnail" />
          <p class="podcast-title">{{ result.title_original }}</p>
          <p class="description">{{ result.description_original }}</p>
        </div>
      </div>
</template>

<script>
export default {
    props: ['results']
}
</script>

<style>

</style>