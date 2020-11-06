import constant from "../public/constant"

const env = {
    dev: {
        // 开发服务器
        mt: 'http://dev.mt.mtweb.172.16.90.27.xip.io/',
        cc: 'http://ccapi.lesso.com:8306/',
        cap: 'http://dev.cap.cap-web.172.16.90.27.xip.io/cap/',
    },
    qas: {
        // 测试服务器
        mt: 'http://uat.mt.mtweb.172.16.90.28.xip.io/',
        cc: 'http://ccapi.lesso.com:8306/'
    },
    app: {
        // 正式服务器
        mt: 'http://192.168.3.88:30021/',
        cc: 'http://ccapi.lesso.com:8306/'
    }
};

export default env[constant.appenv];