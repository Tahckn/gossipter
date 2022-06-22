import './assets/main.css'

import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(router)

    app.mount('#app')
  }
})
