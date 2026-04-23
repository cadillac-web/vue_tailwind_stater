<template>
  <section class="portfolio" id="work" :class="{ highlight: isHighlighted }">

    <h2>My Work</h2>

    <h3>Logos</h3>
    <div class="grid">
      <img src="/images/logo1.png" alt="Logo 1" @click="openLightbox(0)">
      <img src="/images/logo2.png" alt="Logo 2" @click="openLightbox(1)">
      <img src="/images/logo3.png" alt="Logo 3" @click="openLightbox(2)">
      <img src="/images/logo4.png" alt="Logo 4" @click="openLightbox(3)">
      <img src="/images/logo5.png" alt="Logo 5" @click="openLightbox(4)">
       <img src="/images/logo6.png" alt="Logo 6" @click="openLightbox(5)">
       
    </div>

    <h3>Posters</h3>
    <div class="grid">
      <img src="/images/poster1.png" alt="Poster 1" @click="openLightbox(6)">
      <img src="/images/poster2.png" alt="Poster 2" @click="openLightbox(7)">
      <img src="/images/poster3.png" alt="Poster 3" @click="openLightbox(8)">
      <img src="/images/poster4.png" alt="Poster 4" @click="openLightbox(9)">
    </div>

    <h3>Flyers</h3>
    <div class="grid">
      <img src="/images/flyer1.png" alt="Flyer 1" @click="openLightbox(10)">
      <img src="/images/flyer2.png" alt="Flyer 2" @click="openLightbox(11)">
      <img src="/images/flyer3.png" alt="Flyer 3" @click="openLightbox(12)">
      <img src="/images/flyer4.png" alt="Flyer 4" @click="openLightbox(13)">
    </div>

    <h3>Menus</h3>
    <div class="grid">
      <img src="/images/menu1.png" alt="Menu 1" @click="openLightbox(14)">
    </div>

    <!-- Lightbox -->
    <transition name="fade">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="close-btn" @click.stop="closeLightbox">×</button>
        <button class="nav-btn prev" @click.stop="prevImage">‹</button>
        <img :src="allImages[currentIndex]" alt="Full size" @click.stop>
        <button class="nav-btn next" @click.stop="nextImage">›</button>
      </div>
    </transition>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const isHighlighted = ref(false)

const allImages = [
  '/images/logo1.png', '/images/logo2.png', '/images/logo3.png',
  '/images/logo4.png', '/images/logo5.png', '/images/logo6.png',
  '/images/poster1.png', '/images/poster2.png', '/images/poster3.png', '/images/poster4.png',
  '/images/flyer1.png', '/images/flyer2.png', '/images/flyer3.png', '/images/flyer4.png',
  '/images/menu1.png'
]

const lightboxOpen = ref(false)
const currentIndex = ref(0)

function openLightbox(index) {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + allImages.length) % allImages.length
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % allImages.length
}

// Close on Escape key
window.addEventListener('keydown', (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
})

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
  cursor: pointer;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox img {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
}
.close-btn {
  position: absolute;
  top: 20px;
  right: 30px;
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.2s;
}
.close-btn:hover { opacity: 1; }
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 50px;
  padding: 20px;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.2s;
  border-radius: 8px;
}
.nav-btn:hover { opacity: 1; background: rgba(255, 255, 255, 0.2); }
.nav-btn.prev { left: 20px; }
.nav-btn.next { right: 20px; }

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Responsive */
@media (max-width: 768px) {
  .portfolio {
    padding: 40px 5%;
  }
  .portfolio h3 {
    margin: 30px 0 15px;
    font-size: 20px;
  }
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
  .grid img {
    height: 200px;
  }
  .nav-btn {
    font-size: 30px;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .portfolio h2 {
    font-size: 28px;
  }
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
  }
  .grid img {
    height: 150px;
    padding: 5px;
  }
  .close-btn {
    top: 10px;
    right: 20px;
    font-size: 30px;
  }
  .nav-btn {
    font-size: 24px;
    padding: 10px;
  }
  .nav-btn.prev { left: 5px; }
  .nav-btn.next { right: 5px; }
}
</style>