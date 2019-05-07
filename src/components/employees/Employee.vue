<template>
    <Main parent="Employee" :infoTabData="info" :skillsTabData="skills"
          :personalData="personalData" tab1="Info" tab2="Skills"></Main>
</template>

<script>
import Main from '@/components/common/Main'

export default {
  components: {Main},
  created () {
    this.employees = this.$store.getters['getEmployees']
  },
  computed: {
    selectedEmployee () {
      return this.employees.find(employee => employee.id === Number(this.$route.params.id))
    },
    info () {
      return this.selectedEmployee.info.map(
        (info) => {
          if (info.name === 'Personal Info') {
            if (info.items.find(item => item.name === 'Id') === undefined) {
              info.items.unshift({name: 'Id', value: this.selectedEmployee.id})
            }
          } else if (info.name === 'Job Details') {
            if (info.items.find(item => item.name === 'Supervisor') === undefined) {
              let position = this.selectedEmployee.info
                .find(info => info.name === 'Job Details').items
                .find(item => item.name === 'Position').value
              if (position === 'Department Manager') {
                let department = this.$store.getters['getDepartments']
                  .find(department => department.manager === this.selectedEmployee.id)
                info.items.push({name: 'Supervisor', value: '-'})
                info.items.push({name: 'Department', value: department.name, linkTo: '/departments/' + department.id})
              } else {
                let projectId = this.selectedEmployee.personalData.items
                  .find(item => item.name === 'Project').value
                if (projectId) {
                  let project = this.$store.getters['getProjects']
                    .find(project => project.id === projectId)
                  let department = this.$store.getters['getDepartments']
                    .find(department => department.id === project.department)
                  let supervisor
                  if (position === 'Project Manager') {
                    supervisor = this.$store.getters['getEmployees']
                      .find(employee => employee.id === department.manager)
                  } else {
                    supervisor = this.$store.getters['getEmployees']
                      .find(employee => employee.id === project.manager)
                  }
                  info.items.push({
                    name: 'Supervisor',
                    value: supervisor.personalData.credentials.name + ' ' + supervisor.personalData.credentials.surname,
                    linkTo: '/employees/' + supervisor.id
                  })
                  info.items.push({name: 'Department', value: department.name, linkTo: '/departments/' + department.id})
                } else {
                  info.items.push({name: 'Supervisor', value: '-'})
                  info.items.push({name: 'Department', value: '-'})
                }
              }
            }
          }
          return info
        }
      )
    },
    skills () {
      return this.selectedEmployee.skills.map(
        (skill) => {
          let data = skill.data
          if (this.selectedEmployee.id === this.$store.getters['getId']) {
            data.action = [
              {value: 'edit', function: 'editEmployee'},
              {value: 'delete', function: 'deleteEmployee'}]
          }
          return {data: data, id: skill.id}
        })
    },
    personalData () {
      return {
        credentials: this.selectedEmployee.personalData.credentials,
        icon: this.selectedEmployee.personalData.icon,
        items: this.selectedEmployee.personalData.items.map(
          (item) => {
            if (item.name === 'Project') {
              if (item.value !== null) {
                return {
                  name: 'Project',
                  value: this.$store.getters['getProjects'].find(project => project.id === item.value).name,
                  linkTo: '/projects/' + item.value
                }
              } else {
                return {
                  name: 'Project',
                  value: '-'
                }
              }
            }
            return item
          }
        )
      }
    }
  }
}
</script>

<style scoped>
</style>
