export default {
  state: {
    id: null
  },
  mutations: {
    setId (state, payload) {
      state.id = payload
    }
  },
  getters: {
    getId: state => state.id
  }
}
