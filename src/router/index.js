import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Employees from '@/components/employees/Employees'
import Employee from '@/components/employees/Employee'
import Skills from '@/components/skills/Skills'
import Skill from '@/components/skills/Skill'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/employees/',
      component: Employees
    },
    {
      path: '/employees/:id',
      component: Employee
    },
    {
      path: '/skills/',
      component: Skills
    },
    {
      path: '/skills/:id',
      component: Skill
    }
  ]
})
