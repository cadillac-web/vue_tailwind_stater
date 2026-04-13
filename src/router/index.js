import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/work', component: Portfolio },
    { path: '/contact', component: Contact }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router