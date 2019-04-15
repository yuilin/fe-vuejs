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
    ]
  },
  getters: {
    getDepartments: state => state.departments,
    getDepartmentsHeaderNames: state => state.departmentsHeaderNames
  }
}
