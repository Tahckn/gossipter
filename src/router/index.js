import { createRouter, createWebHistory } from 'vue-router'

import Welcome from '@/views/Welcome.vue'
import GossipRoom from '@/views/GossipRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path:'/gossiproom',
      name:'GossipRoom',
      component:GossipRoom,
    }
  ]
})

export default router
