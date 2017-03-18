<template>
  <div id='prices-grid'>
    <span class='section-title'>Selección de tipo de registro</span>

    <div class='section-content'>

      <div class='registration-types small-up-1 medium-up-2 large-up-3 row'>

        <div class='column' v-for='registrationType in prices'>
          <div class='registration-type'
            @click='
              setRegistrationType( registrationType.key );
              gotoNextStage()
            '>
            <span class='type-price'>
              $ {{ registrationType.price }} 
              {{ registrationType.groupal ? 'p/p' : '' }}
            </span>
            <span class='type-name'>{{ registrationType.name }}</span>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>


<script>

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Prices-grid',

    data () {
      return {}
    },

    computed: mapGetters ([ 'prices' ]),

    methods: mapActions([
      'setRegistrationType',
      'gotoNextStage'
    ])
  }

</script>


<style lang='scss'>

  .registration-types > .column {
    padding: 20px;
  }

  .registration-type {
    width: 100%;
    height: 100%;
    padding: 40px;
    border: 3px solid #00234e;
    text-align: center;
    color: #00234e;
    border-radius: 6px;
    transition: transform 100ms, border-color 100ms, color 100ms;
    cursor: pointer;
  }

  .registration-type:hover {
    border-color: #005ccc;
    color: #005ccc;
    transform: scale( 1.05 );
  }

  .registration-type:active {
    transform: scale( 1.15 );
  }

  .registration-type.selected {
    transform: scale( 1.15 );
    border-color: green;
    color: green;
  }

  .registration-type .type-name {
    display: block;
    font-size: 1.5em;
  }

  .registration-type .type-price {
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 2em;
  }

</style>
