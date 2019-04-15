import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Employees from '@/components/employees/Employees'
import Employee from '@/components/employees/Employee'
import Skills from '@/components/skills/Skills'
import Skill from '@/components/skills/Skill'
import Projects from '@/components/projects/Projects'
import Project from '@/components/projects/Project'
import Departments from '@/components/departments/Departments'
import Department from '@/components/departments/Department'

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
    },
    {
      path: '/departments/',
      component: Departments
    },
    {
      path: '/departments/:id',
      component: Department
    },
    {
      path: '/projects/',
      component: Projects
    },
    {
      path: '/projects/:id',
      component: Project
    }
  ]
})
