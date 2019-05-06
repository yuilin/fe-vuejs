export default {
  state: {
    skillTypes: [
      {
        id: 1,
        name: 'Markup'
      },
      {
        id: 2,
        name: 'Framework'
      },
      {
        id: 3,
        name: 'Programming language'
      }
    ]
  },
  getters: {
    getSkillTypes: state => state.skillTypes
  }
}
