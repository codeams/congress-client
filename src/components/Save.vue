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

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Save',

    data () {
      return {}
    },

    computed: mapGetters ([ 'person' ]),

    methods: mapActions ([ 'setRegistrationCompleteness' ]),

    created () {
      this.setRegistrationCompleteness( true )
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
