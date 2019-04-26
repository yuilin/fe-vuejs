<template>
    <div class="info-items">
        <InfoItem :item="addInfo(items)"></InfoItem>
    </div>
</template>

<script>
import InfoItem from '@/components/common/info/InfoItem'

export default {
  name: 'infoItems',
  components: {InfoItem},
  props: {
    items: Object
  },
  computed: {
    departments () {
      return this.$store.getters['getDepartments']
    },
    selectedEmployee () {
      return this.employees.find(employee => employee.id === Number(this.$route.params.id))
    },
    employees () {
      return this.$store.getters['getEmployees']
    }
  },
  methods: {
    addInfo (items) {
      let value, link
      let department = this.departments.find(department => department.id === items.value)
      switch (items.name) {
        case 'Department': {
          if (department) {
            value = department.name
            link = '/departments/' + department.id
          } else {
            value = '-'
          }
          break
        }
        case 'Supervisor': {
          if (department) {
            let position = this.selectedEmployee.info
              .find(info => info.name === 'Job Details').items
              .find(item => item.name === 'Position').value
            let projectId = this.$store.getters['getProjects']
              .find(project => project.id === this.selectedEmployee.personalData.items
                .find(item => item.name === 'Project').value)
            if (position === 'Department Manager') {
              value = '-'
            } else if (position === 'Project Manager' || !projectId) {
              let departmentManager = this.employees
                .find(employee => employee.id === this.departments
                  .find(department => department.id === this.selectedEmployee.info
                    .find(info => info.name === 'Job Details').items
                    .find(item => item.name === 'Department').value).manager)
              if (departmentManager) {
                value = departmentManager.personalData.credentials.name + ' ' +
                  departmentManager.personalData.credentials.surname
                link = '/employees/' + departmentManager.id
              } else {
                value = '-'
              }
            } else {
              let projectManager = this.employees.find(employee => employee.id === projectId)
              if (projectManager) {
                value = projectManager.personalData.credentials.name + ' ' +
                  projectManager.personalData.credentials.surname
                link = '/employees/' + projectManager.id
              } else {
                value = '-'
              }
            }
          } else {
            value = '-'
          }
          break
        }
      }
      return {
        name: items.name,
        value: value !== undefined ? value : items.value,
        linkTo: link
      }
    }
  }
}
</script>

<style scoped>
    .info-items {
        display: flex;
    }

    @media screen and (max-width: 400px) {
        .info-items {
            padding-top: 20px;
            display: block;
        }
    }
</style>
