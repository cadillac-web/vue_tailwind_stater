<template>
  <section class="contact">

    <h2>Get In Touch</h2>
    <p class="subtitle">Ready to elevate your brand? Let's talk.</p>

    <div class="contact-cards">

      <div class="contact-card">
        <div class="icon">💬</div>
        <h3>WhatsApp</h3>
        <p>Chat with me directly:254114815355</p>
        <a href="https://wa.me/254114815355" target="_blank">
          <button>Message me</button>
        </a>
      </div>

      <div class="contact-card">
        <div class="icon">📧</div>
        <h3>Email</h3>
        <p>kibukaivy@gmail.com</p>
        <a href="https://mail.google.com/mail/?view=cm&to=kibukaivy@gmail.com" target="_blank">
          <button>Send email</button>
        </a>
      </div>

      <div class="contact-card">
        <div class="icon">📸</div>
        <h3>Instagram</h3>
        <p>See my latest work</p>
        <a href="https://instagram.com/ivydesigns.pro" target="_blank">
          <button>Follow me</button>
        </a>
      </div>

    </div>

  </section>
</template>

<script setup>
</script>

<style scoped>
.contact {
  padding: 80px 10%;
  text-align: center;
}
.contact h2 {
  font-size: 48px;
  margin-bottom: 15px;
}
.subtitle {
  opacity: 0.7;
  margin-bottom: 60px;
  font-size: 18px;
}
.contact-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  max-width: 900px;
  margin: 0 auto;
}
.contact-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px 30px;
  border-radius: 15px;
  transition: 0.3s;
}
.contact-card:hover {
  transform: translateY(-8px);
}
.icon {
  font-size: 40px;
  margin-bottom: 15px;
}
.contact-card h3 {
  margin-bottom: 10px;
  font-size: 20px;
}
.contact-card p {
  opacity: 0.7;
  margin-bottom: 25px;
}
.contact-card button {
  padding: 12px 25px;
  border-radius: 25px;
  border: none;
  background: linear-gradient(90deg, #ff0077, #7b00ff);
  color: white;
  cursor: pointer;
  transition: 0.3s;
  font-size: 15px;
  width: 100%;
  max-width: 200px;
}
.contact-card button:hover {
  transform: scale(1.05);
}

@media (max-width: 480px) {
  .contact-card button {
    max-width: 100%;
    padding: 14px 20px;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .contact {
    padding: 40px 5%;
  }
  .contact h2 {
    font-size: 36px;
  }
  .subtitle {
    margin-bottom: 40px;
    font-size: 16px;
  }
  .contact-cards {
    gap: 15px;
  }
  .contact-card {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .contact h2 {
    font-size: 28px;
  }
  .contact-card h3 {
    font-size: 18px;
  }
  .contact-card p {
    font-size: 14px;
  }
}
</style>