const {
    APP_ENV
} = process.env

// 配置系统的id
let systemId = {
    // 开发环境
    dev: 629,
    // 测试环境
    qas: 196,
    // 开发环境
    app: 192
}
const constant = {
    // 程序环境(app|qas|dev)
    appenv: APP_ENV ? APP_ENV : 'dev',
};
constant.systemId = systemId[constant.appenv]

export default constant;