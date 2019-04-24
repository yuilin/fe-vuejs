<template>
    <div class="body">
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
  name: 'Skills',
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
      let data = this.parse(this.$store.getters['getSkills'])
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
  },
  methods: {
    calculateEmployees (id) {
      let employees = this.$store.getters['getEmployees'].filter(employee => employee.skills.find(skill => Number(skill.id) === id))
      return Object.assign(employees).length > 0 ? employees.length : '0'
    },
    calculateProjects (id) {
      let projects = this.$store.getters['getEmployees'].filter(employee => employee.skills.find(skill => Number(skill.id) === id)).map((employee) =>
        employee.personalData.items.find(item => item.name === 'Project').value)
      return Object.assign(projects).length > 0 ? Array.from(new Set(projects.filter(Number))).length : '0'
    },
    parse (objects) {
      return objects.map(
        (object) => {
          return {
            id: object.id,
            data: {
              name: {value: object.personalData.credentials.name, link: true},
              type: {value: object.info.find(info => info.name === 'Info').items.find(item => item.name === 'Type').value},
              category: {value: object.info.find(info => info.name === 'Info').items.find(item => item.name === 'Category').value},
              version: {value: object.info.find(info => info.name === 'Info').items.find(item => item.name === 'Latest ver').value},
              employees: {value: this.calculateEmployees(object.id)},
              projects: {value: this.calculateProjects(object.id)}
            }
          }
        }
      )
    }
  }
}
</script>

<style scoped>
</style>
