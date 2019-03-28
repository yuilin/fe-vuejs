<template>
    <div>
        <PersonalData :personalData="personalData"></PersonalData>
        <Tabs :infoTabData="infoTabData" :skillsTabData="skillsTabData" :tab1="tab1" :tab2="tab2"></Tabs>
    </div>
</template>

<script>
import Tabs from '@/components/common/Tabs'
import PersonalData from '@/components/personalData/PersonalData'

export default {
  name: 'Main',
  components: {PersonalData, Tabs},
  props: {
    parent: String,
    infoTabData: Array,
    skillsTabData: Object,
    personalData: Object,
    tab1: String,
    tab2: String
  }
}
</script>

<style scoped>
</style>
