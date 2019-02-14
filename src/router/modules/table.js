
/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import Layout from 'src/views/components/layout'

function getView(viewName, title) {
    return (resolve, reject) => {
        require.ensure([], (require) => {
            let modules = require(`src/views/page/table/${viewName}`)
            modules.default.options.metaInfo = { title }
            resolve(modules)
        }, reject, 'table')
    }
}

let routes = {
    name: 'table',
    path: '/table',
    redirect: '/table/normal',
    component: Layout,
    meta: {
        title: '表格',
        icon: 'vue'
    },
    children: [
        // 常规表格
        {
            name: 'normal',
            path: 'normal',
            meta: {
                title: '常规表格',
                icon: 'vue'
            }
        }
    ]
}

routes.children.forEach((v) => {
    if (!v.redirect && !v.component) {
        v.component = getView(v.name, v.meta.title)
    }
})

export default [routes]
