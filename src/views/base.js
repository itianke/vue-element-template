/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import Vue from 'vue'
import api from 'api'
import config from 'common/config'
import { MessageBox } from 'element-ui'
import { checkAcls } from 'common/acl'

export default class Base extends Vue {
    api = api
    config = config

    // 页面跳转
    goTo (options) {
        this.$router.push(options)
    }

    /**
     * sleep 定时器
     * @param {number} time
     * @returns {Promise}
     */
    sleep(time = 0) {
        return new Promise((resolve) => {
            let timeId = setTimeout(function () {
                resolve(timeId)
            }, time)
        })
    }

    /**
     * alert
     * @param {string} message  提示内容
     * @param {string} title    标题
     * @param {object} options  alert参数
     */
    alert(message, title = '提示', options) {
        let defOpts = {
            confirmButtonText: '确定',
            confirmButtonClass: 'el-button--primary',
            customClass: 'message-box',
            type: ''
        }
        defOpts = { ...defOpts, ...options }
        return new Promise(async (resolve) => {
            try {
                await MessageBox.alert(message, title, defOpts)
            } catch (error) {
                resolve(false)
                return
            }
            resolve(true)
        })
    }

    /**
     * confirm
     * @param {string} message  确认内容
     * @param {string} title    标题
     * @param {object} options  confirm参数
     * @return {Promise}
     * @example
     *  this.confirm('确认').then(confirm => {
     *      if (confirm) {
     *          ...
     *      }
     *  })
     */
    confirm(message, title = '提示', options) {
        let defOpts = {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            confirmButtonClass: 'el-button--danger',
            customClass: 'message-box',
            type: 'warning'
        }
        defOpts = { ...defOpts, ...options }
        return new Promise(async (resolve) => {
            try {
                await MessageBox.confirm(message, title, defOpts)
            } catch (error) {
                resolve(false)
                return
            }
            resolve(true)
        })
    }

    /**
     * 将 map 转换成 select 选项
     * @param {*} obj
     */
    mapToOptions(obj) {
        let res = []
        Object.keys(obj).forEach((key) => {
            res.push({
                value: String(key),
                label: obj[key]
            })
        })
        return res
    }

    /**
     * validate form
     * @param formName
     */
    validate(refName) {
        return new Promise((resolve) => {
            let ref = refName
            if (typeof refName === 'string') {
                ref = this.$refs[refName]
            }
            ref.validate((valid) => {
                resolve(valid)
            })
        })
    }

    /**
     * 权限判断
     * @param {string[]} acls     权限数组
     * @returns {Boolean}
     * @example
     *      <span v-if="checkAcls(['permission_name', ...])">
     *          ...
     *      </span>
     */
    checkAcls(acls = []) {
        return checkAcls(acls)
    }
}
