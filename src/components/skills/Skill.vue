<template>
    <Main parent="Skill" :infoTabData="selectedSkill.info" :skillsTabData="[]"
          :personalData="addCalculatedValues(selectedSkill)" tab1="Info" tab2="Skill tree"></Main>
</template>

<script>
import Main from '@/components/common/Main'

export default {
  components: {Main},
  created () {
    this.skills = this.$store.getters['getSkills']
  },
  computed: {
    selectedSkill () {
      return this.skills.find(skill => skill.id === Number(this.$route.params.id))
    }
  },
  methods: {
    addCalculatedValues (selectedSkill) {
      return {
        icon: selectedSkill.personalData.icon,
        credentials: selectedSkill.personalData.credentials,
        items: selectedSkill.personalData.items.map(
          (item) => {
            return {
              name: item.name,
              value: item.name === 'Staff count' ? this.calculateEmployees(selectedSkill.id) : this.calculateProjects(selectedSkill.id)
            }
          }
        )
      }
    },
    calculateProjects (id) {
      let projects = this.$store.getters['getEmployees'].filter(employee => employee.skills.find(skill => Number(skill.id) === id)).map((employee) =>
        employee.personalData.items.find(item => item.name === 'Project').value)
      return Object.assign(projects).length > 0 ? Array.from(new Set(projects.filter(Number))).length : '0'
    },
    calculateEmployees (id) {
      let employees = this.$store.getters['getEmployees'].filter(employee => employee.skills.find(skill => Number(skill.id) === id))
      return Object.assign(employees).length > 0 ? employees.length : '0'
    }
  }
}
</script>

<style scoped>
</style>
