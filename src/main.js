import Vue from 'vue'
import {PiniaVuePlugin, createPinia, setActivePinia} from 'pinia'

import App from '@/App.vue'
import router from '@/router'

Vue.use(PiniaVuePlugin)

const pinia = createPinia()
setActivePinia(pinia)

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount('#app')
