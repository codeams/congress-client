<template lang='html'>
  <div id='payment-data'>

    <data-capturer>
      <deposit-registration-form></deposit-registration-form>
      <!-- <Invoice-registration-form></Invoice-registration-form> -->
    </data-capturer>

  </div>
</template>


<script>

  import DataCapturer  from './Data-capturer'
  import DepositRegistrationForm from './forms/Deposit-registration-form'
  import InvoiceRegistrationForm from './forms/Invoice-registration-form'

  export default {
    name: 'Payment-data',

    data () {
      return {}
    },

    components: {
      DataCapturer,
      DepositRegistrationForm,
      InvoiceRegistrationForm
    }
  }

</script>
