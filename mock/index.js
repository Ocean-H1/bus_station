const Mock = require('mockjs')


Mock.setup({
    timeout: 200 - 600
})

// 用户登录接口
Mock.mock('/permissions/login', "post", (config) => {
    // 获得入参
    let params = JSON.parse(config.body)
    // 判断管理员身份
    if (params.phoneNumber === '18191106120' && params.password === "123456") {
        return Mock.mock({
            code: 10000,
            data: {
                SessionId: '@id()'
            },
            message: 'success'
        })
    }
    return {
        code: 10001,
        data: null,
        message: '账号或密码错误'
    }
})


export default Mock
