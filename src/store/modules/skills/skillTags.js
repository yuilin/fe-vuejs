export default {
  state: {
    skillTags: [
      'Markup',
      'Framework',
      'Programming language'
    ]
  },
  getters: {
    getSkillTags: state => state.skillTags
  }
}
