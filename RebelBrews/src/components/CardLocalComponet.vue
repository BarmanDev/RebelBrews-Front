<template>
    <div class="local-card">
      <img v-if="brewery.country === 'United States'" src="../assets/img/usa.png" alt="Bandera de Estados Unidos" class="flag-image" />
       <h2>{{ brewery.name }}</h2>
       <p>Tipo de cervecería: {{ brewery.brewery_type }}</p>
       <p>Dirección: {{ brewery.address_1 }}</p>
       <p>País: {{ brewery.country }}</p>
       <p>Estado/Provincia: {{ brewery.state_province }}</p>
    </div>
 </template>
 
 <script setup lang="ts">
 import { defineProps } from 'vue';
 
 const props = defineProps({
  brewery: Object
 });
 </script>
 
 <style scoped lang="scss">
 .local-card {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     border: 1px solid #ccc;
     padding: 20px;
     margin: 20px;
     text-align: center;
     position: relative;
     transition: box-shadow 0.3s ease; 
     width: 90%; 
     min-height: 350px; 
     border-radius: 20px;
 }
 
 .local-card:hover {
     box-shadow: 0 4px 8px rgba(0,0,0,0.2);
 }
 
 .flag-image {
     max-width: 100%;
     max-height: 100px; 
     object-fit: contain; 
     margin-bottom: 10px; 
 }
 
 @media (max-width: 768px) {
     .local-card {
       flex: 1 0 250px; 
     max-width: 250px; 
     margin: 10px; 
     }
 }
 
 @media (max-width: 480px) {
     .local-card {
       flex: 1 0 250px; 
     max-width: 250px; 
     margin: 10px; 
     }
 }
 </style>