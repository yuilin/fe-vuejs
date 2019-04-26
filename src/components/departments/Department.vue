<template>
    <div class="body">
        <h1>{{selectedDepartment.name}}</h1>
        <myTable :headerNames="headerNames"
                 :data="data"
                 link="/employees/"
                 :editable="selectedDepartment.manager === user">
        </myTable>
    </div>
</template>

<script>
import myTable from '@/components/common/Table'

export default {
  components: {myTable},
  name: 'Department',
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
    user () {
      return this.$store.getters['getId']
    }
  },
  methods: {
    parse (objects) {
      return objects.map(
        (object) => {
          let info = object.info
            .find(i => i.name === 'Job Details').items
          let department = this.$store.getters['getDepartments']
            .find(department => department.id === info
              .find(item => item.name === 'Department').value)
          let parsed = {
            id: object.id,
            name: object.personalData.credentials.name,
            surname: object.personalData.credentials.surname,
            position: info
              .find(item => item.name === 'Position').value,
            project: this.$store.getters['getProjects']
              .find(project => project.id === object.personalData.items
                .find(item => item.name === 'Project').value),
            skills: object.skills.map(
              (object) => {
                let skill = this.$store.getters['getSkills']
                  .find(skill => skill.id === Number(object.id))
                return {
                  name: skill.personalData.credentials.name,
                  link: '/skills/',
                  id: skill.id
                }
              })
          }
          if (this.selectedDepartment.manager === this.user) {
            return {
              id: parsed.id,
              data: {
                name: {value: parsed.name, link: true, editable: false},
                surname: {value: parsed.surname, link: true, editable: false},
                position: {value: parsed.position, options: 'positionList'},
                project: {
                  value: parsed.project === undefined ? '-' : parsed.project.name,
                  link: parsed.project === undefined ? undefined : '/projects/',
                  id: parsed.project === undefined ? undefined : parsed.project.id,
                  options: 'projectList'
                },
                skills: {values: parsed.skills},
                actions: this.selectedDepartment.manager === parsed.id || parsed.position === 'Project Manager'
                  ? []
                  : [{value: 'edit', function: 'editDepartmentEmployee'},
                    {value: 'delete', function: 'deleteDepartmentEmployee'}]
              },
              department: department !== undefined ? department.id : '-'
            }
          } else {
            return {
              id: parsed.id,
              data: {
                name: {value: parsed.name, link: true},
                surname: {value: parsed.surname, link: true},
                position: {value: parsed.position},
                project: {
                  value: parsed.project === undefined ? '-' : parsed.project.name,
                  link: parsed.project === undefined ? undefined : '/projects/',
                  id: parsed.project === undefined ? undefined : parsed.project.id
                },
                skills: {values: parsed.skills}
              },
              department: department !== undefined ? department.id : '-'
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
