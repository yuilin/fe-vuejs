<template>
    <div class="body">
        <h1>Departments</h1>
        <myFilter parent="Departments"></myFilter>
        <myTable :headerNames="headerNames" :data="data" link="/departments/"></myTable>
        <Pagination></Pagination>
    </div>
</template>

<script>
import myFilter from '@/components/common/Filter'
import Pagination from '@/components/common/Pagination'
import myTable from '@/components/common/Table'

export default {
  components: {myTable, Pagination, myFilter},
  name: 'Departments',
  data () {
    return {
      headerNames: Array
    }
  },
  created () {
    this.headerNames = this.$store.getters['getDepartmentsHeaderNames']
  },
  computed: {
    filterName () {
      return this.$store.getters['getFilter9']
    },
    filterManager () {
      return this.$store.getters['getFilter10']
    },
    data () {
      let data = this.parse(this.$store.getters['getDepartments'])
      if (this.filterName != null && this.filterName.length > 0) {
        data = data.filter(data => data.data.name.value.toUpperCase().search(this.filterName.toUpperCase()) > -1)
      }
      if (this.filterManager != null && this.filterManager.length > 0) {
        data = data.filter(data => data.data.manager.value.toUpperCase().search(this.filterManager.toUpperCase()) > -1)
      }
      return data
    }
  },
  methods: {
    parse (objects) {
      return objects.map(
        (object) => {
          let employee = this.$store.getters['getEmployees'].find(employee => employee.id === object.manager)
          return {
            id: object.id,
            data: {
              name: {value: object.name, link: true},
              manager: {
                value: Object.values(employee.personalData.credentials).join(' '),
                link: 'employees',
                id: employee.id
              },
              employees: {value: '0'}
            }
          }
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
