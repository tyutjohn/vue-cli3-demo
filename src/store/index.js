/*
 * @Author: johnwang
 * @since: 2019-11-02 00:29:39
 * @lastTime: 2019-11-02 16:24:39
 * @LastAuthor: Do not edit
 * @Github: https://github.com/tyutjohn
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser:null,
    isLogin:false,
    token:''
  },
  getters,
  mutations,
  actions
})
