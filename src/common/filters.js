/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
/* 全局过滤函数 */
import dayjs from 'dayjs'

/**
 * 按格式进行日期过滤
 *
 * @export
 * @param {any} date
 * @param {string} format   // 格式
 * @returns {string}
 */
// 年月日
export function dateFormat(date, format = 'YYYY-MM-DD') {
    if (!date || !new Date(date)) return ''
    return dayjs(date).format(format)
}
