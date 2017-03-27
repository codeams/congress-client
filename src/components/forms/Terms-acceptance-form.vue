<template lang='html'>
  <div id='terms-acceptance-form'>

    <div class='row align-center'>
      <div class='checkbox-container small-12 text-center columns'>
        <label :class="{ 'error' : errors.has('termsAcceptance') }">
          <input name='termsAcceptance' type='checkbox'
            v-model='termsAcceptance' v-validate='"required"'>
          He leído y estoy de acuerdo con el
          <a href='#'>aviso de privacidad</a>.

          <div v-show='errors.has("termsAcceptance")'>
            <span class='error-message'>
              Para poder continuar es necesario aceptar los términos.
            </span>
          </div>
        </label>
      </div>
    </div>

  </div>
</template>


<script>

  import { find, propEq } from 'ramda'
  import bus from '../../utils/bus'

  import { mapActions } from 'vuex'

  export default {
    name: 'Terms-acceptance-form',

    data () {
      return { termsAcceptance: false }
    },

    mounted() {

      bus.$on( 'validate', this.onValidate )

      this.$watch( () => this.errors.errors, ( newValue, oldValue ) => {
        const newErrors = newValue.filter( error =>
          find( propEq( 'field', error.field ) )( oldValue ) === undefined
        )

        const oldErrors = oldValue.filter( error =>
          find( propEq( 'field', error.field ) )( newValue ) === undefined
        )

        bus.$emit( 'errors-changed', newErrors, oldErrors )
      })

    },

    created () {
      this.termsAcceptance = this.$store.state.termsAcceptance
    },

    methods: {
      onValidate() {
        this.$validator.validateAll().then(() => {}).catch(() => {})

        if ( this.errors.any() ) {
          bus.$emit( 'errors-changed', this.errors.errors )
        }
      },

      ...mapActions ([ 'setTermsAcceptance' ])
    },

    beforeDestroy() {
      bus.$emit( 'errors-changed', [], this.errors.errors )
      bus.$off( 'validate', this.onValidate )
    },

    watch: {
      termsAcceptance ( termsAcceptance ) {
        this.setTermsAcceptance( termsAcceptance )
      }
    },
  }
</script>


<style lang='css' scoped>

  #terms-acceptance-form {
    margin-bottom: 60px;
  }

  .checkbox-container label {
    transition: background-color .25s ease-in-out;
  }

  .error {
    background-color: rgba(255, 0, 0, 0.05);
  }

  .error-message {
    color: red !important;
  }

</style>
