<template lang='html'>
  <div id='save'>

    <div class='row'>
      <div class='small-12 columns'>
        <span class='section-title' v-if='registrationSuccessful === "saving"'>
          Guardando...
        </span>
        <span class='section-title' v-if='registrationSuccessful === "success"'>
          Confirma tu correo electrónico
        </span>
        <span class='section-title' v-else-if='registrationSuccessful === "fail"'>
          Ha ocurrido un error al guardar
        </span>
      </div>
    </div>

    <div class='section-content'>
      <div class='text row'>
        <div class='small-12 columns' v-if='registrationSuccessful === "success"'>
          <p>
            ¡Sólo un paso más!
          </p>
          <p>
            Tu información ha sido guardada con éxito. Te hemos enviado un correo a
            la dirección <strong>{{ this.person.email }}</strong>. Por favor
            <strong>confirma</strong> tu correo electrónico en la próximas 72
            horas para concluir el registro.
          </p>
        </div>
        <div class='small-12 columns' v-else-if='registrationSuccessful === "fail"'>
          Error: {{ this.errorMessage }}.

          <div class='align-center row'>
            <div class='buttons-container small-12 medium-6 text-right columns'>

              <input type='button' @click='gotoPrevStage'
                class='button secondary large' value='Regresar'>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

  import config from '@/config'
  import Axios from 'axios'
  import RequestTransformers from '@/transformers/Request-transformers'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Save',

    data () {
      return {
        registrationSuccessful: 'saving',
        errorMessage: ''
      }
    },

    computed: mapGetters ([
      'person',
      'group',
      'deposit'
    ]),

    methods: mapActions ([
      'gotoPrevStage',
      'setRegistrationCompleteness'
    ]),

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

      // console.log(request)

      Axios({
        method: 'POST',
        url: config.SAVE_PATH,
        data: {data: request},
        validateStatus: status => status === 200
      }).then((response) => {
        this.registrationSuccessful = 'success'
        // console.log(response.data)
      }).catch((error) => {
        this.registrationSuccessful = 'fail'
        // console.log(error.response)
        this.errorMessage = error.response.data.message
      })
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
