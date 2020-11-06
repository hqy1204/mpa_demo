<!-- 首页 -->
<template>
  <div class="m-view-mainPage">
    <div class="menu"
         v-show="showMenu">
      <div class="module"
           v-for="(item, index) in menuList"
           :key="index"
           @click="handleGo(item)">
        <div>
          <div class="part">
            <img class="icon"
                 :src="item.imgUrl"
                 alt />
            <i class="tagname">{{ item.name }}</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import utils from "@/public/utils.js";

export default {
  name: "mainPage",
  data() {
    return {
      showMenu: true,
      userInfo: {},
      menuList: [
        {
          id: "1",
          code: "page1",
          name: "页面1",
          url: "/page1",
          show: true,
          imgUrl: "./static/image/intPoint.png"
        },
        {
          id: "2",
          code: "page2",
          name: "页面2",
          url: "/page2",
          show: true,
          imgUrl: "./static/image/extPoint.png"
        },
      ]
    };
  },
  methods: {
    // 主页页面跳转
    handleGo(item) {
      this.$router.push(item.url);
    },
    // 获取CC用户信息
    getCCUser() {
      if (this.$constant.appenv == 'dev') {
        window.userInfo = { "sapnum": "00045685", "oanum": "102512", "name": "吴宇扬", "SapVkorg": "1010", "UserID": 64989, "UserType": 1 }
        this.userInfo = window.userInfo
      } else {
        this.userInfo = utils.getCCUser();
        window.userInfo = utils.getCCUser();
      }
    }
  },
  created() {
    this.getCCUser();
  }
};
</script>


<style lang="less" >
.m-view-mainPage {
  .menu {
    padding: 10px;
    box-sizing: border-box;
    .module {
      float: left;
      .part {
        width: 223px;
        height: 76px;
        padding-top: 22px;
        padding-bottom: 22px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        justify-items: center;
        align-items: center;
        align-content: space-around;
        background-color: #fff;
        margin-right: 10px;
        margin-bottom: 10px;
        &:nth-child(3n + 3) {
          margin-right: 0 !important;
        }

        .icon {
          display: inline-block;
          width: 48px;
          height: 48px;
          font-size: 48px;
          margin-bottom: 12px;
        }
        .tagname {
          display: inline-block;
          font-style: normal;
          font-size: 16rpx;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>