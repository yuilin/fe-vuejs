<template>
    <Main parent="Employee" :infoTabData="selectedEmployee.info" :skillsTabData="selectedEmployee.skills"
          :personalData="selectedEmployee.personalData" tab1="Info" tab2="Skills"></Main>
</template>

<script>
import Main from '@/components/common/Main'

export default {
  components: {Main},
  data () {
    return {
      num: Number(this.$route.params.id),
      selectedEmployee: Object
    }
  },
  created () {
  },
  mounted () {
    this.employees = this.$store.getters['getEmployees']
    this.selectedEmployee = this.employees.find(employee => employee.info[0].items[0][0].value === this.num)
  }
}
</script>

<style scoped>
</style>
