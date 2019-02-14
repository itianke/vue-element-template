/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
let allEnv = {
    'development': './dev',
    'sit': './sit',
    'production': './deploy'
}
let env = allEnv[process.env.NODE_ENV]
let config = require(`${env}`).default
export default config
