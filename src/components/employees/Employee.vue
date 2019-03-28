<template>
    <Main parent="Employee" :infoTabData="infoTabData" :skillsTabData="skillsTabData"
          :personalData="personalData" tab1="Info" tab2="Skills"></Main>
</template>

<script>
import Main from '@/components/common/Main'

export default {
  components: {Main},
  data () {
    return {
      infoTabData: Array,
      skillsTabData: Object,
      personalData: Object
    }
  },
  created () {
    this.$store.commit('setEmployeesPersonalData')
    this.infoTabData = this.$store.getters.getEmployeesInfoTabData
    this.skillsTabData = this.$store.getters.getEmployeesSkillsTabData
    this.personalData = this.$store.getters.getEmployeesPersonalData
  }
}
</script>

<style scoped>
</style>
