<template lang='html'>
  <div id='invoice-registration-form'>

    <div class='row'>
      <div class='small-12 columns'>
        <span class='section-title'>Datos de facturación</span>
      </div>
    </div>

    <div class='section-content'>

      <div class='registration-form'>
        <div class='row'>
          <div class='select-field-container small-12 medium-6 columns'>
            <label>
              <span>R.F.C.</span>

              <input type='text' placeholder='Obligatorio'
                v-model='invoice.rfc'>
            </label>
          </div>

          <div class='select-field-container small-12 medium-6 columns'>
            <label>
              <span>Razón social</span>

              <input type='text' placeholder='Obligatorio'
                v-model='invoice.businessName'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-6 columns'>
            <label>
              <span>Calle</span>

              <input type='text' placeholder='Obligatorio'
                v-model='invoice.office.street'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-6 columns'>
            <label>
              <span>Colonia</span>

              <input type='text' placeholder='Obligatorio'
                v-model='invoice.office.neighborhood'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-7 columns'>
            <label>
              <span>Número exterior</span>

              <input type='text' placeholder='Obligatorio'
                v-model='invoice.office.externalNumber'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-5 columns'>
            <label>
              <span>Número interior</span>

              <input type='text' placeholder='Opcional'
                v-model='invoice.office.internalNumber'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-5 columns'>
            <label>
              <span>Municipio</span>

              <input type='text' placeholder='Opcional'
                v-model='invoice.office.district'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-4 columns'>
            <label>
              <span>Estado</span>

              <input type='text' placeholder='Obligatorio'
              v-model='invoice.office.state'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-3 columns'>
            <label>
              <span>Código postal</span>

              <input type='text' placeholder='Opcional'
                v-model='invoice.office.postalCode'>
            </label>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

  import { mapActions } from 'vuex'


  export default {
    name: 'Invoice-registration-form',

    data() {
      return {
        invoice: {}
      }
    },

    created () {
      this.invoice = this.$store.state.invoice
    },

    methods: mapActions ([ 'setInvoice' ]),

    watch: {
      invoice: {
        handler ( invoice ) {
          this.setInvoice( invoice )
        },
        deep: true
      }
    }
  }

</script>
