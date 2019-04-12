export default {
  state: {
    categories: [
      'Backend',
      'Frontend'
    ]
  },
  getters: {
    getCategories: state => state.categories
  }
}
