<template>
  <nav>
    <h1>IVYDESIGNS</h1>
    <div>
      <a href="#">Home</a>
      <a href="#services">Services</a>
      <a href="#work">Work</a>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 10%;
}
nav h1 { color: #ff4fd8; letter-spacing: 1px; }
nav a { color: white; text-decoration: none; margin-left: 25px; opacity: 0.8; }
nav a:hover { opacity: 1; }
</style>