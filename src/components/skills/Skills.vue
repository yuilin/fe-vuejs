<template>
    <div class="skills">
        <h1>Skills</h1>
        <myFilter parent="Skills"></myFilter>
        <myTable :headerNames="headerNames" :data="skills" link="/skill"></myTable>
        <Pagination></Pagination>
    </div>
</template>

<script>
import myFilter from '@/components/common/Filter'
import Pagination from '@/components/common/Pagination'
import myTable from '@/components/common/Table'

export default {
  components: {myTable, Pagination, myFilter},
  data () {
    return {
      skills: Array,
      headerNames: Array
    }
  },
  created () {
    this.$store.commit('setSkills')
    this.$store.commit('setSkillsHeaderNames')
    this.skills = this.$store.getters.getSkills
    this.headerNames = this.$store.getters.getSkillsHeaderNames
  }
}
</script>

<style scoped>
    .skills {
        margin: 50px;
    }

    @media screen and (max-width: 800px) {
        .skills {
            margin: 40px 0 0 0;
        }
    }
</style>
