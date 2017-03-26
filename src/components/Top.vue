<template lang='html'>
  <div id='top'>

    <div class='row align-justify'>
      <div class='small-6 medium-4 columns-collapsed'>
        <div class='logo uady-logo'></div>
      </div>
      <div class='small-6 medium-4 columns-collapsed'>
        <div class='logo congress-logo'></div>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    name: 'Top',
    data () {
      return {}
    }
  }
</script>


<style lang='scss'>

  #top {
    height: 145px;
    padding: 15px 60px 30px;
    margin-bottom: 30px;
    background-color: #fafafa;

    > .row {
      width: 100%;
      height: 100%;
    }
  }

  .logo {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }

  .uady-logo {
    background-image: url( '../assets/logos/uady-logo.png' );
  }

  .congress-logo {
    background-image: url( '../assets/logos/congress-logo.png' );
  }

  @media #{$small-only} {
    .top {
      height: 100px;
    }
  }
  
</style>
