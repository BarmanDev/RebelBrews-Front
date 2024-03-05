<template>
    <div class="beer-card">
        <div class="img-beer">
            <img :src="beer?.image_url" alt="Beer Image" v-if="beer?.image_url" />
        </div>
        <div class="title-beer">
            <h2>{{ beer?.name }}</h2>
        </div>
    </div>
</template>
   
   <script setup lang="ts">
   import { defineProps } from 'vue';
   
   const props = defineProps({
    beer: Object
   });
   </script>
   
   <style scoped>
   .beer-card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    text-align: center;
   }
   .beer-card img {
    max-width: 100%; 
    height: auto; 
    max-height: 200px; 
    object-fit: cover; 
}
   </style>