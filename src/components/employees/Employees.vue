<template>
    <div class="body">
        <h1>Employees</h1>
        <myFilter parent="Employees"></myFilter>
        <myTable
                :headerNames="headerNames"
                :data="paginatedData"
                link="/employees/">
        </myTable>
        <Pagination :page="page" :data="data" @pageChanged="pageChanged"></Pagination>
    </div>
</template>

<script>
import myFilter from '@/components/common/Filter'
import Pagination from '@/components/common/Pagination'
import myTable from '@/components/common/Table'

/**
 * Employees component.
 */
export default {
  components: {myTable, Pagination, myFilter},
  name: 'Employees',
  data () {
    return {
      page: 1
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
        data = Array.from(new Set(data.filter(data => data.data.name.value.toUpperCase()
          .search(this.filterName.toUpperCase()) > -1).concat(data.filter(data => data.data.surname.value.toUpperCase()
          .search(this.filterName.toUpperCase()) > -1))))
      }
      if (this.filterSkill != null && this.filterSkill.length > 0) {
        data = data.filter(data => data.data.skills.values.map(
          (skill) => {
            return skill.name
          }
        ).join(' ').toUpperCase().search(this.filterSkill.toUpperCase()) > -1)
      }
      if (this.filterProject != null && this.filterProject.length > 0) {
        data = data.filter(data => data.data.project.value.toUpperCase()
          .search(this.filterProject.toUpperCase()) > -1)
      }
      if (this.filterDepartment != null && this.filterDepartment.length > 0) {
        data = data.filter(data => data.data.department.value.toUpperCase()
          .search(this.filterDepartment.toUpperCase()) > -1)
      }
      return data
    },
    paginatedData () {
      return this.paginateData(this.data)
    }
  },
  methods: {
    /**
     * Parse the data for the result table.
     * @param objects
     * @returns {*}
     */
    parse (objects) {
      return objects.map(
        (object) => {
          let info = object.info.find(i => i.name === 'Job Details').items
          let project = this.$store.getters['getProjects']
            .find(project => project.id === object.personalData.items
              .find(item => item.name === 'Project').value)
          let position = info.find(item => item.name === 'Position').value
          let department
          if (position === 'Department Manager') {
            department = this.$store.getters['getDepartments'].find(department => department.manager === object.id)
          } else if (project !== undefined) {
            department = this.$store.getters['getDepartments'].find(department => department.id === project.department)
          }
          let skills = object.skills.map(
            (object) => {
              let skill = this.$store.getters['getSkills'].find(skill => skill.id === Number(object.id))
              return {name: skill.personalData.credentials.name, link: '/skills/', id: skill.id}
            })
          return {
            id: object.id,
            data: {
              name: {value: object.personalData.credentials.name, link: true},
              surname: {value: object.personalData.credentials.surname, link: true},
              position: {value: position},
              project: {
                value: project === undefined ? '-' : project.name,
                link: project === undefined ? undefined : '/projects/',
                id: project === undefined ? undefined : project.id
              },
              department: department !== undefined
                ? {value: department.name, link: '/departments/', id: department.id}
                : {value: '-'},
              skills: {values: skills}
            }
          }
        }
      )
    },
    /**
     * Update page in component.
     * @param page
     */
    pageChanged (page) {
      this.page = page
    },
    /**
     * Split the large dataset into 10 record parts.
     * @param data
     * @returns {*}
     */
    paginateData (data) {
      return data.slice((this.page - 1) * 10, this.page * 10)
    }
  }
}
</script>

<style scoped>
</style>
