import Vue from 'vue'
import Vuex from 'vuex'
import employees from './modules/employees'
import skills from './modules/skills'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    employees,
    skills,
    auth
  }
})
