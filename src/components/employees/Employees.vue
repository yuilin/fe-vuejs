<template>
    <div class="body">
        <h1>Employees</h1>
        <myFilter parent="Employees"></myFilter>
        <myTable :headerNames="headerNames" :data="data" link="/employees/"></myTable>
        <Pagination></Pagination>
    </div>
</template>

<script>
import myFilter from '@/components/common/Filter'
import Pagination from '@/components/common/Pagination'
import myTable from '@/components/common/Table'

export default {
  components: {myTable, Pagination, myFilter},
  name: 'Employees',
  data () {
    return {
      headerNames: Array
    }
  },
  created () {
    this.headerNames = this.$store.getters['getEmployeesHeaderNames']
  },
  computed: {
    filterName () {
      return this.$store.getters['getFilter1']
    },
    filterSkill () {
      return this.$store.getters['getFilter2']
    },
    filterProject () {
      return this.$store.getters['getFilter3']
    },
    filterDepartment () {
      return this.$store.getters['getFilter4']
    },
    data () {
      let data = this.parse(this.$store.getters['getEmployees'])
      if (this.filterName != null && this.filterName.length > 0) {
        data = Array.from(new Set(data.filter(data => data.data.name.value.toUpperCase().search(this.filterName.toUpperCase()) > -1)
          .concat(data.filter(data => data.data.surname.value.toUpperCase().search(this.filterName.toUpperCase()) > -1))))
      }
      if (this.filterSkill != null && this.filterSkill.length > 0) {
        data = data.filter(data => data.data.skills.value.toUpperCase().search(this.filterSkill.toUpperCase()) > -1)
      }
      if (this.filterProject != null && this.filterProject.length > 0) {
        data = data.filter(data => data.data.project.value.toUpperCase().search(this.filterProject.toUpperCase()) > -1)
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
          let info = object.info.find(i => i.name === 'Job Details').items
          let department = this.$store.getters['getDepartments'].find(department => department.id === info.find(item => item.name === 'Department').value)
          let parsed = {
            id: object.id,
            name: object.personalData.credentials.name,
            surname: object.personalData.credentials.surname,
            department: {name: department.name, id: department.id},
            position: info.find(item => item.name === 'Position').value,
            project: this.$store.getters['getProjects'].find(project => project.id === object.personalData.items.find(item => item.name === 'Project').value),
            skills: object.skills.map((object) => {
              let skill = this.$store.getters['getSkills'].find(skill => skill.id === Number(object.id))
              return {name: skill.data.title.value, link: 'skills', id: skill.id}
            })
          }
          return {
            id: parsed.id,
            data: {
              name: {value: parsed.name, link: true},
              surname: {value: parsed.surname, link: true},
              position: {value: parsed.position},
              project: {
                value: parsed.project === undefined ? '-' : parsed.project.name,
                link: parsed.project === undefined ? undefined : 'projects',
                id: parsed.project === undefined ? undefined : parsed.project.id
              },
              department: {value: parsed.department.name, link: 'departments', id: parsed.department.id},
              skills: {values: parsed.skills}
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
