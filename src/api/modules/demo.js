
import { post, get } from '../http'

/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
export default {
    // 获取接口数据
    getList(data) {
        return get('/page/list', data)
    },

    // 提交信息
    sendInfo(data) {
        return post('/user/info', data)
    }
}
