<script setup lang="ts">

const scrollToTop = (event: Event) => {
 event.preventDefault(); 
 window.scrollTo({
    top: 0,
    behavior: 'smooth'
 });
};
</script>

<template>
 <footer class="footer">
    <div class="footer-left">
      <a href="https://twitter.com" target="_blank">
        <img src="../assets/icons/RiTwitterXLine.svg" alt="Twitter" class="footer-icon">
      </a>
      <a href="https://instagram.com" target="_blank">
        <img src="../assets/icons/InstagramIcon.svg" alt="Instagram" class="footer-icon">
      </a>
      <a href="https://facebook.com" target="_blank">
        <img src="../assets/icons/FACEBOOK.svg" alt="Facebook" class="footer-icon">
      </a>
    </div>
    <div class="footer-center">
      <img src="../assets/img/logo.png" alt="logo de empresa" class="company-logo">
      <p>RebelBrews recomienda un consumo responsable</p>
    </div>
    <div class="footer-right">
      <a href="#" class="back-to-top-icon" @click="scrollToTop">
        <img src="../assets/icons/arrowup.svg" alt="Volver arriba">
        <p>inicio</p>
      </a>
    </div>
 </footer>
</template>

<style scoped lang="scss">
     @import '../assets/footer.scss'

</style>