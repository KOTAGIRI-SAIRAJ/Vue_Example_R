<template>
  <div>
    <div class="container">
      <br/>
      <b-card-group deck>
        <b-card header="Two-Way-Binding"
                header-tag="header"
                footer-tag="footer"
                title="The below message will change accordingly when we change the text in the text box">
          <p class="card-text">{{ msg }}</p>
          <input type="text" v-model="msg">
          <br/><br/>
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
        msg: 'Welcome To Vue Js'
      }
    }
  }
</script>
