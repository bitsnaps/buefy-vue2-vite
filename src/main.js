import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

// Use Buefy
Vue.use(Buefy)

new Vue({
  render: (h) => h(App)
}).$mount('#app')

