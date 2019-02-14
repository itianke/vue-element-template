/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
// 状态管理
'use strict'

import Vue    from 'vue'
import Vuex   from 'vuex'
import { mutation } from './utils/vuexUtil'

// import modules
import common from './modules/common'
import demo from './modules/demo'

Vue.use(Vuex)

let state = {}
let mutations = mutation(state, {})
let store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: {},
    actions: {},
    modules: {
        common,
        demo
    }
})

export default store
