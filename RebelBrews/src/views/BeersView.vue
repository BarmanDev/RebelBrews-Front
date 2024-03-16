<template>
    <div class="beers-container">
       <FilterBeerComponent @search="handleSearch" @reset="resetSearch" />
       <div v-for="brewery in filteredBreweries" :key="brewery.id">
         <CardBeerComponent :brewery="brewery" />
       </div>
       <div class="pagination">
         <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
         <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
       </div>
    </div>
   </template>
   
   <script setup lang="ts">
   import { ref, onMounted } from 'vue';
   import axios from 'axios';
   import CardBeerComponent from '../components/CardBeerComponent.vue';
   import FilterBeerComponent from '@/components/FilterBeerComponent.vue';
   
   const allBreweries = ref<Brewery[]>([]); 
   const currentPage = ref(1);
   const totalPages = ref(10); 
   const filteredBreweries = ref<Brewery[]>([]); 
   
   const fetchBreweries = async (page: number) => {
       try {
           const response = await axios.get(`https://api.openbrewerydb.org/breweries?page=${page}&per_page=12`);
           console.log(response.data); 
           const newBreweries = response.data;
           allBreweries.value = [...allBreweries.value, ...newBreweries];
           updateFilteredBreweries(); 
       } catch (error) {
           console.error('Error fetching brewery data:', error);
       }
   };
   
   onMounted(() => {
       fetchBreweries(currentPage.value);
   });
   
   const updateFilteredBreweries = () => {
       const startIndex = (currentPage.value - 1) * 12;
       const endIndex = startIndex + 12;
       filteredBreweries.value = allBreweries.value.slice(startIndex, endIndex);
   };
   
   const handleSearch = (searchTerm: string) => {
       filteredBreweries.value = allBreweries.value.filter(brewery =>
           brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
       );
   };
   
   const resetSearch = () => {
       filteredBreweries.value = allBreweries.value; 
   };
   
   const scrollToTop = () => {
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       });
   };
   
   const nextPage = () => {
       if (currentPage.value < totalPages.value) {
           currentPage.value++;
           fetchBreweries(currentPage.value); 
           updateFilteredBreweries(); 
           scrollToTop(); // Llama a scrollToTop
       }
   };
   
   const prevPage = () => {
       if (currentPage.value > 1) {
           currentPage.value--;
           fetchBreweries(currentPage.value); 
           updateFilteredBreweries(); 
           scrollToTop(); // Llama a scrollToTop
       }
   };
   </script>
   
   <style scoped lang="scss">
   .filterBeers{
      margin: 2rem 0;
   }
   
   .titleBeers{
      margin: 1rem 0;
      text-align: center;
   }
   
   .beers-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    padding: 20px;
   }
   
   .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
   }
   
   .pagination button {
      background-color: #262425;
      color: aliceblue;
      border-radius: 10px;
      transition: transform 0.3s ease-in-out;
      padding: 0.5rem 2rem;
      margin: 2rem;
   
    &:hover {
      background-color: #F7BE37; 
      color: #000; 
      transform: scale(1.05);
    }
   
    &:disabled {
       background-color: #ccc;
       cursor: not-allowed;
    }
   }
   </style>