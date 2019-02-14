/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import Vue from 'src/views/base'
import { Component } from 'vue-property-decorator'
import template from './login.vue'

@Component({
    name: 'login',
    mixins: [template]
})
export default class Login extends Vue {
    isLoading = false
    formName = 'loginForm'
    defForm = {
        username: '',
        password: ''
    }
    form = { ...this.defForm }
    rules = {
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
        ]
    }

    // 提交登录
    async submit() {
        if (this.isLoading || !await this.validate(this.formName)) return
        this.isLoading = true
        try {
            // ...
            this.goTo('/table/normal')
            this.isLoading = true
        } catch (error) {
            console.log(error)
            this.isLoading = false
        }
    }
}
