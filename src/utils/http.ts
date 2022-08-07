// 封装请求
import axios from 'axios'
// 请求
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
const http = axios.create({
    baseURL: process.env.VUE_APP_REQUEST_URL,
    timeout: 6000
})
// // 请求拦截
// http.interceptors.request.use(config => {
//     //请求头设置
//     let token = localStorage.getItem('token') || ''
//     config.headers.Authorization = token
//     return config
// }, err => {
//     console.log(err);
// })
// 响应拦截
http.interceptors.response.use(arr => {
    return arr.data.data
}, err => {
    console.log(err);
})
// 返出
export default http