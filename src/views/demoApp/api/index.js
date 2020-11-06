import req from './req'
import course_api from '../pages/api';
let api = {
    getDictionaryByType: (data) => req({ //查询地点、标签备注
        baseUrl: 'mt',
        method: 'post',
        url: `dictionary/getDictionaryByType?type=${data.type}`,
        params: data
    }),

    getFunctionList: (data) => req({ //功能列表
        baseUrl: 'mt',
        method: 'get',
        url: 'supportType/getSupportTypeList',
        params: data
    }),
    getRoomList: (data) => req({ //会议室列表
        baseUrl: 'mt',
        method: 'post',
        url: `/meeting/getMeetingList`,
        params: data
    }),
    submitData: (data) => req({ //提交数据
        baseUrl: 'mt',
        method: 'post',
        url: '/meeting/applyMeeting',
        params: data,
    }),
    getUserInfo: (data) => req({ //联系电话和申请部门
        baseUrl: 'cc',
        method: 'post',
        url: '/iMUser/getUserInfo',
        params: data,
    }),
}

api = Object.assign(
    api,
    course_api,
);


export default api