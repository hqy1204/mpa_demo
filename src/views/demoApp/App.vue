<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
/**
 * @group gridExample
 * 表格示例 入口页面
 */
export default {
  name: 'App',
  data () {
    return {}
  },
  methods: {
            /**
         * @vuese
         * 获取权限，使用路由传入的 parentId 
         */
        test(){
          
        }
  }
};
</script>

<style lang="less">
#app {
  background-color: #f5f7fa;
}

</style>