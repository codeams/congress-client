<template lang='html'>
  <div id='person-registration-form'>

    <div class='row'>
      <div class='small-12 columns'>
        <span class='section-title' v-if='registrationType.groupal'>Responsable de grupo</span>
        <span class='section-title' v-else>Datos del registrante</span>
      </div>
    </div>

    <div class='section-content'>

      <div class='registration-form'>
        <div class='row'>
          <div class='select-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('degree') }">
              <span>Título</span>

              <select name='degree' v-model='person.degree'
                v-validate='"required"'
                :class='{ "is-default": !person.degree }'>
                <option value=''>Obligatorio</option>
                <option value='doctor'>Doctor</option>
                <option value='maestro'>Maestro</option>
                <option value='licenciado'>Licenciado</option>
                <option value='ingeniero'>Ingeniero</option>
                <option value='profesor'>Profesor</option>
              </select>
            </label>
          </div>

          <div class='select-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('role') }">
              <span>Tipo de participante</span>

              <select name='role' v-model='person.role' v-validate='"required"'
                :class='{ "is-default": !person.role }'>
                <option value=''>Obligatorio</option>
                <option value='estudiante'>Alumno</option>
                <option value='directivo'>Directivo</option>
                <option value='ponente'>Ponente</option>
                <option value='academico'>Académico</option>
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
          <div class='select-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('contry') }">
              <span>País donde recide</span>
              <select name='country' v-model='person.country'
                v-validate='"required"'
                :class='{ "is-default": !person.country }'>
                <option value=''>Obligatorio</option>
                <option v-for='countryName, countryKey in countriesList'
                  :value='countryKey'>
                  {{ countryName }}
                </option>
              </select>
            </label>
          </div>

          <div :class='{
              "text-field-container": person.country !== "MX",
              "select-field-container": person.country === "MX",
              "small-12 medium-6 columns": true
            }'>
            <label :class="{ 'error' : errors.has('state') }">
              <span>Estado donde reside</span>

              <select name='state' v-model='person.state'
                v-if='person.country === "MX"' v-validate='"required"'
                :class='{ "is-default": !person.state }'>
                <option value=''>Obligatorio</option>
                <option v-for='state in statesList'
                  :value='state'>
                  {{ state }}
                </option>
              </select>

              <input type='text' name='state' v-model='person.state'
                v-if='person.country !== "MX"' v-validate='"required|max:40"'
                placeholder='Obligatorio'>
            </label>
          </div>

          <div class='select-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('gender') }">
              <span>Género</span>

              <select name='gender' v-model='person.gender'
                v-validate='"required|max:40"'
                :class='{ "is-default": !person.gender }'>
                <option value=''>Obligatorio</option>
                <option value='masculino'>Masculino</option>
                <option value='femenino'>Femenino</option>
              </select>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-7 columns'>
            <label :class="{ 'error' : errors.has('institution') }">
              <span>Universidad o Institución</span>

              <select name='institution' v-model='person.institution'
                v-validate='"required"' v-if='!preferences.showInstitutionFieldAsInput'
                :class='{ "is-default": !person.institution }'>
                <option value=''>Obligatorio</option>
                <option v-for='institution in institutionsList'
                  :value='institution.value ? institution.value : institution.name'>
                  {{ institution.name }}
                </option>
              </select>

              <input name='institution' type='text' placeholder='Obligatorio'
                v-validate='"required|max:120"' v-model='person.institution'
                v-if='preferences.showInstitutionFieldAsInput'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-5 columns'>
            <label :class="{ 'error' : errors.has('faculty') }">
              <span>Facultad, campus o plantel</span>

              <input name='faculty' type='text' placeholder='Opcional'
                v-model='person.faculty' v-validate='"max:60"'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-5 columns'>
            <label :class="{ 'error' : errors.has('telephone_number') }">
              <span>Teléfono con lada</span>

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

  import { mapActions, mapGetters } from 'vuex'
  import { capitalize } from '../../utils/filters'

  import countriesList from '@/assets/lists/countries-list'
  import statesList from '../../assets/lists/states-list.json'
  import institutionsList from '../../assets/lists/institutions-list.json'


  export default {
    name: 'Person-registration-form',

    data() {
      return {
        person: {},
        countriesList: countriesList,
        statesList: statesList,
        institutionsList: institutionsList,

        preferences: {
          showInstitutionFieldAsInput: false // This is false by default
            // because the default country is MX and institution does not have
            // a default value.
            // Can't be a computed value since it depends on events (clicking
            // the "other" option) and not just in values.
        }
      }
    },

    computed: {
      namePreview () {
        let degreeShorthand;
        switch (this.person.degree) {
          case 'doctor': degreeShorthand = 'Dr.'; break
          case 'maestro': degreeShorthand = 'Mtro.'; break
          case 'licenciado': degreeShorthand = 'Lic.'; break
          case 'ingeniero': degreeShorthand = 'Ing.'; break
          case 'profesor': degreeShorthand = 'Prof.'; break
          default: degreeShorthand = ''; break
        }

        let isSomeNameDefined =
          this.person.firstName || this.person.lastName || this.person.degree
        return isSomeNameDefined
          ? degreeShorthand + ' ' + this.person.firstName + ' '
            + this.person.lastName
          : ''
      },

      ...mapGetters(['registrationType'])
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
      this.person = this.$store.state.person
    },

    methods: {
      onValidate() {
        this.$validator.validateAll().then(() => {}).catch(() => {})

        if ( this.errors.any() ) {
          bus.$emit( 'errors-changed', this.errors.errors )
        }
      },

      ...mapActions ([ 'setPerson' ]),
    },

    beforeDestroy() {
      bus.$emit( 'errors-changed', [], this.errors.errors )
      bus.$off( 'validate', this.onValidate )
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
      },
      'person.institution' ( institution ) {
        if (this.preferences.showInstitutionFieldAsInput) return

        if (this.person.country === 'MX' && institution !== 'other') {
          this.preferences.showInstitutionFieldAsInput = false
        } else {
          this.preferences.showInstitutionFieldAsInput = true
          if (institution === 'other') this.person.institution = ''
        }
      },
      'person.country' (country) {
        if (country === 'MX' && this.person.institution !== 'other') {
          this.preferences.showInstitutionFieldAsInput = false
        } else {
          this.preferences.showInstitutionFieldAsInput = true
        }
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
