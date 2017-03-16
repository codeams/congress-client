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
            <label>
              <span>Grado</span>

              <select v-model='person.degree'>
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
            <label>
              <span>Tipo de participante</span>

              <select v-model='person.role'>
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
            <label>
              <span>Nombre(s)</span>

              <input type='text' placeholder='Obligatorio' v-model='person.firstName'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-6 columns'>
            <label>
              <span>Apellidos</span>

              <input type='text' placeholder='Obligatorio' v-model='person.lastName'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 columns'>
            <label>
              <span>Así se imprimirá tu nombre</span>

              <input type='text' disabled='disabled'
                placeholder='Completado automáticamente'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-7 columns'>
            <label>
              <span>Universidad / Institución</span>

              <select v-model='person.institution'>
                <option value=''>Obligatorio</option>
              </select>
            </label>
          </div>

          <div class='text-field-container small-12 medium-5 columns'>
            <label>
              <span>Facultad</span>

              <input type='text' placeholder='Opcional' v-model='person.faculty'>
            </label>
          </div>
        </div>

        <div class='row'>
          <div class='text-field-container small-12 medium-5 columns'>
            <label>
              <span>Teléfono</span>

              <input type='number' placeholder='Obligatorio'
                v-model='person.telephone.number'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-2 columns'>
            <label>
              <span>Extensión</span>

              <input type='number' placeholder='Opcional'
                v-model='person.telephone.extension'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-5 columns'>
            <label>
              <span>Correo electrónico</span>

              <input type='text' placeholder='Obligatorio' v-model='person.email'>
            </label>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>

  import { mapGetters, mapActions } from 'vuex'


  export default {
    name: 'Person-registration-form',
    data() {
      return {
        person: {
          degree: '',
          role: '',
          firstName: '',
          lastName: '',
          institution: '',
          faculty: '',
          telephone: {
            number: '',
            extension: ''
          },
          email: ''
        }
      }
    },
    computed: mapGetters (['person']),
    methods: mapActions (['setPerson']),
    watch: {
      person: {
        handler( person ) { this.setPerson( person ) },
        deep: true
      }
    }
  }

</script>
