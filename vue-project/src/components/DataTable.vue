<template>
  <div class="datatable">
    <h1>Registered Users</h1>
    <div class="container">
      <vue-bootstrap-table
        :columns="columns"
        :values="r_values"
        :show-filter="true"
        :sortable="true"
        :paginated="true"
        :multi-column-sortable=true
        :filter-case-sensitive=false
      >
      </vue-bootstrap-table>
    </div>

    <h1>Registered Users</h1>
    <div class="container">
      <vue-bootstrap-table
        :columns="columns"
        :values="ur_values"
        :show-filter="true"
        :sortable="true"
        :paginated="true"
        :multi-column-sortable=true
        :filter-case-sensitive=false
      >
      </vue-bootstrap-table>
    </div>
  </div>
</template>

<script>
  import VueBootstrapTable from '../../node_modules/vue2-bootstrap-table2'
  export default {
    name: 'datatable',
    components: {
      VueBootstrapTable: VueBootstrapTable
    },
    data () {
      return {
        columns: [
          {
            title: 'id'
          },
          {
            title: 'name',
            visible: true,
            editable: true
          },
          {
            title: 'age',
            visible: true,
            editable: true
          },
          {
            title: 'country',
            visible: true,
            editable: true
          }
        ],
        r_values: [
          {
            'id': 1,
            'name': 'John',
            'country': 'UK',
            'age': 25
          },
          {
            'id': 2,
            'name': 'Mary',
            'country': 'France',
            'age': 30
          },
          {
            'id': 3,
            'name': 'Ana',
            'country': 'Portugal',
            'age': 20
          }
        ],
        ur_values: [
          {
            'id': 11,
            'name': 'John Candy',
            'country': 'US',
            'age': 20
          },
          {
            'id': 12,
            'name': 'Mary Candy',
            'country': 'London',
            'age': 23
          },
          {
            'id': 13,
            'name': 'Ana Candy',
            'country': 'SwitzerLand',
            'age': 24
          }
        ]

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
