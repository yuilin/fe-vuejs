<template>
    <div v-if="parent === 'Employee'" class="tab-skills">
        <div v-if="employee !== undefined && employee.id === Number(this.$route.params.id)" class="skills-header">
            <div class="skills-label">
                <h2>My Skills</h2>
            </div>
            <div class="add-icon">
                <img src="../../../../static/icons/add.png" alt="add" @click="addSkill">
            </div>
        </div>
        <myTable :headerNames="headerNames"
                 :data="data"
                 link="/skills/"
                 :editable="employee !== undefined && employee.id === Number(this.$route.params.id)">
        </myTable>
    </div>
    <div v-else class="tab-skills">
        <TreeItem
                class="item"
                :item="treeData">
        </TreeItem>
    </div>
</template>

<script>
import myTable from '@/components/common/Table'
import TreeItem from '@/components/common/skills/TreeItem'

/**
 * Second tab component for employee or skill.
 */
export default {
  name: 'TabSkills',
  components: {myTable, TreeItem},
  props: {
    data: Array,
    parent: String
  },
  created () {
    this.headerNames = this.$store.getters['getEmployeesSkillTableHeaderNames']
  },
  computed: {
    employee () {
      return this.$store.getters['getEmployees']
        .find(employee => employee.id === this.$store.getters['getId'])
    },
    skillList () {
      return this.$store.getters['getSkills'].map(
        (skill) => {
          return {
            id: skill.id,
            value: skill.personalData.credentials.name
          }
        }
      ).filter(skill => this.employeeSkillList.indexOf(skill.id) === -1)
    },
    employeeSkillList () {
      return this.employee.skills.map(
        (eSkill) => {
          if (this.editRecord !== eSkill.id) {
            return eSkill.id
          }
        }
      )
    },
    treeData () {
      return this.parseTree(this.$store.getters['getSkillTree'], 0)
    }
  },
  methods: {
    /**
     * Add skill to employee.
     */
    addSkill () {
      if (this.$store.getters['getEditRecord'] === 0 && this.skillList.length > 0) {
        this.$store.commit('addSkillToEmployee', {
          employeeId: this.employee.id,
          value: this.skillList[0].id,
          skillName: this.skillList[0].value
        })
        this.$store.commit('setEditRecord', 0)
      }
    },

    /**
     * Parse the tree
     * @param treeData
     * @param counter
     * @returns {*}
     */
    parseTree (treeData, counter) {
      let data = []
      let children = []
      treeData.filter(skill => skill.parentId === counter).forEach(
        (skill) => {
          children.push(skill)
        }
      )
      children.forEach(
        (child) => {
          let name = child.skillId !== null
            ? this.$store.getters['getSkills']
              .find(skill => skill.id === child.skillId).personalData.credentials.name
            : child.categoryId !== null
              ? this.$store.getters['getSkillCategories']
                .find(category => category.id === child.categoryId).name
              : this.$store.getters['getSkillTypes']
                .find(type => type.id === child.typeId).name
          data.push(
            {
              name: name,
              children: this.parseTree(treeData, child.id),
              link: child.skillId !== null ? child.skillId : null
            }
          )
        })
      return counter > 0 ? data : {name: 'Skills', children: data}
    }
  }
}
</script>

<style scoped>

    .skills-label {
        display: inline-block;
    }
</style>
