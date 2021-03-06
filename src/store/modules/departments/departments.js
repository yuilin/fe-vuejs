export default {
  state: {
    departments: [
      {
        id: 1,
        name: 'Department 1',
        manager: 1
      },
      {
        id: 2,
        name: 'Department 2',
        manager: 2
      }
    ],
    departmentsHeaderNames: [
      {
        name: 'Name'
      },
      {
        name: 'Manager'
      },
      {
        name: 'Employees'
      }
    ],
    departmentHeaderNames: [
      {
        name: 'Name'
      },
      {
        name: 'Surname'
      },
      {
        name: 'Position'
      },
      {
        name: 'Project'
      },
      {
        name: 'Skills'
      },
      {
        name: 'Actions',
        display: 'editable'
      }
    ]
  },
  mutations: {
    updateDepartment (state, payload) {
      state.departments.find(department => department.id === payload.departmentId).manager = payload.manager
    }
  },
  getters: {
    getDepartments: state => state.departments,
    getDepartmentsHeaderNames: state => state.departmentsHeaderNames,
    getDepartmentHeaderNames: state => state.departmentHeaderNames
  }
}
