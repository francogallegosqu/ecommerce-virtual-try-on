import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faHeart, faTrashCan)


const app = createApp(App)

app.component('Fai', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
