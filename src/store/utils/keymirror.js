/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
export default function (obj) {
    let ret = {}
    let key

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            ret[key] = key
        }
    }
    return ret
}
