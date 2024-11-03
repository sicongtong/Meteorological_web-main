<script setup>
import AppHeader from "@/components/AppHeader.vue"; // 只保留 AppHeader

// 移除侧边栏相关的引用
</script>

<template>
    <div class="common-layout">
        <!-- 顶部导航栏 -->
        <AppHeader/>
        
        <!-- 内容区域 -->
        <div class="content-box">
            <el-main class="content">
                <router-view />
            </el-main>
        </div>
    </div>
</template>

<style>
.common-layout {
    height: 100%;
    width: 100%;
}

.content-box {
    /* 移除了与侧边栏相关的样式逻辑 */
    position: absolute;
    left: 0; /* 使内容从页面最左侧开始 */
    right: 0;
    top: 10vh; /* 保持顶部导航栏的高度 */
    bottom: 0;
    padding-bottom: 30px;
    /* background: radial-gradient(ellipse farthest-corner at 50% 0%, #410D3B, rgb(7, 19, 82), #050C38); */
    /* 删除背景色 */
    background-size: cover;
}

.content {
    width: auto;
    height: 100vh;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
}
</style>
