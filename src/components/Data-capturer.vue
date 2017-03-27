<template lang='html'>
  <div class='data-capturer'>

    <slot></slot>

    <div class='align-center row'>
      <div class='button-container small-12 medium-6 text-right columns'>
        <input type='button' @click='gotoPrevStage'
          class='button secondary large' value='Regresar'>
      </div><div class='button-container small-12 medium-6 text-left columns'>
        <input type='button' @click='submit'
          class='button primary large' value='Continuar'>
      </div>
    </div>

  </div>
</template>


<script>

  import bus from '../utils/bus'
  import windowController from '../utils/window-controller'

  import { mapActions } from 'vuex'

  import PersonRegistrationForm from './forms/Person-registration-form'
  import GroupRegistrationForm from './forms/Group-registration-form'
  import DepositRegistrationForm from './forms/Deposit-registration-form'
  import TermsAcceptanceForm from './forms/Terms-acceptance-form'

  export default {
    name: 'Data-capturer',

    data () {
      return {}
    },

    components: {
      PersonRegistrationForm,
      GroupRegistrationForm,
      DepositRegistrationForm,
      TermsAcceptanceForm
    },

    mounted() {
      this.$on( 'veeValidate', () => {
        bus.$emit( 'validate' )
      })

      bus.$on('errors-changed', ( newErrors, oldErrors ) => {
        newErrors.forEach( error => {
          if ( ! this.errors.has( error.field ) ) {
            this.errors.add( error.field, error.msg )
          }
        })
        if ( oldErrors ) {
          oldErrors.forEach( error => {
            this.errors.remove( error.field )
          })
        }
      })
    },

    methods: {
      submit() {
        bus.$emit( 'validate' )

        if ( ! this.errors.any() ) {
          this.gotoNextStage()
        } else {
          windowController.scrollToTop()
        }
      },

      ...mapActions ([
        'gotoNextStage',
        'gotoPrevStage'
      ]),
    },
  }

</script>


<style lang='scss'>

  .data-capturer .section-title {
    text-align: left;
    margin-bottom: 5px;
  }

  .data-capturer .section-content {
    margin-bottom: 60px;
  }

  .data-capturer .content {
    padding-left: 0;
    padding-right: 0;
  }

  .registration-form {
    padding: 20px 0 0;
    margin-bottom: 30px;
  }

  .registration-form > .row > .columns {
    position: relative;
    margin-bottom: 5px;
  }

  .registration-form > .row:last-of-type > .columns:last-of-type {
    margin-bottom: 0;
  }

  // .section-content {
  //   padding-top: 20px;
  // }

  .text-field-container span,
  .select-field-container span {
    padding-left: 15px;
    font-size: 1.1rem;
    color: #00234e;
    transition: color .25s ease-in-out;
  }

  input[type="text"],
  input[type="number"],
  select {
    display: block;
    height: auto;
    padding: 18px 15px;
    font-size: 20px;
    color: #00234e;
    opacity: 0.7;
    border-radius: 6px;
  }

  select {
    padding-right: 36px;
  }

  select.is-default {
    color: #bbb;
  }

  input[type="text"]:focus,
  input[type="number"]:focus,
  select:focus {
    opacity: 1;
  }

  .checkbox-container {
    white-space: nowrap;
  }

  .checkbox-container label {
    display: inline-block;
    white-space: normal;
    font-size: 1.1rem;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    margin-bottom: 0;
  }

  @media #{$small-only} {
    .data-capturer .section-title {
      text-align: center;
    }
  }

</style>
