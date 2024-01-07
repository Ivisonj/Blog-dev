import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faItalic } from "@fortawesome/free-solid-svg-icons"
import { faBold } from "@fortawesome/free-solid-svg-icons"
import { faStrikethrough } from "@fortawesome/free-solid-svg-icons"
import { faUndo } from "@fortawesome/free-solid-svg-icons"
import { faRepeat } from "@fortawesome/free-solid-svg-icons"
import { faList } from "@fortawesome/free-solid-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { faListOl } from "@fortawesome/free-solid-svg-icons"
import { faParagraph } from "@fortawesome/free-solid-svg-icons"
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons"
import { faSquare } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"


library.add(faBold, faItalic, faStrikethrough, faUndo, faRepeat, faList, faCode, faListOl, faParagraph, faWindowMinimize, faSquare, faBars, faTrash)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) 

app.use(createPinia())
app.use(router)

app.mount('#app')

