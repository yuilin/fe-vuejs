export default {
  state: {
    projects: [
      'De-mail',
      'MAPS',
      'DQM'
    ]
  },
  getters: {
    getProjects: state => state.projects
  }
}
