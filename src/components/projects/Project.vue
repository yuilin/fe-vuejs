<template>
    <div class="body">
        <h1>{{selectedProject.name}}</h1>
        <myFilter v-if="userHasRights" parent="Project" @changed="getSwitchValue"></myFilter>
        <myTable :headerNames="headerNames"
                 :data="data" link="/employees/"
                 :editable="selectedProject.manager === user">
        </myTable>
    </div>
</template>

<script>
import myTable from '@/components/common/Table'
import myFilter from '@/components/common/Filter'

export default {
  components: {myTable, myFilter},
  name: 'Project',
  data () {
    return {
      showModal: false,
      isSwitched: false
    }
  },
  created () {
    this.projects = this.$store.getters['getProjects']
    this.headerNames = this.$store.getters['getProjectHeaderNames']
  },
  computed: {
    selectedProject () {
      return this.projects.find(project => project.id === Number(this.$route.params.id))
    },
    filterName () {
      return this.$store.getters['getFilter14']
    },
    filterPosition () {
      return this.$store.getters['getFilter15']
    },
    filterSkill () {
      return this.$store.getters['getFilter16']
    },
    data () {
      let data
      if (this.isSwitched) {
        data = this.parse(this.$store.getters['getEmployees'])
          .filter(employee => employee.project === undefined && employee.data.position.value !== 'Department Manager')
      } else {
        data = this.parse(this.$store.getters['getEmployees'])
          .filter(employee => employee.project === this.selectedProject.id)
      }
      if (this.filterName != null && this.filterName.length > 0) {
        data = Array.from(new Set(data.filter(data => data.data.name.value.toUpperCase()
          .search(this.filterName.toUpperCase()) > -1).concat(data.filter(data => data.data.surname.value.toUpperCase()
          .search(this.filterName.toUpperCase()) > -1))))
      }
      if (this.filterPosition != null && this.filterPosition.length > 0) {
        data = data.filter(data => data.data.position.value.toUpperCase()
          .search(this.filterPosition.toUpperCase()) > -1)
      }
      if (this.filterSkill != null && this.filterSkill.length > 0) {
        data = data.filter(data => data.data.skills.values.map(
          (skill) => {
            return skill.name
          }
        ).join(' ').toUpperCase().search(this.filterSkill.toUpperCase()) > -1)
      }
      return data
    },
    user () {
      return this.$store.getters['getId']
    },
    userHasRights () {
      return this.selectedProject.manager === this.user
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
            project: this.$store.getters['getProjects']
              .find(project => project.id === object.personalData.items
                .find(item => item.name === 'Project').value),
            skills: object.skills.map((object) => {
              let skill = this.$store.getters['getSkills']
                .find(skill => skill.id === Number(object.id))
              return {
                name: skill.personalData.credentials.name,
                link: '/skills/',
                id: skill.id
              }
            })
          }
          if (this.selectedProject.manager === this.user && this.isSwitched) {
            return {
              id: parsed.id,
              data: {
                name: {value: parsed.name, link: true, editable: false},
                surname: {value: parsed.surname, link: true, editable: false},
                position: {value: parsed.position, options: 'projectPositionList'},
                skills: {values: parsed.skills},
                actions: this.selectedProject.manager === parsed.id
                  ? []
                  : [
                    {value: 'add', function: 'addProjectEmployee'}]
              },
              project: parsed.project === undefined ? undefined : parsed.project.id
            }
          } else if (this.selectedProject.manager === this.user) {
            return {
              id: parsed.id,
              data: {
                name: {value: parsed.name, link: true, editable: false},
                surname: {value: parsed.surname, link: true, editable: false},
                position: {value: parsed.position, options: 'projectPositionList'},
                skills: {values: parsed.skills},
                actions: this.selectedProject.manager === parsed.id
                  ? []
                  : [
                    {value: 'edit', function: 'editProjectEmployee'},
                    {value: 'delete', function: 'deleteProjectEmployee'}]
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
    },
    getSwitchValue (e) {
      this.isSwitched = e
    }
  }
}
</script>

<style scoped>

</style>
