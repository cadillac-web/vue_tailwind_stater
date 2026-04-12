<template>
  <div>
    <NavBar />
    <HeroSection />
    <ServicesSection />
    <PortfolioSection />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/Hero.vue'
import ServicesSection from './components/Services.vue'
import PortfolioSection from './components/Portfolio.vue'
import Footer from './components/Footer.vue'

const portfolioRef = ref(null)

function highlightWork() {
  setTimeout(() => {
    portfolioRef.value.isHighlighted = true
    setTimeout(() => {
      portfolioRef.value.isHighlighted = false
    }, 2000)
  }, 600)
}
</script>