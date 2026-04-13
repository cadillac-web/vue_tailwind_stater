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
      <img src="/images/style.png" alt="Ivy Creative">
    </div>

  </section>

  <!-- FEATURED WORK SECTION -->
  <section class="featured">

    <h2>Featured Work</h2>
    <p class="featured-sub">A glimpse of what I can do for your brand</p>

    <div class="featured-grid">

      <div class="featured-card">
        <img src="/images/flyer1.png" alt="Flyer design">
        <div class="featured-label">Flyer Design</div>
      </div>

      <div class="featured-card">
        <img src="/images/logo6.png" alt="Logo design">
        <div class="featured-label">Logo Design</div>
      </div>

      <div class="featured-card">
        <img src="/images/poster4.png" alt="Poster design">
        <div class="featured-label">Poster Design</div>
      </div>

    </div>

    <RouterLink to="/work">
      <button class="see-all">See all work</button>
    </RouterLink>

  </section>
</template>

<script setup>
</script>

<style scoped>
/* HERO */
.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 80px 10%;
  min-height: 80vh;
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
  padding: 80px 10%;
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
</style>