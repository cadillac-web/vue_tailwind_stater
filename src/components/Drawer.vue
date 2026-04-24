<template>
  <div>
    <button @click="toggleDrawer" class="drawer-toggle">Toggle Drawer</button>
    <div v-if="isOpen" class="drawer">
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/work">Work</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <button @click="toggleTheme">Toggle Theme</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isDarkTheme: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isOpen = !this.isOpen;
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.body.classList.toggle('dark-theme', this.isDarkTheme);
    },
  },
};
</script>

<style scoped>
.drawer {
  width: 250px;
  background-color: white;
  position: fixed;
  height: 100%;
  transition: transform 0.3s ease;
}
.drawer-toggle {
  margin: 1rem;
}
.dark-theme {
  background-color: #333;
  color: white;
}
</style>