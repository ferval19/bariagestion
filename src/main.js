/*import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')*/
import Vue from 'vue'
import Home from './views/Home.vue'
import '@/assets/css/tailwind.css'



Vue.config.productionTip = false

const routes = {
  '/home': Home
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