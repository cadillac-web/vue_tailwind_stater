<template>
  <NavBar :isDark="isDark" @toggleTheme="toggleTheme" />
  <RouterView />
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
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