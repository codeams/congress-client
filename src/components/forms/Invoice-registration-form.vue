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
            <label :class="{ 'error' : errors.has('rfc') }">
              <span>R.F.C.</span>

              <input name='rfc' type='text' placeholder='Obligatorio'
                v-model='invoice.rfc' v-validate='"required|min:10|max:30"'>
            </label>
          </div>

          <div class='select-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('businessName') }">
              <span>Razón social</span>

              <input name='businessName' type='text' placeholder='Obligatorio'
                v-model='invoice.businessName' v-validate='"required|max:40"'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('office_street') }">
              <span>Calle</span>

              <input name='office_street' type='text' placeholder='Obligatorio'
                v-model='invoice.office.street' v-validate='"required|max:20"'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('office_neighborhood') }">
              <span>Colonia</span>

              <input name='office_neighborhood' type='text'
                placeholder='Obligatorio' v-model='invoice.office.neighborhood'
                v-validate='"required|max:40"'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-7 columns'>
            <label :class="{ 'error' : errors.has('office_externalNumber') }">
              <span>Número exterior</span>

              <input name='office_externalNumber' type='text'
                placeholder='Obligatorio' v-validate='"required|max:20"'
                v-model='invoice.office.externalNumber'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-5 columns'>
            <label :class="{ 'error' : errors.has('office_internalNumber') }">
              <span>Número interior</span>

              <input name='office_internalNumber' type='text'
                placeholder='Opcional' v-model='invoice.office.internalNumber'
                v-validate='"max:20"'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-5 columns'>
            <label :class="{ 'error' : errors.has('office_district') }">
              <span>Municipio / Delegación</span>

              <input name='office_district' type='text'
                placeholder='Obligatorio' v-model='invoice.office.district'
                v-validate='"required|max:40"'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-4 columns'>
            <label :class="{ 'error' : errors.has('office_state') }">
              <span>Estado</span>

              <select name='office_state' v-model='invoice.office.state'
                v-validate='"required|max:40"'
                :class='{ "is-default": !invoice.office.state }'>
                <option value=''>Obligatorio</option>
                <option v-for='state in statesList'
                  :value='state'>
                  {{ state }}
                </option>
              </select>
            </label>
          </div>

          <div class='text-field-container small-12 medium-3 columns'>
            <label :class="{ 'error' : errors.has('office_postalCode') }">
              <span>Código postal</span>

              <input name='office_postalCode' type='text'
                placeholder='Obligatorio' v-model='invoice.office.postalCode'
                v-validate='"required|digits:5"'>
            </label>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

  import { find, propEq } from 'ramda'
  import bus from '../../utils/bus'

  import { mapActions } from 'vuex'

  import statesList from '../../assets/lists/states-list.json'


  export default {
    name: 'Invoice-registration-form',

    data() {
      return {
        invoice: {},
        statesList: statesList
      }
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
      this.invoice = this.$store.state.invoice
    },

    methods: {
      onValidate() {
        this.$validator.validateAll().then(() => {}).catch(() => {})

        if ( this.errors.any() ) {
          bus.$emit( 'errors-changed', this.errors.errors )
        }
      },

      ...mapActions ([ 'setInvoice' ]),
    },


    beforeDestroy() {
      bus.$emit( 'errors-changed', [], this.errors.errors )
      bus.$off( 'validate', this.onValidate )
    },

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


<style lang='scss' scoped>

  .error {
    input,
    select {
      border-color: red !important;
    }

    span {
      color: red !important;
    }
  }

</style>
