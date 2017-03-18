<template>
  <div id='congress'>

    <div class='container'>

      <top></top>

      <navigation></navigation>

      <div class='content'>
        <transition name='component-fade' mode='out-in'>
          <component :is='this.currentStage.name'></component>
        </transition>
      </div>

    </div>

    <bottom></bottom>

  </div>
</template>


<script>

  import { mapGetters } from 'vuex'

  import Top from './components/Top'
  import Navigation from './components/Navigation'
  import Bottom from './components/Bottom'

  import Instructions from './components/Instructions'
  import PricesGrid from './components/Prices-grid'
  import RegistrationForm from './components/Registration-form'


  export default {
    name: 'Congress',

    data () {
      return {}
    },

    components: {
      'top': Top,
      'navigation': Navigation,
      'instructions': Instructions,
      'prices-grid': PricesGrid,
      'registration-form': RegistrationForm,
      'bottom': Bottom
    },

    computed: mapGetters ([ 'currentStage' ]),
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

  .component-fade-enter-active,
  .component-fade-leave-active {
    transition: opacity .3s ease;
  }

  .component-fade-enter,
  .component-fade-leave-to {
    opacity: 0;
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
