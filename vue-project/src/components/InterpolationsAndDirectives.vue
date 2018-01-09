<template>
  <div>
    <div class="container">
      <br/>
      <b-card-group deck>
        <b-card header="Interpolations"
                header-tag="header"
                footer-tag="footer"
                title="The below message is kept in double curlybraces -- One way binding, and the variable name Should be declared in the Instance">
          <p class="card-text">{{ msg }}</p>
        </b-card>
      </b-card-group>
      <br/>
      <b-card-group deck>
        <b-card header="Directives"
                header-tag="header"
                footer-tag="footer"
                title="Diretives are the Special attributes which start with the 'v-' prefix">
          <p class="card-text">{{ directiveExample }}</p>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InterpolationsAndDirectives',
    data () {
      return {
        msg: 'Welcome To Vue Js',
        curlybraces: '{{ }}',
        directiveExample: '<p v-if="seen">Now you see me</p>'
      }
    }
  }
</script>
