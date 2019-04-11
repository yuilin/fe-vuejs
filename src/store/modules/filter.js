export default {
  state: {
    filter1: null,
    filter2: null,
    filter3: null,
    filter4: null
  },
  mutations: {
    setFilter1 (state, payload) {
      state.filter1 = payload
    },
    setFilter2 (state, payload) {
      state.filter2 = payload
    },
    setFilter3 (state, payload) {
      state.filter3 = payload
    },
    setFilter4 (state, payload) {
      state.filter4 = payload
    }
  },
  getters: {
    getFilter1: state => state.filter1,
    getFilter2: state => state.filter2,
    getFilter3: state => state.filter3,
    getFilter4: state => state.filter4
  }
}
