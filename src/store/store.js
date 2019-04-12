import Vue from 'vue'
import Vuex from 'vuex'
import employees from './modules/employees'
import skills from './modules/skills'
import auth from './modules/auth'
import filter from './modules/filter'
import departments from './modules/departments'
import employeePositions from './modules/employeePositions'
import projects from './modules/projects'
import skillCategories from './modules/skillCategories'
import skillTags from './modules/skillTags'
import skillTypes from './modules/skillTypes'

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
