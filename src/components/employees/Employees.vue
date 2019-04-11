<template>
    <div class="employees">
        <h1>Employees</h1>
        <myFilter parent="Employees"></myFilter>
        <myTable :headerNames="headerNames" :data="data" link="/employees/" type="Employee"></myTable>
        <Pagination></Pagination>
    </div>
</template>

<script>
import myFilter from '@/components/common/Filter'
import Pagination from '@/components/common/Pagination'
import myTable from '@/components/common/Table'

export default {
  components: {myTable, Pagination, myFilter},
  data () {
    return {
      employees: [],
      headerNames: Array,
      filteredEmployeesSearchData: [],
      data: []
    }
  },
  created () {
    this.employees = this.$store.getters['getEmployees']
    this.headerNames = this.$store.getters['getEmployeesHeaderNames']
    this.data = this.parse(this.employees)
    this.filteredEmployeesSearchData = this.data.filter(data => data.data.name.value === 'John')
  },
  methods: {
    parse (objects) {
      return objects.map(function (object) {
        let parsed = {
          id: object.id,
          name: object.personalData.credentials.name,
          surname: object.personalData.credentials.surname,
          info: object.info.find(i => i.name === 'Job Details').items.map(function (object) {
            return {
              position: object.find(o => o.name === 'Position').value,
              department: object.find(o => o.name === 'Department').value
            }
          })[0],
          project: object.personalData.items.find(item => item.name === 'Project').value,
          skills: object.skills.map(function (object) {
            return object.data.skill.value
          }).join(' ')
        }
        return {
          id: parsed.id,
          data: {
            name: {value: parsed.name},
            surname: {value: parsed.surname},
            position: {value: parsed.info.position},
            department: {value: parsed.info.department},
            project: {value: parsed.project},
            skills: {value: parsed.skills}
          }
        }
      })
    }
  }
}
</script>

<style scoped>
    .employees {
        margin: 50px;
    }

    @media screen and (max-width: 1200px) {
        .employees {
            margin: 40px 0 0 0;
        }
    }
</style>
