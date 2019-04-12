<template>
    <div class="skills">
        <h1>Skills</h1>
        <myFilter parent="Skills"></myFilter>
        <myTable :headerNames="headerNames" :data="data" link="/skills/"></myTable>
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
      headerNames: Array
    }
  },
  created () {
    this.headerNames = this.$store.getters['getSkillsHeaderNames']
  },
  computed: {
    filterSkill () {
      return this.$store.getters['getFilter5']
    },
    filterType () {
      return this.$store.getters['getFilter6']
    },
    filterCategory () {
      return this.$store.getters['getFilter7']
    },
    filterTags () {
      return this.$store.getters['getFilter8']
    },
    data () {
      let data = this.$store.getters['getSkills']
      if (this.filterSkill != null && this.filterSkill.length > 0) {
        data = data = data.filter(data => data.data.title.value.toUpperCase().search(this.filterSkill.toUpperCase()) > -1)
      }
      if (this.filterType != null && this.filterType.length > 0) {
        data = data.filter(data => data.data.type.value.toUpperCase().search(this.filterType.toUpperCase()) > -1)
      }
      if (this.filterCategory != null && this.filterCategory.length > 0) {
        data = data.filter(data => data.data.category.value.toUpperCase().search(this.filterCategory.toUpperCase()) > -1)
      }
      if (this.filterTags != null && this.filterTags.length > 0) {
        data = data.filter(data => data.data.tags.value.toUpperCase().search(this.filterTags.toUpperCase()) > -1)
      }
      return data
    }
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
