<template>
  <div class="banner-container">
     <div class="banner-image">
       <img src="../assets/img/section.jpg" alt="Banner Image">
       <div class="banner-text">
         <h1>LA BIBLIA DE LA CERVEZA DESTAPA,<br>DESCUBRE DISFRUTA</h1>
       </div>
     </div>
  </div>
  <div class="icon-container">
     <div class="icon">
       <div class="icon-wrapper">
         <img src="../assets/icons/beers.svg" alt="Icon 1">
         <div class="icon-text">
           <p><strong>Destapa</strong> con los tuyos</p>
         </div>
       </div>
     </div>
     <div class="icon">
       <div class="icon-wrapper">
         <img src="../assets/icons/MaterialSymbolsSearch (1).svg" alt="Icon 2">
         <div class="icon-text">
           <p><strong>Descubre</strong> todas nuestras cervezas</p>
         </div>
       </div>
     </div>
     <div class="icon">
       <div class="icon-wrapper">
         <img src="../assets/icons/map.svg" alt="Icon 3">
         <div class="icon-text">
           <p><strong>Disfruta</strong> de los locales de tu zona</p>
         </div>
       </div>
     </div>
  </div>
  <div class="centered-text">
     <p>Si eres un amante de la cerveza, descubre todo lo que te podemos ofrecer.</p>
     <a href="/register" class="register-link">Regístrate aquí</a>
  </div>
  <div class="black-background">
     <div class="left-section">
         <h1>Descubre los locales más rebeldes</h1>
         <h3>Consulta nuestro buscador y descubre en primera persona nuestras cervezas y locales</h3>
         <a href="/beers" class="start-link">Empezar</a>
     </div>
     <div class="right-section">
         <img src="../assets/img/food-beer.jpg" alt="Imagen de locales">
     </div>
  </div>
 </template>
 
 <style scoped lang="scss">
 @import '../assets/banner.scss';
 @import '../assets/iconshome.scss';
 .centered-text {
  text-align: center;
  margin: 20px 0;
 }
 
 .centered-text p {
  margin-bottom: 40px; 
 }

 .centered-text a{
  margin-bottom: 40px; 

 }

 
 .register-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #F7BE37;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
 
  &:hover {
     background-color: #211f13;
  }
 }
 
 .black-background {
  background-color: #000;
  color: #fff;
  padding: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
 }
 
 .left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px; 
  text-align: center;
 }
 
 .left-section h1 {
  margin-bottom: 20px; 
 }

 .left-section h3 {
  margin-bottom: 40px; 
 }

 
 .right-section {
  flex: 1; 
 }
 
 .right-section img {
     width: 100%; 
     height: auto;
     border-radius: 20px;
 }
 
 .register-link, .start-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #F7BE37;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
 
  &:hover {
     background-color: #211f13;
  }


 }

 @media (max-width: 1024px) { 
 .black-background {
 flex-direction: column;
 }

 .left-section, .right-section {
 flex: none;
 width: 100%;
 }
}

@media (max-width: 768px) { 
 .black-background {
 flex-direction: column;
 }

 .icon-container {
 flex-direction: column;
 align-items: flex-start;
 }

 .icon {
 flex: none;
 width: 100%;
 }



 .left-section, .right-section {
 flex: none;
 width: 100%;
 }

 .left-section {
 padding: 20px 0;
 }

 .left-section h1 {
 margin-bottom: 10px;
 }

 .left-section h3 {
 margin-bottom: 20px;
 }

 .left-section .start-link {
 margin-top: 10px;
 }
}


 </style>