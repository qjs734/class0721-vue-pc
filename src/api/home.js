import request from '@utils/request'
import mockRequest from '@utils/mockRequest'

//封装一个发送请求的功能函数
export const reqGetBaseCategoryList = () => {
    //将request返回值返回出去 外面可以接受request返回值promise对象，通过这个可以判断请求成功还是请求失败
    return request({
        method: 'GET',
        url: '/product/getBaseCategoryList',
        /* data: {

        }, */ //放置请求体参数，通常是post请求
        // params: {} //放置查询字符串参数，通常是get请求
    })
}

//获取首页轮播图数据
export const reqGetBanners = () => {
    //将request返回值返回出去 外面可以接受request返回值promise对象，通过这个可以判断请求成功还是请求失败
    return mockRequest({
        method: 'GET',
        url: '/banners',
        /* data: {

        }, */ //放置请求体参数，通常是post请求
        // params: {} //放置查询字符串参数，通常是get请求
    })
}


//获取楼层数据
export const reqGetFloors = () => {
    //将request返回值返回出去 外面可以接受request返回值promise对象，通过这个可以判断请求成功还是请求失败
    return mockRequest({
        method: 'GET',
        url: '/floors',
        /* data: {

        }, */ //放置请求体参数，通常是post请求
        // params: {} //放置查询字符串参数，通常是get请求
    })
}