<template>
      <div class="image-container">
      <img class="logo" src="../assets/img/logo.png" alt="logo empresa super guay">
    </div>
  <div class="form-login">
    <h1 class="login-title">ACCEDER A MI CUENTA</h1>
     <form @submit.prevent="login">
       <input v-model="username" placeholder="Username" required />
       <input v-model="password" type="password" placeholder="Password" required />
       <p class="register-link">
      No tienes cuenta? <router-link to="/register">Regístrate aquí</router-link>
    </p>
       <button type="submit">Login</button>
     </form>
   
  </div>
 </template>
 
 <script lang="ts">
 import axios from 'axios';
 import { useAuthStore } from '@/stores/authStore'; 
 import router from '@/router/index'
 
 export default {
  data() {
     return {
       password: '',
       username:'',
       isSubmitting: false,
     };
  },
  created() {
     axios.defaults.withCredentials = true;
  },
  methods: {
    async login() {
 const authStore = useAuthStore(); 
 try {
    this.isSubmitting = true;
    const response = await axios.get('http://localhost:8080/api/v1/login', {
      username: this.username,
      password: this.password,
    });
    console.log(response.data);
    authStore.login({
      username: response.data.username,
 role: response.data.role,
 isAuthenticated: true, 
    });

    let redirectPath = '/';
    if (authStore.role === 'ROLE_ADMIN') {
      redirectPath = '/admin';
    } else if (authStore.role === 'ROLE_USER') {
      redirectPath = '/list';
    }
    router.push(redirectPath);
 } catch (error) {
    console.error('Error:', error);
 }
 finally {
    this.isSubmitting = false;
 }
},
  },
 };
 </script>

<style scoped lang="scss">

.login-title{
  text-align: center;
}


.image-container {
 display: flex;
 justify-content: center;
 align-items: center;
}

.image-container img{
  width: 12rem;
}
.container {
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh; 
 background-color: #f5f5f5; 
}

form {
 display: flex;
 flex-direction: column;
 gap: 40px;
 padding: 20px;
 border-radius: 5px;
 background-color: #fff;
 width: 700px; 
 margin: 0 auto;  
}

input, button {
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 5px;
}

button {
  background-color: #262425;
    color: aliceblue;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
    padding: 0.5rem 2rem;
    margin: 2rem auto; 

}

button:hover {
  background-color: #F7BE37; 
    color: #000; 
    transform: scale(1.05);
}

.register-link a {
 color: inherit; 
 text-decoration: none; 
 font-weight: bold;
}

.register-link a:hover {
 color: #F7BE37;
 transform: scale(1.05); 
}

</style>