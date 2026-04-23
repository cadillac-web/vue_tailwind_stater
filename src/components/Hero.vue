<template>
  <section class="hero">

    <div class="hero-text">

      <h2>Creative <span>Designs</span><br>For Modern Brands</h2>

      <p>Logos, posters and flyers designed to help businesses stand out.</p>

      <div class="hero-buttons">
        <RouterLink to="/work">
          <button>View my work</button>
        </RouterLink>
      </div>

      <div class="stats">
        <div class="stat">Full customization</div>
        <div class="stat">Fast Delivery</div>
        <div class="stat">Creative Ideas</div>
        <div class="stat">Quality branding</div>
        <div class="stat">More clients for your business</div>
      </div>

    </div>

    <div class="hero-image">
      <img src="/images/style.png" alt="Ivy Design">
    </div>

  </section>

  
  <section class="featured">

    <h2>Featured Work</h2>
    <p class="featured-sub">A glimpse of what I can do for your brand</p>

    <div class="featured-grid">

      <div class="featured-card">
        <img src="/images/logo6.png" alt="Logo design" @click="openLightbox(0)">
        <div class="featured-label">Logo Design</div>
      </div>

      <div class="featured-card">
        <img src="/images/flyer1.png" alt="Flyer design" @click="openLightbox(1)">
        <div class="featured-label">Flyer Design</div>
      </div>

      <div class="featured-card">
        <img src="/images/poster4.png" alt="Poster design" @click="openLightbox(2)">
        <div class="featured-label">Poster Design</div>
      </div>

    </div>

    <RouterLink to="/work">
      <button class="see-all">See all work</button>
    </RouterLink>

    <!-- Lightbox -->
    <transition name="fade">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="close-btn" @click.stop="closeLightbox">×</button>
        <button class="nav-btn prev" @click.stop="prevImage">‹</button>
        <img :src="featuredImages[currentIndex]" alt="Full size" @click.stop>
        <button class="nav-btn next" @click.stop="nextImage">›</button>
      </div>
    </transition>

  </section>
</template>

<script setup>
import { ref } from 'vue'

const featuredImages = [
  '/images/logo6.png',
  '/images/flyer1.png',
  '/images/poster4.png'
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
  currentIndex.value = (currentIndex.value - 1 + featuredImages.length) % featuredImages.length
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % featuredImages.length
}

window.addEventListener('keydown', (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
})
</script>

<style scoped>
/* HERO */
.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10%;
  margin-top: 40px;
  min-height: 70vh;
}
.hero-text {
  flex: 1;
  max-width: 500px;
}
.hero-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.hero-image img {
  width: 420px;
  max-width: 100%;
}
.hero h2 { font-size: 60px; line-height: 1.1; }
.hero h2 span { color: #ff4fd8; }
.hero p { margin-top: 20px; opacity: 0.8; }
.hero-buttons { margin-top: 30px; }
.hero-buttons a { text-decoration: none; }
.hero-buttons button {
  padding: 12px 25px;
  border-radius: 25px;
  border: none;
  background: linear-gradient(90deg, #ff0077, #7b00ff);
  color: white;
  cursor: pointer;
  transition: 0.3s;
}
.hero-buttons button:hover { transform: scale(1.05); }
.stats {
  display: flex;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}
.stat {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px 25px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

/* FEATURED */
.featured {
  padding: 20px 10%;
  text-align: center;
}
.featured h2 {
  font-size: 40px;
  margin-bottom: 10px;
}
.featured-sub {
  opacity: 0.7;
  margin-bottom: 40px;
  font-size: 16px;
}
.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}
.featured-card {
  background: #0f0f1f;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.3s;
  position: relative;
}
.featured-card:hover {
  transform: translateY(-8px);
}
.featured-card img {
  width: 100%;
  height: 300px;
  object-fit: contain;
  padding: 10px;
  cursor: pointer;
}
.featured-label {
  padding: 15px;
  font-size: 14px;
  opacity: 0.8;
  background: rgba(255, 255, 255, 0.05);
}
.see-all {
  padding: 12px 35px;
  border-radius: 25px;
  border: none;
  background: linear-gradient(90deg, #ff0077, #7b00ff);
  color: white;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
}
.see-all:hover {
  transform: scale(1.05);
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
  .hero {
    flex-direction: column-reverse;
    padding: 20px 5%;
    text-align: center;
    min-height: auto;
  }
  .hero-text {
    max-width: 100%;
  }
  .hero-image {
    justify-content: center;
  }
  .hero-image img {
    width: 300px;
  }
  .hero h2 {
    font-size: 36px;
  }
  .stats {
    justify-content: center;
  }
  .featured {
    padding: 20px 5%;
  }
  .featured h2 {
    font-size: 28px;
  }
  .nav-btn {
    font-size: 30px;
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .hero h2 {
    font-size: 28px;
  }
  .hero p {
    font-size: 14px;
  }
  .stats {
    gap: 10px;
  }
  .stat {
    padding: 10px 15px;
    font-size: 13px;
  }
  .featured h2 {
    font-size: 24px;
  }
  .featured-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
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