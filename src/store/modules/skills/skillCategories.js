export default {
  state: {
    skillCategories: [
      {
        id: 1,
        name: 'Backend'
      },
      {
        id: 2,
        name: 'Frontend'
      }
    ]
  },
  getters: {
    getSkillCategories: state => state.skillCategories
  }
}
