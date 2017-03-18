<template lang='html'>
  <div id='group-registration-form'>

    <div class='row align-center'>
      <div class='small-12 columns'>
        <span class='section-title'>Miembros del grupo</span>
      </div>
    </div>

    <div class='section-content'>

      <div class='registration-form'>
        <div class='align-center row'>
          <div v-for='groupMember, index in group'
            class='text-field-container small-12 columns'>
            <label>
              <span>Nombre completo</span>

              <input type='text' v-model='groupMember.name'
                @keyup.enter='addGroupMember()'
                @keyup.delete='deleteGroupMember( $event, index )'
                placeholder='Agregar nuevo miembro'
              >
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
    name: 'Group-registration-form',

    data () {
      return { group: [] }
    },

    created () {
      this.group = this.$store.state.group
    },

    methods: {
      deleteGroupMember ( e, index ) {
        if ( this.group.length > 1 && ! e.target.value )
          this.$store.dispatch( 'deleteGroupMember', index )
      },

      ...mapActions ([
        'setGroup',
        'addGroupMember'
      ]),
    },

    watch: {
      group: {
        handler ( group ) { this.setGroup( group ) },
        deep: true
      },
    },
  }

</script>
