<template>
<div class="input-box">
 <div class="input-container">
    <input type="text" v-model="searchBeer" placeholder="Busca tu cerveza" @input="searchBeers" class="input-style" />
    <img src="../assets/icons/beers.svg" alt="Icono de Buscar" class="input-icon" />
 </div>
 <div class="input-container">
    <input type="number" step="0.1" v-model="searchAbv" placeholder="Busca por graduación" @change="searchAbvInput" class="input-style" />
    <img src="../assets/icons/OpenmojiDrunkPerson.svg" alt="Icono de Graduación" class="input-icon" />
 </div>
 <div class="input-container">
    <input type="number" v-model="searchIbu" placeholder="Busca por amargor" @change="searchIbuInput" class="input-style" />
    <img src="../assets/icons/PhBeerSteinThin.svg" alt="Icono de Amargor" class="input-icon" />
 </div>
 <button @click="resetSearch" class="button-style">Volver</button>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchBeer = ref('');
const searchAbv = ref('');
const searchIbu = ref('');
const emit = defineEmits(['search', 'reset', 'searchAbv', 'searchIbu']);

const searchBeers = () => {
   emit('search', searchBeer.value);
};

const searchAbvInput = () => {
   emit('searchAbv', searchAbv.value);
};

const searchIbuInput = () => {
   emit('searchIbu', searchIbu.value);
};

const resetSearch = () => {
   emit('reset');
};
</script>

<style scoped lang="scss">
.input-box {
   display: flex; 
   align-items: center; 
   width: 100%; 
}

.button-style {
   background-color: #262425;
   color: aliceblue;
   border-radius: 10px;
   transition: transform 0.3s ease-in-out;
   padding: 0.5rem 2rem;
   margin: 2rem;
}

.button-style:hover {
   background-color: #F7BE37; 
   color: #000; 
   transform: scale(1.05);
}

.input-container {
   display: flex;
   align-items: center;
   position: relative;
   width: auto;
}

.input-style {
   border-top: none;
   border-left: none;
   border-right: none;
   border-bottom: 1px solid #000; 
   margin-left: 2.5rem; 
   height: 3rem; 
   text-align: left; 
}
</style>