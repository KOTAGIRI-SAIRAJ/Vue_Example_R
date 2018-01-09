<template>
  <div class="registration">
    <div class="container">
      <hr />
      <div class="row card">
        <div class="col-md-12 card-block">
          <h1 class="card-title">Registration page</h1>
          <hr />
          <form id="myForm" @submit.prevent="donarRegistration()">
            <div class="row">
              <div class="col-md-10">
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label ">First Name</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control " placeholder="First Name" v-model="registered_donar_data.firstName">
                  </div>
                  <label class="col-sm-2 col-form-label ">Last Name</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control " placeholder="Last Name" v-model="registered_donar_data.lastName">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label ">Country</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control " placeholder="Country" v-model="registered_donar_data.country">
                  </div>
                  <label class="col-sm-2 col-form-label ">Age</label>
                  <div class="col-sm-4">
                    <input type="number" class="form-control " placeholder="Age" v-model="registered_donar_data.age">
                  </div>
                </div>
              </div>
            </div>
            <br>
            <br>
            <h2 class="card-title"> Personal Details</h2>
            <hr />
            <div class="row">
              <div class="col-md-10">
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ">Email</label>
                  <div class="col-sm-6">
                    <input type="email" class="form-control " placeholder="Email-Id" v-model="registered_donar_data.p_emial">
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label ">Contact</label>
                  <div class="col-sm-6">
                    <input type="number" class="form-control " placeholder="Phone Number" v-model="registered_donar_data.p_phone">
                  </div>
                </div>
              </div>
            </div>
            <br><br>
            <div>
              <router-link to="/RegistrationOperations">
                <button type="submit" class="btn btn-success btn-lg" >
                  Register
                </button>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RegistrationPage',
    data () {
      return {
        registered_donar_data: {
          Id: '',
          firstName: '',
          lastName: '',
          country: '',
          age: '',
          p_emial: '',
          p_phone: ''
        }
      }
    },
    methods: {
      donarRegistration: function () {
        console.log(this.registered_donar_data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
