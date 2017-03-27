<template lang='html'>
  <div id='person-registration-form'>

    <div class='row'>
      <div class='small-12 columns'>
        <span class='section-title'>Responsable de grupo</span>
      </div>
    </div>

    <div class='section-content'>

      <div class='registration-form'>
        <div class='row'>
          <div class='select-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('degree') }">
              <span>Grado</span>

              <select name='degree' v-model='person.degree'
                v-validate='"required"'
                :class='{ "is-default": !person.degree }'>
                <option value=''>Obligatorio</option>
                <option value='Dr.'>Doctor</option>
                <option value='Mtro.'>Maestro</option>
                <option value='Lic.'>Licenciado</option>
                <option value='Ing.'>Ingeniero</option>
                <option value='Prof.'>Profesor</option>
              </select>
            </label>
          </div>

          <div class='select-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('role') }">
              <span>Tipo de participante</span>

              <select name='role' v-model='person.role' v-validate='"required"'
                :class='{ "is-default": !person.role }'>
                <option value=''>Obligatorio</option>
                <option value='student'>Alumno</option>
                <option value='manager'>Directivo</option>
                <option value='speaker'>Ponente</option>
                <option value='academic'>Académico</option>
              </select>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('firstName') }">
              <span>Nombre(s)</span>

              <input name='firstName' type='text' placeholder='Obligatorio'
                v-model='person.firstName' v-validate='"required|min:3|max:30"'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('lastName') }">
              <span>Apellidos</span>

              <input name='lastName' type='text'
                placeholder='Obligatorio' v-model='person.lastName'
                v-validate='"required|min:3|max:30"'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 columns'>
            <label>
              <span>Así se imprimirá tu nombre</span>

              <input type='text' :value='namePreview'
                disabled='disabled' placeholder='Completado automáticamente'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-7 columns'>
            <label :class="{ 'error' : errors.has('institution') }">
              <span>Universidad / Institución</span>

              <select name='institution' v-model='person.institution'
                v-validate='"required"'
                :class='{ "is-default": !person.institution }'>
                <option value=''>Obligatorio</option>
                <option v-for='institution in institutionsList'
                  :value='institution.name'>
                  {{ institution.name }}
                </option>
              </select>
            </label>
          </div>

          <div class='text-field-container small-12 medium-5 columns'>
            <label :class="{ 'error' : errors.has('faculty') }">
              <span>Facultad</span>

              <input name='faculty' type='text' placeholder='Opcional'
                v-model='person.faculty' v-validate='"max:60"'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-5 columns'>
            <label :class="{ 'error' : errors.has('telephone_number') }">
              <span>Teléfono</span>

              <input name='telephone_number' type='number'
                placeholder='Obligatorio' v-model='person.telephone.number'
                v-validate='"required|digits:10"'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-2 columns'>
            <label :class="{ 'error' : errors.has('telephone_extension') }">
              <span>Extensión</span>

              <input name='telephone_extension' type='number'
                placeholder='Opcional' v-model='person.telephone.extension'
                v-validate='"max:10"'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-5 columns'>
            <label :class="{ 'error' : errors.has('email') }">
              <span>Correo electrónico</span>

              <input name='email' type='text' placeholder='Obligatorio'
                v-validate='"required|email"' v-model='person.email'>
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
  import { capitalize } from '../../utils/filters'

  import institutionsList from '../../assets/lists/institutions-list.json'


  export default {
    name: 'Person-registration-form',

    data() {
      return {
        person: {},
        institutionsList: institutionsList,
      }
    },

    computed: {
      namePreview () {
        let isSomeNameDefined =
          this.person.firstName || this.person.lastName || this.person.degree
        return isSomeNameDefined
          ? this.person.degree + ' ' + this.person.firstName + ' '
            + this.person.lastName
          : ''
      }
    },

    mounted() {

      bus.$on( 'validate', this.onValidate )

      this.$watch(() => this.errors.errors, (newValue, oldValue) => {
        const newErrors = newValue.filter(error =>
          find(propEq('field', error.field))(oldValue) === undefined
        )
        const oldErrors = oldValue.filter(error =>
          find(propEq('field', error.field))(newValue) === undefined
        )
        bus.$emit('errors-changed', newErrors, oldErrors)
      })

    },

    created () {
      this.person = this.$store.state.person
    },

    methods: {
      onValidate() {

        this.$validator.validateAll().then(() => {

        }).catch(() => {

        })

        if ( this.errors.any() ) {
          bus.$emit( 'errors-changed', this.errors.errors )
        }
      },

      ...mapActions ([ 'setPerson' ]),
    },

    beforeDestroy() {
      bus.$emit('errors-changed', [], this.errors.errors)
      bus.$off('validate', this.onValidate)
    },

    watch: {
      person: {
        handler ( person ) {
          this.setPerson( person )
        },
        deep: true
      },
      'person.firstName' ( firstName ) {
        this.person.firstName = capitalize( firstName )
      },
      'person.lastName' ( lastName ) {
        this.person.lastName = capitalize( lastName )
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
