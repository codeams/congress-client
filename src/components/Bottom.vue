<template lang='html'>
  <div id='bottom'>

    <p>
      <a href='http://redmis2016.com.mx/conisoft2017/' title='CONISOFT 2017'>CONISOFT 2017</a>
      <a href='#' title='Aviso de privacidad'>Aviso de privacidad</a>
      <a href='#' title='Contacto con los organizadores'>Contacto</a>
    </p>

  </div>
</template>


<script>
  export default {
    name: 'Bottom',
    data () {
      return {}
    }
  }
</script>


<style lang='scss'>

  #bottom {
    padding: 30px 0;
    text-align: center;

    span,
    p,
    a {
      color: #f2f2f2;
    }

    a {
      margin: 0 15px;
      text-decoration: underline;
    }
  }

  @media #{$small-only} {
    #bottom {
      font-size: 0.75em;
    }
  }

</style>
