/* 
封装axios拦截器
*/
import axios from 'axios'

const instance = axios.create({
    baseURL: '/api', //公共的基础路径 一般由请求服务器地址跟api组成
    headers: { // token就不行 登录接口不用
    }
})

//设置请求拦截器
instance.interceptors.request.use(
        (config) => {
            //config请求的配置对象 有请求地址、请求参数、请求方式 都会在这找
            //修改config用来添加公共的请求参数
            /* if (token) {
                config.headers.token = { token }
            } */
            return config
        },
        // 初始化时是成功的promise.resolve（）返回的是成功的promise，
        // ()=>{}失败的promise函数
    )
    //设置响应拦截器
instance.interceptors.response.use(
    //成功：当响应状态码是2xx开头的时候触发响应拦截器
    (response) => {
        //响应成功代表返回的是成功的结果，只是代表有响应的结果而已
        //功能成功看code 成功200 失败201 202
        //判断响应的code是否是200
        // response的数据结构:{headers:{},status:{},request:{},
        // data:{响应的数据 data:{nickName: "Administrator",name: "Admin",token: 90 aa16f24d04c7d882051412f9ec45b "}}
        if (response.data.code === 200) {
            return response.data.data
        }

        //来到这个就是功能失败了---返回失败的promise        
        return Promise.reject(response.data.message)
    },
    //错误：当响应状态码不是2xx开头
    (error) => {
        console.dir(error);
        const message = error.message || '网络错误'
        return Promise.reject(message)
    }
)

export default instance;