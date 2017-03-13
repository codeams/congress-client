<template>
  <div class='bottom'>
    <a href='#'>Aviso de privacidad</a>
    <a href='#'>Términos de uso</a>
    <a href='#'>Derechos de autor</a>
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

  .bottom {
    padding: 30px 0;
    text-align: center;
  }

  .bottom a {
    margin: 0 15px;
    text-decoration: none;
    color: #f2f2f2;
  }

  .bottom a:hover {
    text-decoration: underline;
  }

  @media #{$small-only} {
    .bottom {
      font-size: 0.75em;
    }
  }

</style>
