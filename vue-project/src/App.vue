<template>
  <div id="app">
    <b-jumbotron header="Vue JS" >
    </b-jumbotron>
    <div class="header clearfix">
      <nav>
        <ul class="nav nav-pills pull-right">
          <li>
            <button class="panel-primary">
              <router-link to="/">
                Home
              </router-link>
            </button>
          </li>
          <li>
            <button class="panel-primary">
              <router-link to="/InterpolationsAndDirectives">
                Interpolations And Directives
              </router-link>
            </button>
          </li>
          <li>
            <button class="panel-primary">
              <router-link to="/TwoWayBinding">
                Two Way Binding
              </router-link>
            </button>
          </li>
          <li>
            <button class="panel-primary">
              <router-link to="/RegistrationPage">
                Registration Page
              </router-link>
            </button>
          </li>
          <li>
            <button class="panel-primary">
              <router-link to="/DataTable">
                DataTable
              </router-link>
            </button>
          </li>
          <li>
            <button class="panel-primary">
              <router-link to="/RegistrationOperations">
                Registration Operations
              </router-link>
            </button>
          </li>
        </ul>
      </nav>
      <!--<h2 class="text-muted">Vue JS</h2>-->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  var sample = window.project_data
  export default {
    name: 'app',
    project_data: sample
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
