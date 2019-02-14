/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import 'babel-polyfill'
import 'vue-svgicon/dist/polyfill'
import Vue from 'vue'

import 'normalize.css/normalize.css'
import 'ui/element'
import 'style/common/element/theme/index.css'
import './permission'

import router from './router'
import store from 'store'
import App from 'src/views/app'
import 'src/style/app.scss'
import meta from 'vue-meta'

// import all icons
import * as svgicon from 'vue-svgicon'
import './views/icons'
Vue.use(svgicon, {
    tagName: 'icon'
})

Vue.use(meta, {
    keyName: 'metaInfo'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: (h) => h(App)
})
