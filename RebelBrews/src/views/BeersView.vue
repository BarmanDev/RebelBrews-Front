<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import BeerCard from '../components/CardBeerComponent.vue';

const beers = ref([]);

onMounted(async () => {
 try {
    const response = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=6');
    beers.value = response.data.filter(beer => beer.image_url);
 } catch (error) {
    console.error('Error fetching beer data:', error);
 }
});
</script>

<template>
 <h1>Beeeeers</h1>
 <div class="beers-container">
  <BeerCard v-for="beer in beers" :key="beer.id" :beer="beer" />
</div>

</template>

<style scoped lang="scss">
.beers-container {
 display: flex;
 flex-wrap: wrap;
 justify-content: space-between;
}

</style>