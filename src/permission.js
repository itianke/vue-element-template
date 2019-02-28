/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done() // 结束Progresss
})
