<template>
  <div class="home">
    <h1>Home View</h1>
    <label> Search : </label>
    <input v-model="query" type="text" @keydown.enter="handleQuery">
    <select v-model="type">
      <option>podcast</option>
      <option>episodes</option>
    </select>

      <div v-for="result in searchResults" :key="result">
        <div class="result">
          <img :src="result.thumbnail" />
          <p class="podcast-title">{{ result.title_original }}</p>
          <p class="description">{{ result.description_original}}</p>
        </div>
      </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import client from '@/listennotes/config'

  export default {
    
    name: 'HomeView',
    setup() {
      var query =  ref('')
      var type = ref('podcast')
      var searchResults = ref()

    const handleQuery = async() => {
      // Erases the last search
      searchResults.value = null

      const queryObject = {
      q: query.value,
      sort_by_date: 0,
      type: type.value,
      offset: 0,
      len_min: 10,
      len_max: 30,
      published_before: 1580172454000,
      published_after: 0,
      only_in: 'title,description',
      safe_mode: 0,
    }

       await client.search(queryObject).then((response) => {
      searchResults.value = response.data.results
      }).catch((error) => {
          console.log(error)
        });
    }

  return { query, type, searchResults, handleQuery }
    }
  }
</script>

<style>
  .home {
    max-width: 960px;
    background-color: #E2F0FF;
    border-radius: 10px;
  }
  img {
    max-width: 80px;
  }
</style>