import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './headerBar.vue'

@Component({
    name: 'components-layout-headerbar',
    mixins: [template],
    components: {
    }
})
export default class HeaderBar extends Vue {
    user = {}

    logout() {
    }

    userLogout() {
        this.confirm('确定要退出登录吗？', '退出登录').then(isOK => {
            if (isOK) this.logout()
        })
    }

    created() {
    }
}
