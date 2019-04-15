<template>
    <div class="search-box box">
        <div class="search-box-row search-box-header">
            <div v-for="(headerName, index) in headerNames" v-bind:key="index"
                 :class="headerName.display ? 'search-item ' + headerName.display : 'search-item'">{{headerName.name}}
            </div>
        </div>
        <div v-for="(row, index) in data" v-bind:key="index"
             :class="row.id !== editRecord ? 'search-box-row' : 'search-box-row editing'">
            <div v-for="(r, i) in row.data" v-bind:key="i" class="contents">
                <div v-if="row.id !== editRecord" :class="r.display ? 'search-item ' + r.display : 'search-item'">
                    <router-link v-if="r.value && r.link && !r.id" :to="link  + row.id">{{r.value}}</router-link>
                    <router-link v-else-if="r.value && r.link && r.id" :to="r.link  + '/' + r.id">{{r.value}}
                    </router-link>
                    <div v-else-if="r.value" class="contents">{{r.value}}</div>
                    <div v-else-if="r.values" v-for="(arr, i) in r.values" v-bind:key="i">
                        <router-link :to="arr.link  + '/' + arr.id">{{arr.name}}</router-link>
                    </div>
                    <div v-else class="contents" v-for="(action, i) in r" v-bind:key="i">
                        <img v-if="editable" :src="'../../../static/icons/' + action.value + '.png'" :alt="action.value"
                             @click="handleFunctionCall(action.value, row.id)">
                        <img v-else :src="'../../../static/icons/' + action.value + '.png'" :alt="action.value"
                             class="inactive-icon">
                    </div>
                </div>
                <div v-else :class="r.display ? 'search-item ' + r.display : 'search-item'">
                    <select v-if="r.value && r.editable !== false" :to="link  + row.id">
                        <option v-for="(item, i) in handleListCall(r.options)" v-bind:key="i" :value="item.id"
                                :selected="item.id === editRecord" @click="updateItem" :class="r.options">
                            {{item.value}}
                        </option>
                    </select>
                    <div v-else-if="r.value && r.editable === false" class="contents">{{r.value}}</div>
                    <div v-else class="contents" v-for="(action, i) in r" v-bind:key="i">
                        <img v-if="editable" :src="'../../../static/icons/' + action.value + '.png'" :alt="action.value"
                             @click="handleFunctionCall(action.value, row.id)">
                        <img v-else :src="'../../../static/icons/' + action.value + '.png'" :alt="action.value"
                             class="inactive-icon">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myTable',
  props: {
    headerNames: Array,
    data: Array,
    link: String,
    editable: Boolean
  },
  data () {
    return {
      editRecord: null
    }
  },
  computed: {
    employee () {
      return this.$store.getters['getEmployees'].find(employee => employee.id === this.$store.getters['getId'])
    },
    skillList () {
      return this.$store.getters['getSkills'].map(
        (skill) => {
          return {
            id: skill.id,
            value: skill.data.title.value
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
    }
  },
  methods: {
    updateItem (e) {
      switch (e.target.className) {
        case 'skillList': {
          this.$store.commit('updateEmployeeSkill', {
            employeeId: this.employee.id,
            recordId: this.editRecord,
            value: e.target.value,
            skillName: this.$store.getters['getSkills'].find(skill => skill.id === Number(e.target.value)).data.title.value
          })
          this.editRecord = e.target.value
          break
        }
        case 'levelList': {
          this.$store.commit('updateEmployeeSkillLevel', {
            employeeId: this.employee.id,
            recordId: this.editRecord,
            value: e.target.value
          })
          break
        }
      }
    },
    edit (id) {
      this.editRecord = this.editRecord === id ? null : id
      // this.$store.commit('editEmployeeSkill', {employeeId: this.employee.id, skillId: id})
    },
    delete (id) {
      if (this.editRecord === id) {
        this.editRecord = null
      }
      this.$store.commit('deleteEmployeeSkill', {employeeId: this.employee.id, skillId: id})
    },
    handleFunctionCall (functionName, id) {
      this[functionName](id)
    },
    handleListCall (functionName) {
      return this[functionName]
    }
  },
  watch: {
    editRecord: function (val) {
      this.editRecord = val
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
    }
</style>
