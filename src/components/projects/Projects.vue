<template>
    <div class="body">
        <h1>Projects</h1>
        <myFilter parent="Projects"></myFilter>
        <myTable :headerNames="headerNames" :data="data" link="/projects/"></myTable>
        <Pagination></Pagination>
    </div>
</template>

<script>
import myFilter from '@/components/common/Filter'
import Pagination from '@/components/common/Pagination'
import myTable from '@/components/common/Table'

export default {
  components: {myTable, Pagination, myFilter},
  name: 'Projects',
  data () {
    return {
      headerNames: Array
    }
  },
  created () {
    this.headerNames = this.$store.getters['getProjectsHeaderNames']
  },
  computed: {
    filterName () {
      return this.$store.getters['getFilter11']
    },
    filterManager () {
      return this.$store.getters['getFilter12']
    },
    filterDepartment () {
      return this.$store.getters['getFilter13']
    },
    data () {
      let data = this.parse(this.$store.getters['getProjects'])
      if (this.filterName != null && this.filterName.length > 0) {
        data = data.filter(data => data.data.name.value.toUpperCase().search(this.filterName.toUpperCase()) > -1)
      }
      if (this.filterManager != null && this.filterManager.length > 0) {
        data = data.filter(data => data.data.manager.value.toUpperCase().search(this.filterManager.toUpperCase()) > -1)
      }
      if (this.filterDepartment != null && this.filterDepartment.length > 0) {
        data = data.filter(data => data.data.department.value.toUpperCase().search(this.filterDepartment.toUpperCase()) > -1)
      }
      return data
    }
  },
  methods: {
    parse (objects) {
      return objects.map(
        (object) => {
          let employee = this.$store.getters['getEmployees'].find(employee => employee.id === object.manager)
          let departments = this.$store.getters['getDepartments'].find(department => department.id === object.department)
          return {
            id: object.id,
            data: {
              name: {value: object.name, link: true},
              manager: {
                value: Object.values(employee.personalData.credentials).join(' '),
                link: 'employees',
                id: employee.id
              },
              department: {value: departments.name, link: 'departments', id: departments.id},
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
