<template>
  <section class="portfolio" id="work" :class="{ highlight: isHighlighted }">

    <h2>My Work</h2>

    <h3>Logos</h3>
    <div class="grid">
      <img src="/images/logo1.png" alt="Logo 1">
      <img src="/images/logo2.png" alt="Logo 2">
      <img src="/images/logo3.png" alt="Logo 3">
      <img src="/images/logo4.png" alt="Logo 4">
      <img src="/images/logo5.png" alt="Logo 5">
       <img src="/images/logo6.png" alt="Logo 6">
    </div>

    <h3>Posters</h3>
    <div class="grid">
      <img src="/images/poster1.png" alt="Poster 1">
      <img src="/images/poster2.png" alt="Poster 2">
      <img src="/images/poster3.png" alt="Poster 3">
      <img src="/images/poster4.png" alt="Poster 4">
    </div>

    <h3>Flyers</h3>
    <div class="grid">
      <img src="/images/flyer1.png" alt="Flyer 1">
      <img src="/images/flyer2.png" alt="Flyer 2">
      <img src="/images/flyer3.png" alt="Flyer 3">
      <img src="/images/flyer4.png" alt="Flyer 4">
    </div>

    <h3>Menus</h3>
    <div class="grid">
      <img src="/images/menu1.png" alt="Menu 1">
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const isHighlighted = ref(false)

defineExpose({ isHighlighted })
</script>

<style scoped>
.portfolio {
  padding: 80px 10%;
  transition: 0.5s;
}
.portfolio.highlight {
  box-shadow: 0 0 40px #ff00ff;
  border-radius: 20px;
}
.portfolio h3 {
  margin: 40px 0 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}
.grid img {
  width: 100%;
  height: 320px;
  object-fit: contain;
  background: #0f0f1f;
  border-radius: 12px;
  padding: 10px;
  transition: 0.3s;
}
.grid img:hover {
  transform: scale(1.05);
}
</style>