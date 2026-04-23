<template>
  <section class="services" id="services">

    <h2>Services</h2>

    <div class="service-grid">

      <div class="card">
        <h3>Logo Design</h3>
        <p>Professional brand identity for businesses.</p>
      </div>

      <div class="card">
        <h3>Poster Design</h3>
        <p>Eye-catching promotional posters.</p>
      </div>

      <div class="card">
        <h3>Flyer Design</h3>
        <p>Marketing flyers that attract customers.</p>
      </div>

    </div>

  </section>
</template>

<script setup>
</script>

<style scoped>
.services {
  padding: 80px 10%;
}
.services h2 {
  margin-bottom: 30px;
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}
.card {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  transition: 0.3s;
}
.card:hover {
  transform: translateY(-8px);
}

/* Responsive */
@media (max-width: 768px) {
  .services {
    padding: 40px 5%;
  }
  .services h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  .service-grid {
    gap: 15px;
  }
  .card {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .services h2 {
    font-size: 24px;
  }
  .card h3 {
    font-size: 18px;
  }
  .card p {
    font-size: 14px;
  }
}
</style>