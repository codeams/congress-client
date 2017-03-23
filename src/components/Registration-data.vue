<template lang='html'>
  <div id='registration-data'>

    <data-capturer>
      <person-registration-form></person-registration-form>

      <group-registration-form></group-registration-form>

      <deposit-registration-form></deposit-registration-form>

      <terms-acceptance-form></terms-acceptance-form>
    </data-capturer>

  </div>
</template>

<script>

  import DataCapturer from './Data-capturer'

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
      DataCapturer,
      
      PersonRegistrationForm,
      GroupRegistrationForm,
      DepositRegistrationForm,
      TermsAcceptanceForm,
    },
  }

</script>
