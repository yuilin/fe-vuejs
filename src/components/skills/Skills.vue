<template>
    <div class="body">
        <h1>Skills</h1>
        <div v-if="user" class="skills-header">
            <div class="add-icon">
                <img src="../../../static/icons/add.png" alt="add" @click="showModal = true">
            </div>
        </div>
        <myFilter parent="Skills"></myFilter>
        <myTable :headerNames="headerNames" :data="data" link="/skills/" :editable="user !== null"></myTable>
        <Pagination></Pagination>
        <modal v-if="showModal" @close="closeModal" @save="save">
            <h2 slot="header">Add new skill</h2>
            <div slot="body">
                <input class="newItem" type="text" v-model="name" placeholder="name">
                <input class="newItem" type="text" v-model="url" placeholder="url">
                <input class="newItem" type="text" v-model="version" placeholder="version">
                <input class="newItem" type="text" v-model="git" placeholder="git">
                <select class="newItem" v-model="category">
                    <option value="null" disabled>Select a category</option>
                    <option v-for="(item, i) in categories" v-bind:key="i" :value="item.id">
                        {{item.name}}
                    </option>
                </select>
                <select class="newItem" v-model="type">
                    <option value="null" disabled>Select a type</option>
                    <option v-for="(item, i) in types" v-bind:key="i" :value="item.id">
                        {{item.name}}
                    </option>
                </select>
                <select class="newItem" v-model="parent">
                    <option value="null" disabled>Select a parent</option>
                    <option value="null"></option>
                    <optgroup label="Types">
                        <option v-for="(item, i) in parentTypes" v-bind:key="i" :value="item.id">
                            {{item.name}}
                        </option>
                    </optgroup>
                    <optgroup label="Categories">
                        <option v-for="(item, i) in parentCategories" v-bind:key="i" :value="item.id">
                            {{item.name}}
                        </option>
                    </optgroup>
                    <optgroup label="Skills">
                        <option v-for="(item, i) in parentSkills" v-bind:key="i" :value="item.id">
                            {{item.name}}
                        </option>
                    </optgroup>
                </select>
            </div>
        </modal>
    </div>
</template>

<script>
import myFilter from '@/components/common/Filter'
import Pagination from '@/components/common/Pagination'
import myTable from '@/components/common/Table'
import Modal from '@/components/common/Modal'

export default {
  components: {myTable, Pagination, myFilter, Modal},
  name: 'Skills',
  data () {
    return {
      showModal: false,
      name: null,
      url: null,
      version: null,
      git: null,
      category: null,
      type: null,
      parent: null
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
    },
    user () {
      return this.$store.getters['getId']
    },
    categories () {
      return this.$store.getters['getSkillCategories']
    },
    types () {
      return this.$store.getters['getSkillTypes']
    },
    parentTypes () {
      let parents = []
      this.$store.getters['getSkillTree'].filter(element => element.typeId !== null).forEach(
        (element) => {
          parents.push({id: element.id, name: this.types.find(type => type.id === element.typeId).name})
        }
      )
      return parents
    },
    parentCategories () {
      let parents = []
      this.$store.getters['getSkillTree'].filter(element => element.categoryId !== null).forEach(
        (element) => {
          parents.push({
            id: element.id,
            name: this.categories.find(category => category.id === element.categoryId).name
          })
        }
      )
      return parents
    },
    parentSkills () {
      let parents = []
      this.$store.getters['getSkillTree'].filter(element => element.skillId !== null).forEach(
        (element) => {
          parents.push({
            id: element.id,
            name: this.$store.getters['getSkills'].find(skill => skill.id === element.skillId).personalData.credentials.name
          })
        }
      )
      return parents
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
              type: {
                value: this.types.find(type => type.id === object.info
                  .find(info => info.name === 'Info').items
                  .find(item => item.name === 'Type').value).name
              },
              category: {
                value: this.categories.find(category => category.id === object.info
                  .find(info => info.name === 'Info').items
                  .find(item => item.name === 'Category').value).name
              },
              version: {
                value: object.info.find(info => info.name === 'Info').items
                  .find(item => item.name === 'Latest ver').value
              },
              employees: {value: this.calculateEmployees(object.id)},
              projects: {value: this.calculateProjects(object.id)},
              actions: this.user === null ? [] : [{value: 'edit', function: 'editSkill'}]
            }
          }
        }
      )
    },
    addSkill () {
      let skillId = 1 + this.$store.getters['getSkills'][this.$store.getters['getSkills'].length - 1].id
      if (this.name != null && this.category != null) {
        this.$store.commit('addSkill', {
          id: skillId,
          name: this.name,
          url: this.url,
          version: this.version,
          git: this.git,
          category: this.category,
          type: this.type
        })
      }
      if (this.parent != null) {
        this.$store.commit('addSkillToTree', {
          id: 1 + this.$store.getters['getSkillTree'][this.$store.getters['getSkillTree'].length - 1].id,
          parentId: this.parent,
          skillId: skillId
        })
      }
    },
    closeModal () {
      this.showModal = false
      this.name = null
      this.url = null
      this.version = null
      this.git = null
      this.category = null
      this.type = null
      this.parent = null
    },
    save () {
      if (this.name != null && this.category != null && this.type != null) {
        this.addSkill()
      }
      this.closeModal()
    }
  }
}
</script>

<style scoped>
</style>
