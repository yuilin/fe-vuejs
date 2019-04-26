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
      return this.selectedEmployee.info
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
      return this.selectedEmployee.personalData
    }
  }
}
</script>

<style scoped>
</style>
