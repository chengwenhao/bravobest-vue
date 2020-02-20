<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
           active-text-color="red" @select="handleSelect">
    <el-menu-item v-for="(item,index) in navList" :key="index" :index="item.url">
      {{item.navName}}
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'NavMenu',
    data() {
      return {
        activeIndex: '1',
        navList: [
          {url: '/index', navName: "首页"},
          {url: '/user', navName: '员工管理'},
          {url: '/org', navName: '部门管理'},
          {url: '/mine', navName: '个人中心'}
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>
