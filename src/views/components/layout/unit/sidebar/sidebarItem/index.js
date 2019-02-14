import Vue from 'src/views/base'
import { Component, Prop } from 'vue-property-decorator'
import template from './sidebarItem.vue'

@Component({
    name: 'components-layout-unit-sidebar-sidebaritem',
    mixins: [template],
    components: {
    }
})
export default class SidebarItem extends Vue {
    @Prop({
        type: Array,
        default: []
    })
    routes

    @Prop({
        type: Boolean,
        default: false
    })
    isNest

    roles = []

    // 检查角色权限
    /**
     * checkRole
     * @param { Array } role     角色类型总集
     * @param { Array } allRole  页面可访问的角色类型总集
     * @return {Boolean}
     */
    checkPageRole(allRole) {
        if (!allRole) return true
        if (!this.roles || !Array.isArray(this.roles)) return false

        if (!Array.isArray(allRole)) {
            return this.roles.indexOf('' + allRole) > -1
        }

        let acls = 0
        for (let role of allRole) {
            if (this.roles.indexOf(role) > -1) acls++
        }
        return acls > 0
    }
}
