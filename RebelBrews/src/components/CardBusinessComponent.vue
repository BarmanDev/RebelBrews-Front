<template>
    <div class="business-card">
        <div class="info-buttons">
            <button @click="toggleTooltip" class="info-button">Info</button>
            <button @click="deleteBusiness" class="favorite-button">Eliminar</button>
            <button @click="openEditModal" class="favorite-button">Editar</button>
        </div>
        <div class="img-business">
            <img :src="props.business.imagePath" alt="Business Image" v-if="props.business.imagePath" />

        </div>
        <div class="title-business">
            <h2>{{ props.business.name }}</h2>
            <p class="business-description">{{ props.business.address }}</p>
        </div>
        <div v-if="showTooltip" class="tooltip">
            <p>Ciudad: {{ props.business.city }}</p>
            <p>Teléfono: {{ props.business.phone }}</p>
        </div>
        <div v-if="showEditModal" class="edit-modal">
            <div class="edit-modal-content">
                <h2>Editar Negocio</h2>
                <input v-model="editingBusiness.name" placeholder="Nombre" />
                <input v-model="editingBusiness.address" placeholder="Dirección" />
                <button @click="updateBusiness">Guardar Cambios</button>
                <button @click="closeEditModal">Cancelar</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import axios from 'axios'; 

const props = defineProps({
    business: Object
});

const showTooltip = ref(false);
const showEditModal = ref(false);
const editingBusiness = ref({});

const toggleTooltip = () => {
    showTooltip.value = !showTooltip.value;
};

const deleteBusiness = async () => {
    try {
        await axios.delete(`http://localhost:8080/api/v1/businesses/${props.business.id}`);
        console.log('Negocio eliminado:', props.business.name);
        location.reload();
    } catch (error) {
        console.error('Error al eliminar el negocio:', error);
    }
};

const openEditModal = () => {
    editingBusiness.value = { ...props.business }; 
    showEditModal.value = true;
};

const closeEditModal = () => {
    showEditModal.value = false;
};

const updateBusiness = async () => {
    try {
        await axios.put(`http://localhost:8080/api/v1/businesses/${editingBusiness.value.id}`, editingBusiness.value);
        console.log('Negocio actualizado:', editingBusiness.value.name);
        location.reload();
    } catch (error) {
        console.error('Error al actualizar el negocio:', error);
    }
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