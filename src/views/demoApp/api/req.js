import { http } from '@lesso/common-http'
import env from './env';
import constant from '../public/constant';


/**
 * url: 地址
 * method: 请求方法
 * params: 参数
 * timeout: 超时时间
 * isOriginalGET: 是否传统get传参
 */

const logoutCallback = (info) => {
  
} 

const changeJwtCallback = (jwt) => {
 
}

const noAuthCallback = (info) => {
 
}



const req = ({ baseUrl, method, url, params, timeout, isOriginalGET, isLogin }) => {
    let options={
        url: env[baseUrl] + url, 
        method: method, 
        params: params, 
        timeout: timeout, 
        isOriginalGET: isOriginalGET, 
        systemId: constant.systemId,
        deviceId: window.fingerprint,
        logoutCallback: logoutCallback,
        changeJwtCallback: changeJwtCallback,
        noAuthCallback: noAuthCallback,
    };

    // // 非登录接口加鉴权
    // if(!isLogin) {
    //   let userData = getStorage('userData');
    //   // options.jwt = getStorage('token');
    //   options.jwt = userData.jwt;
    //   options.userId = userData.user.id;
    // }
    return http(options);
}

export default req;