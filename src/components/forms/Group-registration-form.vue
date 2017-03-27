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
            <label :class="{ 'error' : errors.has('groupMember-' + index) }">
              <span>Nombre completo</span>

              <input type='text' v-model='groupMember.name'
                @keyup.enter='
                  addGroupMember();
                  focusLastInput()
                '
                @keyup.delete='
                  deleteGroupMember( $event, index );
                  focusLastInput()
                '
                :id='"groupMember-" + index'
                :name='"groupMember-" + index'
                v-validate='"min:3|max:60"'
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

  import { find, propEq } from 'ramda'
  import bus from '../../utils/bus'

  import Vue from 'vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Group-registration-form',

    data () {
      return { group: [] }
    },

    computed: mapGetters ([ 'registrationType' ]),

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
      this.group = this.$store.state.group
    },

    methods: {
      onValidate() {
        this.$validator.validateAll().then(() => {}).catch(() => {})

        if ( this.errors.any() ) {
          bus.$emit( 'errors-changed', this.errors.errors )
        }
      },

      deleteGroupMember ( e, index ) {
        if ( this.group.length > 1 && ! e.target.value )
          this.$store.dispatch( 'deleteGroupMember', index )
      },

      focusLastInput () {
        Vue.nextTick(() => {
          let lastGroupMemberInputId = "groupMember-" + (this.group.length-1)
          document.getElementById( lastGroupMemberInputId ).focus()
        })
      },

      ...mapActions ([
        'setGroup',
        'addGroupMember'
      ]),
    },

    beforeDestroy() {
      bus.$emit( 'errors-changed', [], this.errors.errors )
      bus.$off( 'validate', this.onValidate )
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
