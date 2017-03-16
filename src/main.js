
import Vue from 'vue'
import store from './store'
import Congress from './Congress'


Vue.config.productionTip = false


new Vue({
  el: '#congress',
  store,
  template: '<Congress/>',
  components: { Congress },
})
