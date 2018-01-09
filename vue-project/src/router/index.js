import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import RegistrationPage from '../components/RegistrationPage.vue'
import DataTable from '../components/DataTable.vue'
import RegistrationOperations from '../components/RegitsterOperations.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/RegistrationPage',
      name: 'RegistrationPage',
      component: RegistrationPage
    },
    {
      path: '/DataTable',
      name: 'DataTable',
      component: DataTable
    },
    {
      path: '/RegistrationOperations',
      name: 'RegistrationOperations',
      component: RegistrationOperations
    }
  ]
})
