import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import VueCryptojs from 'vue-cryptojs'

library.add(fas);

import './assets/main.css'

const app = createApp(App)

app.use(router)

app
.component('fa', FontAwesomeIcon)
.use(VueCryptojs)
.mount('#app')
