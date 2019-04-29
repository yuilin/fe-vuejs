export default {
  state: {
    skillTags: [
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
    getSkillTags: state => state.skillTags
  }
}
