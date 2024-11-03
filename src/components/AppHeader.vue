<template>
  <div class="header">
    <!-- 新增菜单项到顶部导航栏 -->
    <el-menu class="top-menu" mode="horizontal" :router="true">
      <el-menu-item v-for="route in menuRoutes" :key="route.name" :index="route.path">
        <el-icon><component :is="route.meta.icon" /></el-icon>
        {{ route.meta.title }}
      </el-menu-item>
    </el-menu>
  </div>
</template>
  
<script setup>
import { ref } from "vue";
import routes from "../router/routes"; // 从 routes.js 引入菜单信息

const menuRoutes = ref(
  routes.children.filter(route => route.meta) // 只展示有 meta 的菜单项
);
</script>

<style lang="scss">
.header {
  display: flex; /* 使用 flex 布局 */
  justify-content: space-between; /* 在两端对齐 */
  align-items: center; /* 垂直居中 */
  width: 100%;
  height: 10vh; /* 设置高度 */
  color: #fff;
  background-color: #4A90E2; /* 设置为蓝色背景 */
}

.top-menu {
  flex-grow: 1; /* 占据剩余空间 */
  background-color: transparent !important;
  display: flex;
  justify-content: center; /* 居中对齐菜单项 */
  align-items: center;
  color: #fff;
}

.el-menu-item {
  padding: 0 20px;
  color: #fff !important; /* 强制设定菜单字体颜色 */
  display: flex;
  align-items: center;
  font-size: 21px !important; /* 强制设定菜单字体大小 */
  transition: background-color 0.3s ease;
}

.el-menu-item:hover {
  background-color: rgba(248, 206, 89, 1) !important; /* 激活项的背景颜色为黄色 */
}

.el-menu-item.is-active {
  background-color: #f8ce59 !important; /* 激活项的背景颜色为黄色 */
}

.el-menu-item .el-icon {
  margin-right: 8px;
}
</style>
