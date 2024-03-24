<template>
    <div class="business-card">
        <div class="info-buttons">
            <button @click="toggleTooltip" class="info-button">Info</button>
            <button @click="addToFavorites" class="favorite-button">Favorito</button>
        </div>
        <div class="img-business">
            <img :src="business.imagePath" alt="Business Image" v-if="business.imagePath" />
        </div>
        <div class="title-business">
            <h2>{{ business.name }}</h2>
            <p class="business-description">{{ business.address }}</p>
        </div>
        <div v-if="showTooltip" class="tooltip">
            <p>Ciudad: {{ business.city }}</p>
            <p>Teléfono: {{ business.phone }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps({
    business: Object
});

const showTooltip = ref(false);

const toggleTooltip = () => {
    showTooltip.value = !showTooltip.value;
};

const addToFavorites = () => {
    console.log('Agregar a favoritos:', business.name);
};
</script>

<style scoped lang="scss">
@import '../assets/main.scss';

.business-card {
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

.business-card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.business-card img {
    max-width: 100%; 
    height: auto; 
    max-height: 200px; 
    object-fit: cover; 
}

.tooltip {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); 
    border: 2px solid #ccc; 
    padding: 15px; 
    z-index: 10;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: opacity 0.3s ease;
    opacity: 0;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}

.tooltip p {
    margin: 0;
    padding: 10px 0;
    font-size: 16px; 
    font-weight: bold;
    text-align: left;
    color: #fff; 
}

.tooltip p:last-child {
    border-bottom: none;
}

.business-card:hover .tooltip {
    opacity: 1;
}

.business-description {
    font-size: 14px;
    color: #333;
    margin-top: 10px;
}

.info-buttons {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.info-button, .favorite-button {
    background-color: #F7BE37;
    color: #000;
    border: none;
    border-radius: 5px;
    padding: 5px 10px; 
    font-size: 12px;
    cursor: pointer;
}

.info-button:hover, .favorite-button:hover {
    background-color: #262425;
    color: aliceblue;
}
</style>