<template lang='html'>
  <div id='instructions'>

    <div class='row'>
      <div class='small-12 columns'>
        <span class='section-title'>Instrucciones</span>
      </div>
    </div>

    <div class='section-content'>
      <div class='text row'>
        <div class='small-12 columns'>
          <p><strong>Notas importantes:</strong></p>
          <ul>
            <li>Para registrarse en este sistema se requieren sus datos de depósito, no podrá registrarse hasta haber realizado el depósito correspondiente de acuerdo a las instrucciones proporcionadas.</li>
            <li>Ninguna información se enviará ni se guardará hasta el último paso al presionar el botón “Realizar registro”.</li>
          </ul>

          <p><strong>Instrucciones:</strong></p>
          <ul>
            <li>Consulte la cuota de recuperación vigente.</li>
            <li>Realice el depósito de acuerdo a las instrucciones proporcionadas.</li>
            <li>Sólo después de haber completado los pasos anteriores regístrese utilizando este sistema.</li>
            <li>Una vez realizado su registro recibirá un número de folio en su dirección de correo electrónico especificado.</li>
            <li>Deberá presentarse al congreso con la ficha ORIGINAL del depósito bancario y con el formato que recibirá por correo electrónico.</li>
            <li>No es posible modificar la información proporcionada una vez que el registro ha concluido, cualquier aclaración o modificación deberá realizarse hasta llegar al congreso.</li>
          </ul>

        </div>
      </div>
    </div>

    <div class='row'>
      <div class='small-12 text-center columns'>
        <div class='action-buttons align-center row'>
          <div class='button-container small-12 medium-6 text-center columns'>
            <input type='button' @click='gotoNextStage'
              class='button primary large' value='Continuar'>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

  import { mapActions } from 'vuex'


  export default {
    name: 'instructions',

    data () {
      return {}
    },

    methods: mapActions ([ 'gotoNextStage' ])
  }

</script>


<style scoped>

  .section-content {
    margin-bottom: 45px;
  }

</style>
