/*import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')*/
import Vue from 'vue'
import Landing from './views/Landing.vue'
import '@/assets/css/tailwind.css'


Vue.config.productionTip = false

const routes = {
  '/landing': Landing
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Landing
    }
  },
  render (h) { return h(this.ViewComponent) },
}).$mount('#app')