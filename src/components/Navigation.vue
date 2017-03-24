<template lang='html'>
  <div id='section-navigation'>
    <div class='navigation align-center row'>
      <div class='small-12 large-6 columns-collapsed'>
        <span class='congress-title'>
          Registro al <strong>CONISFOT</strong>
        </span>
      </div>

      <div class='small-12 large-6 columns-collapsed'>

        <span
          v-for='stage, stageIndex in pipeline'
          v-if='stage.visible'
          @click='
            stageIndex < currentStageIndex
              ? gotoStageNamed( stage.name )
              : ""
          '
          :class='[
            "section",
            stage.name,
            { "current" : stageIndex === currentStageIndex },
            { "previous" : stageIndex < currentStageIndex },
            { "forward" : stageIndex > currentStageIndex },
          ]'
        ></span>

      </div>
    </div>
  </div>
</template>


<script>

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'navigation',
    data () {
      return {}
    },
    computed: mapGetters ([
      'pipeline',
      'currentStageIndex',
      'currentStage'
    ]),
    methods: mapActions ([
      'gotoStageNamed'
    ])
  }

</script>


<style lang='scss' scoped>

  #section-navigation {
    margin-bottom: 40px;
    text-align: center;
  }

  .navigation .section {
    display:inline-block;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center center;
    border-radius: 50%;

    transition: transform 140ms ease-out, background-color 140ms ease-out;
  }

  .section.previous {
    background-color: #00234E;
    cursor: pointer;
  }

  .section.current {
    background-color: #005ccc;
    transform: scale( 1.2 );
  }

  .section.previous:hover {
    transform: scale( 1.1 );
  }

  .section.forward {
    background-color: #CCC;
  }

  .section.instructions {
    background-image: url( '../assets/icons/instructions.svg' );
  }

  .section.prices-grid {
    background-image: url( '../assets/icons/prices-grid.svg' );
  }

  .section.registration-data {
    background-image: url( '../assets/icons/registration-data.svg' );
  }

  .section.payment-data {
    background-image: url( '../assets/icons/payment-data.svg' );
  }

  .section.save {
    background-image: url( '../assets/icons/save.svg' );
  }

  .navigation .congress-title {
    display: block;
    font-size: 1.7em;
    line-height: 40px;
    color: #00234E;
    cursor: default;
  }

  .navigation .congress-title strong {
    font-weight: normal;
    color: #005CCC;
  }


  @media #{$small-only} {
    .navigation .congress-title {
      margin-bottom: 10px;
    }
  }

  @media #{$medium-only} {
    .navigation .congress-title {
      margin-bottom: 10px;
    }
  }

</style>
