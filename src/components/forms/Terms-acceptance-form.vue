<template lang='html'>
  <div id='terms-acceptance-form'>

    <div class='row align-center'>
      <div class='checkbox-container small-12 text-center columns'>
        <label>
          <input type='checkbox' v-model='termsAcceptance'>
          He leído y estoy de acuerdo con el
          <a href='#'>aviso de privacidad</a>.
        </label>
      </div>
    </div>

  </div>
</template>


<script>

  import { mapActions } from 'vuex'

  export default {
    name: 'Terms-acceptance-form',

    data () {
      return { termsAcceptance: false }
    },

    created () {
      this.termsAcceptance = this.$store.state.termsAcceptance
    },

    watch: {
      termsAcceptance ( termsAcceptance ) {
        this.setTermsAcceptance( termsAcceptance )
      }
    },

    methods: mapActions ([ 'setTermsAcceptance' ])
  }
</script>


<style lang='css'>
  #terms-acceptance-form {
    margin-bottom: 60px;
  }
</style>
