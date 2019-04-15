import Vue from 'vue'
import Vuex from 'vuex'
import employees from './modules/employees/employees'
import skills from './modules/skills/skills'
import auth from './modules/common/auth'
import filter from './modules/common/filter'
import departments from './modules/departments/departments'
import employeePositions from './modules/employees/employeePositions'
import projects from './modules/projects/projects'
import skillCategories from './modules/skills/skillCategories'
import skillTags from './modules/skills/skillTags'
import skillTypes from './modules/skills/skillTypes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    employees,
    skills,
    auth,
    filter,
    departments,
    employeePositions,
    projects,
    skillCategories,
    skillTags,
    skillTypes
  }
})
