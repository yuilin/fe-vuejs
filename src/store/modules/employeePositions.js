export default {
  state: {
    positions: [
      'Junior Test Engineer',
      'Test Engineer',
      'Senior Test Engineer',
      'Junior Developer',
      'Developer',
      'Senior Developer',
      'Junior Analyst',
      'Analyst',
      'Senior Analyst',
      'Junior Architect',
      'Architect',
      'Senior Architect',
      'Project Manager',
      'Department Manager'
    ]
  },
  getters: {
    getPositions: state => state.positions
  }
}
