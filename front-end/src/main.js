import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import './plugins/axios'
// import vueMask from './plugins/mask'
import router from './router'
// import VueMask from 'ke-the-mask'
// Vue.use(VueMask);

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  vuetify,
  // vueMask,
  router,
  render: h => h(App)
}).$mount('#app')
