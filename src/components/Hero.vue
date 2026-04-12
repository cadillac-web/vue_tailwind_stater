<template>
  <section class="hero">

    <div class="hero-text">

      <h2>Creative <span>Designs</span><br>For Modern Brands</h2>

      <p>Logos, posters and flyers designed to help businesses stand out.</p>

      <div class="hero-buttons">
        <a href="#work">
          <button @click="emit('highlight')">View my work</button>
        </a>
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
</template>

<script setup>
const emit = defineEmits(['highlight'])
</script>

<style scoped>
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
</style>