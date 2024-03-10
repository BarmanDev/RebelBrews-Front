<template>
  <div class="banner-container">
    <div class="banner-image">
      <img src="../assets/img/section.jpg" alt="Banner Image">
      <div class="banner-text">
        <h1>LA BIBLIA DE LA CERVEZA DESTAPA,<br>DESCUBRE DISFRUTA</h1>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner-container {
  width: 100%;
  height: 80vh; 
  margin: 0 auto; 
  overflow: hidden; 
}

.banner-image {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  display: block;
}

.banner-text {
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  text-align: center;
  color: white; 
  font-size: 24px; 
  font-weight: bold; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
}

.banner-text h1 {
  margin: 0;
  line-height: 1.2; 
}
</style>
