<template>
    <div class="search-box box">
        <div class="search-box-row search-box-header">
            <div v-for="(headerName, index) in headerNames" v-bind:key="index"
                 :class="headerName.display
                 ? headerName.display === 'editable' && !editable
                 ? 'search-item none'
                 : 'search-item ' + headerName.display
                 : 'search-item'">
                {{headerName.name}}
            </div>
        </div>
        <div v-for="(row, index) in data" v-bind:key="index"
             :class="row.id !== editRecord ? 'search-box-row' : 'search-box-row editing'">
            <div v-for="(r, i) in row.data" v-bind:key="i" class="contents">
                <div v-if="row.id !== editRecord"
                     :class="r.display ? 'search-item ' + r.display : 'search-item'">
                    <router-link v-if="r.value && r.link && !r.id" :to="link  + row.id">{{r.value}}</router-link>
                    <router-link v-else-if="r.value && r.link && r.id" :to="r.link + r.id">{{r.value}}</router-link>
                    <div v-else-if="r.value !== undefined" class="contents">{{r.value}}</div>
                    <div v-else-if="r.values && !Array.isArray(r)" v-for="(arr, i) in r.values" v-bind:key="i">
                        <router-link :to="arr.link + arr.id">{{arr.name}}</router-link>
                    </div>
                    <div v-else class="contents" v-for="(action, i) in r" v-bind:key="i">
                        <img v-if="editable" :src="'../../../static/icons/' + action.value + '.png'" :alt="action.value"
                             @click="handleFunctionCall(action.function, row.id)">
                        <img v-else :src="'../../../static/icons/' + action.value + '.png'" :alt="action.value"
                             class="inactive-icon">
                    </div>
                </div>
                <div v-else :class="r.display ? 'search-item ' + r.display : 'search-item'">
                    <select v-if="r.value && r.editable !== false" :to="link  + row.id" @change="updateItem($event)">
                        <option v-for="(item, i) in handleListCall(r.options)" v-bind:key="i" :value="item.id"
                                :selected="selectedRecord(item.id, r.options)" :class="r.options"
                                :disabled="item.id === ' '">
                            {{item.value}}
                        </option>
                    </select>
                    <div v-else-if="r.value && r.editable === false" class="contents">{{r.value}}</div>
                    <div v-else-if="r.values && !Array.isArray(r)" v-for="(arr, i) in r.values" v-bind:key="i">
                        <router-link :to="arr.link + arr.id">{{arr.name}}</router-link>
                    </div>
                    <div v-else class="contents" v-for="(action, i) in r" v-bind:key="i">
                        <img v-if="editable" :src="'../../../static/icons/' + action.value + '.png'" :alt="action.value"
                             @click="handleFunctionCall(action.function, row.id)">
                        <img v-else :src="'../../../static/icons/' + action.value + '.png'" :alt="action.value"
                             class="inactive-icon">
                    </div>
                </div>
            </div>
        </div>
        <modal v-if="editSkillId !== 0" @close="closeModal" @save="save">
            <h2 slot="header">Edit skill</h2>
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
import Modal from '@/components/common/Modal'

/**
 * Common component to display table.
 */
export default {
  components: {Modal},
  name: 'myTable',
  props: {
    headerNames: Array,
    data: Array,
    link: String,
    editable: Boolean
  },
  created:
    function () {
      if (Number(this.$store.getters['getEditRecord']) !== 0) {
        this.$store.commit('setEditRecord', 0)
      }
    },
  data () {
    return {
      selectedSkill: null,
      selectedLevel: null,
      selectedPosition: null,
      selectedProject: null,
      editSkillId: 0,
      name: null,
      url: null,
      version: null,
      git: null,
      category: null,
      type: null,
      parent: null
    }
  },
  computed: {
    /**
     * Selected row to record.
     * @returns {number}
     */
    editRecord () {
      return Number(this.$store.getters['getEditRecord'])
    },
    /**
     * Logged in employee.
     * @returns {*}
     */
    employee () {
      return this.$store.getters['getEmployees']
        .find(employee => employee.id === this.$store.getters['getId'])
    },
    /**
     * List of possible skills.
     * @returns {*}
     */
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
    /**
     * List of possible skills for current employee.
     * @returns {*}
     */
    employeeSkillList () {
      return this.employee.skills.map(
        (eSkill) => {
          if (this.editRecord !== eSkill.id) {
            return eSkill.id
          }
        }
      )
    },
    /**
     * List of possible skill levels.
     * @returns {{id: number, value: number}[]}
     */
    levelList () {
      return [
        {
          id: 1,
          value: 1
        },
        {
          id: 2,
          value: 2
        },
        {
          id: 3,
          value: 3
        },
        {
          id: 4,
          value: 4
        },
        {
          id: 5,
          value: 5
        }
      ]
    },
    /**
     * List of possible positions.
     * @returns {*}
     */
    positionList () {
      let positions = this.$store.getters['getPositions'].map(
        (position) => {
          return {
            id: position,
            value: position
          }
        }
      )
      positions.unshift({id: ' ', value: ' '})
      return positions
    },
    /**
     * List of possible positions for project manager.
     * @returns {*}
     */
    projectPositionList () {
      return this.positionList.filter(position => position.id !== 'Department Manager')
    },
    /**
     * List of project for selected department.
     * @returns {*}
     */
    projectList () {
      let projects = this.$store.getters['getProjects'].map(
        (project) => {
          return {
            id: project.id,
            value: project.name,
            department: project.department
          }
        }).filter(project => project.department === Number(this.$route.params.id))
      projects.unshift({id: null, name: ''})
      return projects
    },
    /**
     * List of skill categories.
     * @returns {*}
     */
    categories () {
      return this.$store.getters['getSkillCategories']
    },
    /**
     * List of skill types.
     * @returns {*}
     */
    types () {
      return this.$store.getters['getSkillTypes']
    },
    /**
     * List of parent types.
     * @returns {Array}
     */
    parentTypes () {
      let parents = []
      this.$store.getters['getSkillTree'].filter(item => item.typeId !== null).forEach(
        (element) => {
          parents.push({id: element.id, name: this.types.find(type => type.id === element.typeId).name})
        }
      )
      return parents
    },
    /**
     * List of parent categories.
     * @returns {Array}
     */
    parentCategories () {
      let parents = []
      this.$store.getters['getSkillTree'].filter(item => item.categoryId !== null).forEach(
        (element) => {
          parents.push({
            id: element.id,
            name: this.categories.find(category => category.id === element.categoryId).name
          })
        }
      )
      return parents
    },
    /**
     * List of parent skills.
     * @returns {Array}
     */
    parentSkills () {
      let parents = []
      this.$store.getters['getSkillTree'].filter(item => item.skillId !== null).forEach(
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
    /**
     * Check changes for item.
     * @param e
     */
    updateItem (e) {
      switch (e.target.options[0].className) {
        case 'skillList': {
          this.selectedSkill = e.target.value
          break
        }
        case 'levelList': {
          this.selectedLevel = e.target.value
          break
        }
        case 'positionList': {
          this.selectedPosition = e.target.value
          break
        }
        case 'projectPositionList': {
          this.selectedPosition = e.target.value
          break
        }
        case 'projectList': {
          this.selectedProject = e.target.value
          break
        }
      }
    },
    /**
     * Edit employee skill
     * @param id - employee id
     */
    editEmployeeSkill (id) {
      if (this.editRecord === 0 || this.editRecord === id) {
        if (this.editRecord === id) {
          this.$store.commit('updateEmployeeSkillLevel', {
            employeeId: this.employee.id,
            recordId: this.editRecord,
            value: this.selectedLevel
          })
          this.$store.commit('updateEmployeeSkill', {
            employeeId: this.employee.id,
            recordId: this.editRecord,
            value: this.selectedSkill,
            skillName: this.$store.getters['getSkills']
              .find(skill => skill.id === Number(this.selectedSkill)).personalData.credentials.name
          })
          this.selectedSkill = null
          this.selectedLevel = null
        } else {
          this.selectedSkill = this.employee.skills.find(skill => skill.id === id).id
          this.selectedLevel = this.employee.skills.find(skill => skill.id === id).data.level.value
        }
        this.$store.commit('setEditRecord', this.editRecord === id ? Number(0) : id)
      }
    },
    /**
     * Delete employee skill.
     * @param id - employee id
     */
    deleteEmployeeSkill (id) {
      if (this.editRecord === id) {
        this.$store.commit('setEditRecord', 0)
      }
      this.$store.commit('deleteEmployeeSkill', {employeeId: this.employee.id, skillId: id})
    },
    /**
     * Edit employee by project manager.
     * @param id - employee id
     */
    editProjectEmployee (id) {
      if (this.editRecord === 0 || this.editRecord === id) {
        if (this.editRecord === id) {
          if (this.selectedPosition === 'Project Manager') {
            let previousManager = this.$store.getters['getEmployees']
              .find(employee => employee.id === this.$store.getters['getProjects']
                .find(project => project.id === Number(this.$route.params.id)).manager)
            this.$store.commit('updateEmployeeProject', {employeeId: previousManager.id, projectId: null})
            this.$store.commit('updateProject', {projectId: Number(this.$route.params.id), manager: id})
          }
          this.$store.commit('updateEmployeePosition', {
            employeeId: id,
            position: this.selectedPosition
          })
          this.selectedPosition = null
        } else {
          this.selectedPosition = this.data.find(employee => employee.id === id).data.position.value
        }
        this.$store.commit('setEditRecord', this.editRecord === id ? Number(0) : id)
      }
    },
    /**
     * Fire employee from project.
     * @param id - employee id
     */
    deleteProjectEmployee (id) {
      if (this.editRecord === id) {
        this.$store.commit('setEditRecord', 0)
      }
      this.$store.commit('updateEmployeeProject', {employeeId: id, projectId: null})
    },
    /**
     * Edit employee by department manager.
     * @param id - employee id
     */
    editDepartmentEmployee (id) {
      if (this.editRecord === 0 || this.editRecord === id) {
        if (this.editRecord === id) {
          let previousDManager = this.$store.getters['getEmployees']
            .find(employee => employee.id === this.$store.getters['getDepartments']
              .find(department => department.id === Number(this.$route.params.id)).manager)
          let previousPManager = this.$store.getters['getEmployees']
            .find(employee => employee.id === this.$store.getters['getProjects']
              .find(project => project.id === Number(this.selectedProject)).manager)
          if (this.selectedPosition === 'Department Manager' && id !== previousDManager.id) {
            this.$store.commit('updateDepartment', {departmentId: Number(this.$route.params.id), manager: id})
          } else if (this.selectedPosition === 'Project Manager' && id !== previousPManager.id) {
            this.$store.commit('updateEmployeeProject', {employeeId: previousPManager.id, projectId: null})
            this.$store.commit('updateProject', {projectId: Number(this.$route.params.id), manager: id})
          }
          if (this.selectedPosition === 'Department Manager') {
            this.$store.commit('updateEmployeeProject', {employeeId: id, projectId: null})
          } else {
            this.$store.commit('updateEmployeeProject', {employeeId: id, projectId: Number(this.selectedProject)})
          }
          this.$store.commit('updateEmployeePosition', {
            employeeId: id,
            position: this.selectedPosition
          })
          this.selectedPosition = null
          this.selectedProject = null
        } else {
          this.selectedPosition = this.data.find(employee => employee.id === id).data.position.value
          this.selectedProject = this.data.find(employee => employee.id === id).data.project.id
        }
        this.$store.commit('setEditRecord', this.editRecord === id ? Number(0) : id)
      }
    },
    /**
     * Handle function.
     * @param functionName
     * @param id
     */
    handleFunctionCall (functionName, id) {
      this[functionName](id)
    },
    /**
     * Handle list.
     * @param functionName
     * @returns {*}
     */
    handleListCall (functionName) {
      return this[functionName]
    },
    /**
     * Select option from the list
     * @param id
     * @param options
     * @returns {boolean}
     */
    selectedRecord (id, options) {
      switch (options) {
        case 'skillList': {
          return id === this.editRecord
        }
        case 'levelList': {
          return id === Number(this.employee.skills.find(skill => skill.id === this.editRecord).data.level.value)
        }
        case 'positionList': {
          return id === this.selectedPosition
        }
        case 'projectPositionList': {
          return id === this.selectedPosition
        }
        case 'projectList': {
          return id === this.selectedProject
        }
      }
    },
    /**
     * Prepare existing skill for editing.
     * @param id - skill id
     */
    loadSkillById (id) {
      let skills = this.$store.getters['getSkills'].find(skill => skill.id === id)
      let items = skills.info.find(info => info.name === 'Info').items
      this.name = skills.personalData.credentials.name

      this.url = items.find(item => item.name === 'URL').value
      this.version = items.find(item => item.name === 'Latest ver').value
      this.git = items.find(item => item.name === 'GIT').value
      this.category = items.find(item => item.name === 'Category').value
      this.type = items.find(item => item.name === 'Type').value
      if (this.$store.getters['getSkillTree'].find(item => item.skillId === id) !== undefined) {
        this.parent = this.$store.getters['getSkillTree'].find(item => item.skillId === id).parentId
      }
      this.editSkillId = id
    },
    /**
     * Close the model window.
     */
    closeModal () {
      this.editSkillId = 0
      this.name = null
      this.url = null
      this.version = null
      this.git = null
      this.category = null
      this.type = null
      this.parent = null
    },
    /**
     * Save edited skill.
     */
    save () {
      this.$store.commit('editSkill', {
        id: this.editSkillId,
        name: this.name,
        url: this.url,
        version: this.version,
        git: this.git,
        category: this.category,
        type: this.type
      })
      let oldParent = this.$store.getters['getSkillTree'].find(item => item.skillId === this.editSkillId)
      if (!((oldParent === undefined && this.parent === null) ||
        (oldParent !== undefined && oldParent.parentId === this.parent))) {
        if (oldParent === undefined) {
          // add
          this.$store.commit('addSkillToTree', {
            id: 1 + this.$store.getters['getSkillTree'][this.$store.getters['getSkillTree'].length - 1].id,
            parentId: this.parent,
            skillId: this.editSkillId
          })
        } else if (this.parent === 'null') {
          // delete
          this.deleteFromSkillTree(oldParent.id)
        } else {
          // edit
          this.$store.commit('editSkillTree', {
            id: oldParent.id,
            parentId: this.parent
          })
        }
      }
      this.closeModal()
    },
    /**
     * Delete skill from skill tree
     * @param id - skill id
     */
    deleteFromSkillTree (id) {
      if (this.$store.getters['getSkillTree'].find(item => item.parentId === id) !== undefined) {
        this.deleteFromSkillTree(this.$store.getters['getSkillTree'].find(item => item.parentId === id).id)
      }
      this.$store.commit('deleteFromSkillTree', {
        id: this.$store.getters['getSkillTree'].find(item => item.id === id).id
      })
    },
    /**
     * Hire employee to a project.
     * @param id - the project id
     */
    addProjectEmployee (id) {
      this.$store.commit('updateEmployeeProject', {employeeId: id, projectId: Number(this.$route.params.id)})
    }
  }
}
</script>

<style scoped>

    .search-box {
        width: 700px;
        margin-top: 50px;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        display: table;
    }

    .search-box-header {
        border-radius: 10px 10px 0 0;
        box-shadow: inset 0 0 10px 3px #afafaf;
    }

    .search-box-row {
        display: table-row;
        text-align: left;
    }

    .search-item {
        display: table-cell;
        padding: 10px;
    }

    .editing {
        background-color: rgba(0, 255, 0, .05);
    }

    .contents {
        display: contents;
    }

    .inactive-icon {
        background-color: lightgrey;
    }

    .none {
        display: none
    }

    @media screen and (max-width: 1200px) {
        .search-box {
            width: 100%;
            padding: 0;
        }

        .search-box {
            margin-top: 20px;
        }

        .not-mobile {
            display: none;
        }

        .search-item {
            padding: 0;
        }

    }
</style>
