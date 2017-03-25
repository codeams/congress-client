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
            ¡Gracias por registrarte al CONISOFT!
          </p>
          <p>
            El registro se ha completado exitosamente. Deberás en los próximos
            minutos recibir un email de confirmación en la cuenta de correo
            electrónico especificada.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

  export default {
    name: 'Save',

    data () {
      return {}
    }
  }

</script>


<style lang='scss' scoped>

  #save {
    .text {
      font-size: 22px;
    }
  }

</style>
