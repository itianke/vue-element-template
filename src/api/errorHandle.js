/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import store from 'store'

/**
    错误代码处理
*/
export function errorHandle(errCode) {
    if (!errCode) return
    console.log(errCode)
    switch (errCode) {
        // token 过期
        case 'isp.oauth.error.invalid_token':
            // reLogin()
            break
        default:
            break
    }
}
