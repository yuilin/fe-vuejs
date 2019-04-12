export default {
  state: {
    departments: [
      'Market Unit',
      'Automotion'
    ]
  },
  getters: {
    getDepartments: state => state.departments
  }
}
