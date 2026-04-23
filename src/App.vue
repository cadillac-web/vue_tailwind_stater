<template>
  <header class="site-header">
    <h1 class="brand">IVYDESIGNS</h1>
  </header>
  <RouterView />
  <Footer />
  <DrawerNav :isDark="isDark" @toggleTheme="toggleTheme" />  
    
    <section id="home">...</section>
    <section id="about">...</section>
    <section id="services">...</section>
    <section id="contact">...</section>
</template>

<script setup>
import { ref } from 'vue'
import DrawerNav from './components/DrawerNav.vue'
import Footer from './components/Footer.vue'

const isDark = ref(true)

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.body.classList.remove('light')
  } else {
    document.body.classList.add('light')
  }
}

</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
  padding: 20px 10%;
  display: flex;
  align-items: center;
}
.brand {
  color: #ff4fd8;
  letter-spacing: 2px;
  font-size: 20px;
  font-weight: 700;
}

/* Responsive */
@media (max-width: 768px) {
  .site-header {
    padding: 16px 5%;
  }
  .brand {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .site-header {
    padding: 12px 4%;
  }
  .brand {
    font-size: 16px;
  }
}
</style>