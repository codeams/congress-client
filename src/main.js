
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import store from './store'
import Congress from './Congress'

Vue.use(VeeValidate, {
  delay: 500
})


Vue.config.productionTip = false


new Vue({
  el: '#congress',
  store,
  template: '<Congress/>',
  components: { Congress }
})
