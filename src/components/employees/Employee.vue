<template>
    <Main parent="Employee" :infoTabData="selectedEmployee.info" :skillsTabData="selectedEmployee.skills"
          :personalData="selectedEmployee.personalData" tab1="Info" tab2="Skills"></Main>
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
    }
  }
}
</script>

<style scoped>
</style>
