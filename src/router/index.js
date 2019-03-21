import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ChangePassword from '@/components/ChangePassword'
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
      path: '/changePassword',
      component: ChangePassword
    },
    {
      path: '/employees/',
      component: Employees
    },
    {
      path: '/employee/',
      component: Employee
    },
    {
      path: '/skills/',
      component: Skills
    },
    {
      path: '/skill',
      component: Skill
    }
  ]
})
