<template>
  <div id='section-navigation'>
    <div class='navigation align-center row'>
      <div class='small-12 large-6 columns-collapsed'>
        <span class='congress-title'>
          Registro al <strong>CONISFOT</strong>
        </span>
      </div>

      <div class='small-12 large-6 columns-collapsed'>

        <span class='previous section instructions'></span>
        <span class='previous section prices'></span>
        <span class='current section registration'></span>
        <span class='forward section validation'></span>
        <span class='forward section voucher-submission'></span>

      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'navigation',
    data () {
      return {}
    }
  }
</script>


<style lang='scss'>

  .navigation {
    margin-bottom: 60px;
    text-align: center;
  }

  .navigation .section {
    display:inline-block;
    width: 40px;
    height: 40px;
    margin: 0 5px;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    background-position: center center;
    border-radius: 50%;

    transition: transform 140ms ease-out, background-color 140ms ease-out;
  }

  .section.previous {
    background-color: #00234E;
    cursor: pointer;
  }

  .section.current {
    background-color: #005ccc;
    transform: scale( 1.2 );
  }

  .section.previous:hover {
    transform: scale( 1.1 );
  }

  .section.forward {
    background-color: #CCC;
  }

  .section.instructions {
    background-image: url( '../assets/icons/instructions.svg' );
  }

  .section.prices {
    background-image: url( '../assets/icons/prices.svg' );
  }

  .section.registration {
    background-image: url( '../assets/icons/registration.svg' );
  }

  .section.validation {
    background-image: url( '../assets/icons/validation.svg' );
  }

  .section.voucher-submission {
    background-image: url( '../assets/icons/voucher-submission.svg' );
  }

  .navigation .congress-title {
    display: block;
    font-size: 1.7em;
    line-height: 40px;
    color: #00234E;
    cursor: default;
  }

  .navigation .congress-title strong {
    font-weight: normal;
    color: #005CCC;
  }


  /* Small only */
  @media #{$small-only} {
    .navigation .congress-title {
      margin-bottom: 10px;
    }
  }

  /* Medium only */
  @media #{$medium-only} {
    .navigation .congress-title {
      margin-bottom: 10px;
    }
  }

</style>
