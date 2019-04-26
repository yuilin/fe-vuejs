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
    },
    employees () {
      return this.$store.getters['getEmployees']
    }
  },
  methods: {
    parse (objects) {
      return objects.map(
        (object) => {
          let manager = this.$store.getters['getEmployees']
            .find(employee => employee.id === object.manager)
          return {
            id: object.id,
            data: {
              name: {value: object.name, link: true},
              manager: {
                value: Object.values(manager.personalData.credentials).join(' '),
                link: '/employees/',
                id: manager.id
              },
              employees: {
                value: this.employees.filter(employee => employee.personalData.items
                  .find(item => item.name === 'Project' && Array.from(this.$store.getters['getProjects']
                    .filter(project => project.department === object.id).map(
                      (project) => {
                        return project.id
                      }
                    )).includes(item.value))).length + this.$store.getters['getDepartments']
                  .filter(department => department.id === object.id && department.manager > 0).length
              }
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
