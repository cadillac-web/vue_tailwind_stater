<template>
  <nav>
    <h1>IVYDESIGNS</h1>
    <div class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <RouterLink to="/work">Work</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <button class="theme-btn" @click="emit('toggleTheme')">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>
  </nav>
</template>

<script setup>
defineProps({ isDark: Boolean })
const emit = defineEmits(['toggleTheme'])
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 10%;
}
nav h1 { color: #ff4fd8; letter-spacing: 1px; }
.nav-links { display: flex; align-items: center; gap: 25px; }
a { color: inherit; text-decoration: none; opacity: 0.8; }
a:hover { opacity: 1; }
.theme-btn {
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
}
</style>