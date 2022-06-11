<template>
    <form @submit.prevent="sendQueryObject">
        <label> Search : </label>
        <input v-model="query" type="text">
        <select v-model="type">
        <option>podcast</option>
        <option>episode</option>
        </select>
    </form>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(props, context) {
        const query =  ref('')
        const type = ref('podcast')

        const sendQueryObject = () => {
            const objectQuery = {
                q: query.value,
                type: type.value
            }

            context.emit('query', objectQuery)
        }

        return { query, type, sendQueryObject }
    }
}
</script>

<style>

</style>