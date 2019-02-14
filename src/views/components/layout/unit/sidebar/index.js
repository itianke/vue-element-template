import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './sidebar.vue'
import { Store as ComStore } from 'store/modules/common'

import SidebarItem from './sidebarItem'

@Component({
    name: 'components-layout-unit-sidebar',
    mixins: [template],
    components: {
        SidebarItem
    }
})
export default class Sidebar extends Vue {
    @ComStore.getter('sidebar') sidebar

    get routes() {
        return this.$router.options.routes
    }

    created() {
    }
}
