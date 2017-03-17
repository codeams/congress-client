
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default new Vuex.Store({

  state: {
    person: {},

    pipeline: [
      {
        name: 'instructions',
        locked: false
      },
      {
        name: 'prices-grid',
        locked: true
      },
      {
        name: 'registration-form',
        locked: true
      }
    ],

    currentStageIndex: 0

  },

  getters,

  mutations,

  actions

})
