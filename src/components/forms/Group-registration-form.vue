<template lang='html'>
  <div id='group-registration-form' v-if='registrationType.groupal'>

    <div class='row align-center'>
      <div class='small-12 columns'>
        <span class='section-title'>Miembros del grupo</span>
      </div>
    </div>

    <div class='section-content'>

      <div class='registration-form'>
        <div class='align-center row-collapsed'>
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

  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Group-registration-form',

    data () {
      return { group: [] }
    },

    computed: mapGetters ([ 'registrationType' ]),

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


<style lang='scss' scoped>

  #group-registration-form {

    .text-field-container:last-of-type {
      position: relative;
      padding-bottom: 20px;

      input[type="text"] {
        margin-bottom: 0;
      }

      &::before {
        content: 'Presiona enter para agregar un nuevo miembro.';
        position: absolute;
        bottom: 0px;
        left: 25px;
        line-height: 20px;
        color: $secondary-color;
        opacity: 0.7;
      }
    }
  }

</style>
