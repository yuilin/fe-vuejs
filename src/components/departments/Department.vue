<template>
    <div class="body">
        <h1>{{selectedDepartment.name}}</h1>
        <myTable :headerNames="headerNames"
                 :data="paginatedData"
                 link="/employees/"
                 :editable="selectedDepartment.manager === user">
        </myTable>
        <Pagination :page="page" :data="data" @pageChanged="pageChanged"></Pagination>
    </div>
</template>

<script>
import myTable from '@/components/common/Table'
import Pagination from '@/components/common/Pagination'

/**
 * Department component.
 */
export default {
  components: {myTable, Pagination},
  name: 'Department',
  data () {
    return {
      page: 1
    }
  },
  created () {
    this.departments = this.$store.getters['getDepartments']
    this.headerNames = this.$store.getters['getDepartmentHeaderNames']
  },
  computed: {
    selectedDepartment () {
      return this.departments
        .find(department => department.id === Number(this.$route.params.id))
    },
    data () {
      return this.parse(this.$store.getters['getEmployees'])
        .filter(employee => employee.department === this.selectedDepartment.id)
    },
    paginatedData () {
      return this.paginateData(this.data)
    },
    user () {
      return this.$store.getters['getId']
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
              let skill = this.$store.getters['getSkills']
                .find(skill => skill.id === Number(object.id))
              return {
                name: skill.personalData.credentials.name,
                link: '/skills/',
                id: skill.id
              }
            })
          if (this.selectedDepartment.manager === this.user) {
            return {
              id: object.id,
              data: {
                name: {value: object.personalData.credentials.name, link: true, editable: false},
                surname: {value: object.personalData.credentials.surname, link: true, editable: false},
                position: {value: position, options: 'positionList'},
                project: {
                  value: project === undefined ? '-' : project.name,
                  link: project === undefined ? undefined : '/projects/',
                  id: project === undefined ? undefined : project.id,
                  options: 'projectList'
                },
                skills: {values: skills},
                actions: this.selectedDepartment.manager === object.id || position === 'Project Manager'
                  ? []
                  : [{value: 'edit', function: 'editDepartmentEmployee'},
                    {value: 'delete', function: 'deleteProjectEmployee'}]
              },
              department: department !== undefined ? department.id : '-'
            }
          } else {
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
                skills: {values: skills}
              },
              department: department !== undefined ? department.id : '-'
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
