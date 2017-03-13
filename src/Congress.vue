<template>
  <div id='congress'>

    <div class='container'>

      <top></top>

      <navigation></navigation>

      <div class='content'>
        <registration-form></registration-form>
      </div>

    </div>

    <bottom></bottom>

  </div>
</template>


<script>
import Top from './components/Top'
import Navigation from './components/Navigation'
import RegistrationForm from './components/Registration-form'
import Bottom from './components/Bottom'

export default {
  name: 'Congress',
  components: {
    Top,
    Navigation,
    RegistrationForm,
    Bottom
  }
}
</script>


<style lang='scss'>

  @import './styles/global';

  body {
    min-width: 360px;
    background-image: url( './assets/images/pattern.png' );
    background-repeat: repeat;
    background-color: #00234e;
  }

  .container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    background-color: #f2f2f2;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .content {
    padding: 0 60px 60px;
  }

  .section-title {
    display: block;
    margin-bottom: 45px;
    text-align: center;
    font-size: 2.5em;
    font-weight: normal;
    color: #00234E;
    cursor: default;
  }

  .section-content {
    margin-bottom: 30px;
  }

  .section-content .text {
    color: #3B3B3B;
  }

  @media #{$small-only} {
    .section-title {
      font-size: 1.5em;
    }
  }


</style>
