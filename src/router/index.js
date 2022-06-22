import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import GossipRoom from '@/views/GossipRoom.vue'
import {projectAuth} from '@/firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log(user)
  if(!user){
  next({name:'Welcome'})
  } else{
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/gossiproom',
      name: 'GossipRoom',
      component: GossipRoom,
      beforeEnter:requireAuth
    },
  ],
})

export default router
