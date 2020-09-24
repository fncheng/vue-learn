import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'vuex123',
    count: 0,
    msg: '',
    status: 0,
  },
  getters: {
    getStatus(state) {
      return state.status
    },
  },
  mutations: {
    increment(state, value) {
      // setTimeout(() => {
      //   state.msg = value
      // }, 1000)
      // 变更状态
      state.msg = value
      state.count++
    },
    setStatus(state, data) {
      state.status = data
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
  },
  modules: {},
  strict: true,
})
