import Vue from 'vue'
import Home from './views/Home.vue'
import Politica from './views/Politica.vue'
import '@/assets/css/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAward)
library.add(faClock)
library.add(faUserFriends)
library.add(faBars)
library.add(faTimes)



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const routes = {
  '/': Home,
  '/politica': Politica
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Home
    }
  },
  render (h) { return h(this.ViewComponent) },
}).$mount('#app')