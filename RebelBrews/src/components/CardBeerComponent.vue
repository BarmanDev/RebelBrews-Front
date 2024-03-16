<template>
    <div class="beer-card">
        <div class="info-buttons">
            <button @click="toggleTooltip" class="info-button">Info</button>
            <button @click="addToFavorites" class="favorite-button">Favorito</button>
        </div>
        <div class="img-beer">
            <img :src="beer.imagePath" alt="Beer Image" v-if="beer.imagePath" />
        </div>
        <div class="title-beer">
            <h2>{{ beer.name }}</h2>
            <p class="beer-description">{{ beer.detail }}</p>
        </div>
        <div v-if="showTooltip" class="tooltip">
            <p>Origen: {{ beer.origin }}</p>
            <p>Familia: {{ beer.family }}</p>
            <p>Estilo: {{ beer.style }}</p>
            <p>Sub estilo: {{ beer.subStyle }}</p>
            <p>Color: {{ beer.color }}</p>
            <p>Graduación: {{ beer.abv }}º</p>
            <p>Ingredientes: {{ beer.ingredients }}</p>
            <p>Alérgenos: {{ beer.allergens }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
    beer: Object
});

const showTooltip = ref(false);

const toggleTooltip = () => {
    showTooltip.value = !showTooltip.value;
};

const addToFavorites = () => {
    console.log('Agregar a favoritos:', beer.name);
};
</script>

<style scoped lang="scss">
@import '../assets/cardbeer.scss';

</style>