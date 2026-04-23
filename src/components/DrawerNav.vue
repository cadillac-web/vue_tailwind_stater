<template>
  <div>
    <!-- Hamburger Button -->
    <button class="hamburger" @click="openDrawer" aria-label="Open menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar short"></span>
    </button>

    <!-- Backdrop -->
    <transition name="fade">
      <div v-if="isOpen" class="backdrop" @click="closeDrawer"></div>
    </transition>

    <!-- Drawer -->
    <transition name="slide">
      <aside v-if="isOpen" class="drawer">

        <!-- Header -->
        <div class="drawer-header">
          <h1 class="brand">IVYDESIGNS</h1>
          <button class="close-btn" @click="closeDrawer" aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Nav Links -->
        <nav class="drawer-nav">
          <RouterLink to="/" @click="closeDrawer" :class="{ active: $route.path === '/' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            Home
          </RouterLink>
          <RouterLink to="/services" @click="closeDrawer" :class="{ active: $route.path === '/services' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Services
          </RouterLink>
          <RouterLink to="/work" @click="closeDrawer" :class="{ active: $route.path === '/work' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            Work
          </RouterLink>
          <RouterLink to="/contact" @click="closeDrawer" :class="{ active: $route.path === '/contact' }">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            Contact
          </RouterLink>
        </nav>

        <!-- Footer: Theme Toggle -->
        <div class="drawer-footer">
          <button class="theme-btn" @click="emit('toggleTheme')">
            {{ isDark ? '☀️ Light mode' : '🌙 Dark mode' }}
          </button>
        </div>

      </aside>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ isDark: Boolean })
const emit = defineEmits(['toggleTheme'])

const isOpen = ref(false)

function openDrawer() {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeDrawer() {
  isOpen.value = false
  document.body.style.overflow = ''
}

// Close on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isOpen.value) closeDrawer()
})
</script>

<style scoped>
.hamburger {
  position: fixed;
  top: 24px;
  left: 24px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.bar {
  display: block;
  width: 22px;
  height: 2px;
  background: #ff4fd8;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.bar.short { width: 14px; }
.hamburger:hover .bar.short { width: 22px; }

/* Responsive */
@media (max-width: 768px) {
  .hamburger {
    top: 16px;
    left: 16px;
    width: 38px;
    height: 38px;
  }
  .bar {
    width: 20px;
  }
  .bar.short { width: 12px; }
}

@media (max-width: 480px) {
  .hamburger {
    top: 12px;
    left: 12px;
    width: 36px;
    height: 36px;
  }
  .bar {
    width: 18px;
    height: 2px;
  }
  .bar.short { width: 10px; }
}

/* Backdrop */
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 40;
}

/* Drawer */
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 280px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  background: var(--drawer-bg, #0f0f0f);
  border-right: 1px solid rgba(255, 79, 216, 0.15);
}

@media (max-width: 480px) {
  .drawer {
    width: 100%;
  }
}

/* Header */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 24px 20px;
  border-bottom: 1px solid rgba(255, 79, 216, 0.1);
}
.brand {
  color: #ff4fd8;
  letter-spacing: 1px;
  font-size: 18px;
  font-weight: 700;
}
.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}
.close-btn:hover { color: #ff4fd8; background: rgba(255, 79, 216, 0.08); }

/* Nav links */
.drawer-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  gap: 4px;
}
.drawer-nav a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 10px;
  color: inherit;
  text-decoration: none;
  opacity: 0.7;
  font-size: 15px;
  font-weight: 500;
  transition: opacity 0.2s, background 0.2s, color 0.2s;
}
.drawer-nav a:hover {
  opacity: 1;
  background: rgba(255, 79, 216, 0.08);
  color: #ff4fd8;
}
.drawer-nav a.active {
  opacity: 1;
  background: rgba(255, 79, 216, 0.12);
  color: #ff4fd8;
}
.drawer-nav svg { flex-shrink: 0; }

/* Footer */
.drawer-footer {
  padding: 20px 24px;
  border-top: 1px solid rgba(255, 79, 216, 0.1);
}
.theme-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: 1px solid rgba(255, 79, 216, 0.2);
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  color: inherit;
  width: 100%;
  transition: background 0.2s, border-color 0.2s;
}
.theme-btn:hover {
  background: rgba(255, 79, 216, 0.08);
  border-color: rgba(255, 79, 216, 0.4);
}

/* Transitions */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Drawer responsive */
@media (max-width: 768px) {
  .drawer-header {
    padding: 24px 20px 16px;
  }
  .brand {
    font-size: 16px;
  }
  .drawer-nav {
    padding: 16px 12px;
  }
  .drawer-nav a {
    padding: 10px 12px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .drawer-header {
    padding: 20px 16px 14px;
  }
  .brand {
    font-size: 15px;
  }
  .drawer-nav a {
    padding: 10px 10px;
    font-size: 14px;
    gap: 10px;
  }
  .drawer-footer {
    padding: 16px;
  }
  .theme-btn {
    padding: 10px 12px;
    font-size: 13px;
  }
}
</style>