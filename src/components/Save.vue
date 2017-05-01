<template lang='html'>
  <div id='save'>

    <div class='row'>
      <div class='small-12 columns'>
        <span class='section-title'>Registro realizado con éxito</span>
      </div>
    </div>

    <div class='section-content'>
      <div class='text row'>
        <div class='small-12 columns'>
          <p>
            ¡Gracias por registrarte al <strong>CONISOFT</strong>!
          </p>
          <p>
            El registro se ha completado exitosamente. Deberás en los próximos
            minutos recibir un email de confirmación en
            <strong>{{ this.person.email }}</strong>.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

  import Axios from 'axios'
  import RequestTransformers from '@/transformers/Request-transformers'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Save',

    data () {
      return {}
    },

    computed: mapGetters ([
      'person',
      'group',
      'deposit'
    ]),

    methods: mapActions ([ 'setRegistrationCompleteness' ]),

    created () {
      this.setRegistrationCompleteness( true )

      let person = RequestTransformers.PersonTransformer(this.person)
      let group = RequestTransformers.GroupTransformer(this.group)
      let deposit = RequestTransformers.DepositTransformer(this.deposit)

      let request = {
        person,
        group,
        deposit
      }

      request = RequestTransformers.RequestTransformer(request)

      console.log(request)
    },
  }

</script>


<style lang='scss' scoped>

  #save {
    .section-title{
      text-align: left;
    }

    .text {
      font-size: 22px;

      strong {
        color: $primary-color;
      }
    }
  }

</style>
