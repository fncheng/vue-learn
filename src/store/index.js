import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'vuex123',
    count: 0
  },
  mutations: {
    increment(state) {
      // 变更状态
      state.count++
    }
  },
  actions: {},
  modules: {}
})
