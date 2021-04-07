import Vue from 'vue'
import Vuex from 'vuex'
import { SET_STATUS } from '@/store/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'vuex123',
    count: 0,
    msg: '',
    status: 0,
  },
  getters: {
    getName(state) {
      return state.name
    },
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
    [SET_STATUS](state, data) {
      state.status = data
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    setStatusAsync({ commit }, value) {
      setTimeout(() => {
        commit(SET_STATUS, value)
      }, 2000)
    },
  },
  modules: {},
  strict: true,
})
