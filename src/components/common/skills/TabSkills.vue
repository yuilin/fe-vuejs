<template>
    <div v-if="parent === 'Employee'" class="tab-skills">
        <div v-if="employee !== undefined && employee.id === Number(this.$route.params.id)" class="skills-header">
            <div class="skills-label"><h2>My Skills</h2>
            </div>
            <div class="add-icon">
                <img src="../../../../static/icons/add.png" alt="add" @click="addSkill">
            </div>
        </div>
        <myTable :headerNames="headerNames" :data="data" link="/skills/"
                 :editable="employee !== undefined && employee.id === Number(this.$route.params.id)"></myTable>
    </div>
</template>

<script>
import myTable from '@/components/common/Table'

export default {
  name: 'TabSkills',
  components: {myTable},
  props: {
    data: Array,
    parent: String
  },
  data () {
    return {
      headerNames: Array
    }
  },
  created () {
    this.headerNames = this.$store.getters['getEmployeesSkillTableHeaderNames']
  },
  computed: {
    employee () {
      return this.$store.getters['getEmployees'].find(employee => employee.id === this.$store.getters['getId'])
    }
  },
  methods: {
    addSkill () {
      this.$store.commit('addSkillToEmployee', this.employee.id)
    }
  }
}
</script>

<style scoped>

    .skills-label {
        display: inline-block;
    }

    .skills-header {
        width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .add-icon {
        text-align: right;
        float: right;
        margin-top: 30px;
    }

    @media screen and (max-width: 400px) {

        .skills-header {
            width: 100%;
        }
    }
</style>
