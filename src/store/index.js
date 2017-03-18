
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default new Vuex.Store({

  state: {
    person: {
      degree: '',
      role: '',
      firstName: '',
      lastName: '',
      institution: '',
      faculty: '',
      telephone: {
        number: '',
        extension: ''
      },
      email: ''
    },
    registrationType: '',

    pipeline: [
      {
        name: 'instructions',
        visible: true
      },
      {
        name: 'prices-grid',
        visible: true
      },
      {
        name: 'registration-form',
        visible: true
      },
      {
        name: 'save-confirmation',
        visible: true
      }
    ],

    currentStageIndex: 0

  },

  getters,

  mutations,

  actions

})
