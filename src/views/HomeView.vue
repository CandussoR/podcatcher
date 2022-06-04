<template>
  <div class="home">
    <h1>Home View</h1>
    <label> Search : </label>
    <input v-model="query" type="text" @keydown.enter="handleQuery">
    <select v-model="type">
      <option>podcast</option>
      <option>episodes</option>
    </select>
    <p>Type : {{ type }}</p>
    <p>{{ query }}</p>
    <div v-for="result in searchResults" :key="result">
      <p>{{ result }}</p>
    </div> -->
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    
    name: 'HomeView',
    setup() {
      const { Client } = require('podcast-api')

      var query =  ref('')
      var type = ref('podcast')
      const episodes = ref([])
      var searchResults = ref([])

    const client = Client({ apiKey: 'c1fe9b092f4145028ad9d246a6b9fe03' });

    const handleQuery = async() => {
      // Erases the last search
      searchResults.value = []

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
      console.log(queryObject)
       await client.search(queryObject).then((response) => {
      // Get response json data here
      console.log(response.data)
      console.log(response.data.results)
      searchResults.value.push(response.data.results)
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
    background-color: #E2F0FF;
    border-radius: 10px;
  }
</style>