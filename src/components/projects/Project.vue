<template>
    <div class="body">
        <h1>{{selectedProject.name}}</h1>
        <myTable :headerNames="headerNames" :data="data" link="/employees/"
                 :editable="selectedProject.manager === user"></myTable>
    </div>
</template>

<script>
import myTable from '@/components/common/Table'

export default {
  components: {myTable},
  name: 'Project',
  created () {
    this.projects = this.$store.getters['getProjects']
    this.headerNames = this.$store.getters['getProjectHeaderNames']
  },
  computed: {
    selectedProject () {
      return this.projects.find(project => project.id === Number(this.$route.params.id))
    },
    data () {
      return this.parse(this.$store.getters['getEmployees']).filter(employee => employee.project === this.selectedProject.id)
    },
    user () {
      return this.$store.getters['getId']
    }
  },
  methods: {
    parse (objects) {
      return objects.map(
        (object) => {
          let info = object.info.find(i => i.name === 'Job Details').items
          let parsed = {
            id: object.id,
            name: object.personalData.credentials.name,
            surname: object.personalData.credentials.surname,
            position: info.find(item => item.name === 'Position').value,
            project: this.$store.getters['getProjects'].find(project => project.id === object.personalData.items.find(item => item.name === 'Project').value),
            skills: object.skills.map((object) => {
              let skill = this.$store.getters['getSkills'].find(skill => skill.id === Number(object.id))
              return {name: skill.personalData.credentials.name, link: '/skills/', id: skill.id}
            })
          }
          if (this.selectedProject.manager === this.user) {
            return {
              id: parsed.id,
              data: {
                name: {value: parsed.name, link: true, editable: false},
                surname: {value: parsed.surname, link: true, editable: false},
                position: {value: parsed.position, options: 'projectPositionList'},
                skills: {values: parsed.skills},
                actions: this.selectedProject.manager === parsed.id ? [] : [{value: 'edit', function: 'editProjectEmployee'}, {value: 'delete', function: 'deleteProjectEmployee'}]
              },
              project: parsed.project === undefined ? undefined : parsed.project.id
            }
          } else {
            return {
              id: parsed.id,
              data: {
                name: {value: parsed.name, link: true},
                surname: {value: parsed.surname, link: true},
                position: {value: parsed.position},
                skills: {values: parsed.skills}
              },
              project: parsed.project === undefined ? undefined : parsed.project.id
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
