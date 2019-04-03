<template>
    <Main parent="Skill" :infoTabData="infoTabData" :skillsTabData="skillsTabData"
          :personalData="personalData" tab1="Info" tab2="Skill tree"></Main>
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
    this.infoTabData = this.$store.getters.getSkillsInfoTabData
    this.skillsTabData = this.$store.getters.getSkillsTreeTabData
    this.personalData = this.$store.getters.getSkillsPersonalData
  }
}
</script>

<style scoped>
</style>
