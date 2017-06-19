<template lang='html'>
  <div id='deposit-registration-form'>

    <div class='row align-center'>
      <div class='small-12 columns'>
        <span class='section-title'>Deposito realizado</span>
      </div>
    </div>

    <div class='section-content'>

      <div class='registration-form deposit-details-registration'>
        <div class='first row align-center'>
          <div class='text-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('branch') }">
              <span>Sucursal</span>

              <input name='branch' type='text' v-model='deposit.branch'
                placeholder='Obligatorio' v-validate='"required|max:40"'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('city') }">
              <span>Ciudad</span>

              <input name='city' type='text' v-model='deposit.city'
                placeholder='Obligatorio' v-validate='"required|max:40"'>
            </label>
          </div>
        </div>

        <div class='second row align-center'>
          <div class='text-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('referenceNumber') }">
              <span>No. de referencia</span>

              <input name='referenceNumber' type='number'
                v-model='deposit.referenceNumber' placeholder='Obligatorio'
                v-validate='"required|max:20|numeric"'>
            </label>
          </div>

          <div class='text-field-container small-12 medium-6 columns'>
            <label :class="{ 'error' : errors.has('ammount') }">
              <span>Monto (En pesos mexicanos)</span>

              <input name='ammount' type='number' v-model='deposit.ammount'
                placeholder='Obligatorio'
                v-validate='"required|max:16|decimal:2"'>
            </label>
          </div>
        </div>

        <div class='third row align-center'>
          <div class='select-field-container small-4 medium-3 columns'>
            <label :class="{ 'error' : errors.has('date_year') }">
              <span>Año</span>

              <select name='date_year' v-model='deposit.date.year'
                v-validate='"required"'>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>
            </label>
          </div>

          <div class='select-field-container small-5 medium-3 columns'>
            <label :class="{ 'error' : errors.has('date_month') }">
              <span>Mes</span>

              <select name='date_month' v-model='deposit.date.month'
                v-validate='"required"'>
                <option value='0'>Enero</option>
                <option value='1'>Febrero</option>
                <option value='2'>Marzo</option>
                <option value='3'>Abril</option>
                <option value='4'>Mayo</option>
                <option value='5'>Junio</option>
                <option value='6'>Julio</option>
                <option value='7'>Agosto</option>
                <option value='8'>Septiembre</option>
                <option value='9'>Octubre</option>
                <option value='10'>Noviembre</option>
                <option value='11'>Diciembre</option>
              </select>
            </label>
          </div>

          <div class='select-field-container small-3 medium-2 columns'>
            <label :class="{ 'error' : errors.has('date_day') }">
              <span>Día</span>

              <select name='date_day' v-model='deposit.date.day'
                v-validate='"required"'>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </label>
          </div>

          <div class='text-field-container small-6 medium-2 columns'>
            <label :class="{ 'error' : errors.has('time_hour') }">
              <span>Hora</span>

              <select name='time_hour' v-model='deposit.time.hour'
                v-validate='"required"'>
                <option>00</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
              </select>
            </label>
          </div>

          <div class='text-field-container small-6 medium-2 columns'>
            <label :class="{ 'error' : errors.has('time_minute') }">
              <span>Minuto</span>

              <select name='time_minute' v-model='deposit.time.minute'
                v-validate='"required"'>
                <option>00</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
                <option>46</option>
                <option>47</option>
                <option>48</option>
                <option>49</option>
                <option>50</option>
                <option>51</option>
                <option>52</option>
                <option>53</option>
                <option>54</option>
                <option>55</option>
                <option>56</option>
                <option>57</option>
                <option>58</option>
                <option>59</option>
                <option>60</option>
              </select>
            </label>
          </div>
        </div>
      </div>

    </div>

    <div v-if='person.role === "ponente"' class='row align-center'>
      <div class='small-12 columns'>
        <span class='section-title'>Adjuntos</span>
      </div>
    </div>

    <div v-if='person.role === "ponente"' class='section-content'>

      <div class='registration-form deposit-details-registration'>
        <div class='first row align-center'>
           <div class='text-field-container big-12 columns'>
            <label :class="{ 'error' : errors.has('ticket-photo') }">
              <span>Fotografía del ticket</span>

              <image-picker v-validate='person.role === "ponente" ? "required" : ""' data-vv-name='ticket-photo' data-vv-value-path='value' v-model='deposit.ticketPhoto'></image-picker>
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

  import ImagePicker from '@/components/Image-picker'

  export default {
    name: 'Deposit-registration-form',

    data () {
      return {
        deposit: {},
        person: {}
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
      this.deposit = this.$store.state.deposit
      this.person = this.$store.state.person
    },

    methods: {
      onValidate() {
        this.$validator.validateAll().then(() => {}).catch(() => {})

        if ( this.errors.any() ) {
          bus.$emit( 'errors-changed', this.errors.errors )
        }
      },

      ...mapActions ([ 'setDeposit' ])
    },

    beforeDestroy() {
      bus.$emit( 'errors-changed', [], this.errors.errors )
      bus.$off( 'validate', this.onValidate )
    },

    watch: {
      deposit (newValue) {
        this.setDeposit( newValue )
      }
    },

    components: {
      ImagePicker
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
