<script setup>
import { computed } from "vue";
import MenuRoutes from "../router/routes.js"; // 仍保留路由信息
import { useRoute } from "vue-router";

// 移除与侧边栏相关的store引用
const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
});

</script>

<template>
    <!-- 将菜单项移到适当位置，例如顶部导航栏 -->
    <div class="menu-bar">
        <el-menu
            :default-active="onRoutes"
            class="menu-bar-el-menu"
            background="radial-gradient(ellipse farthest-corner at 50% 0%, #031C30, #050C38)"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
            mode="horizontal"
        >
            <template v-for="(item, index) in MenuRoutes.children">
                <el-sub-menu
                    :index="item.path"
                    v-if="item.children"
                    :key="index"
                >
                    <template v-if="item.children">
                        <el-menu-item-group
                            v-for="(sub_item, sec_index) in item.children"
                            :key="sec_index"
                        >
                            <el-menu-item
                                :index="item.path + '/' + sub_item.path"
                            >
                                {{ sub_item.name }}
                            </el-menu-item>
                        </el-menu-item-group>
                    </template>

                    <template #title>
                        <el-icon>
                            <component :is="item.meta.icon"></component>
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                </el-sub-menu>
                <el-menu-item v-else :index="item.path" :key="'item' + index">
                    <el-icon>
                        <component :is="item.meta.icon"></component>
                    </el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<style scoped>
/* 修改为顶部菜单栏样式 */
.menu-bar {
    width: 100%;
    height: 7vh;
    /* background: radial-gradient(ellipse farthest-corner at 50% 0%, rgb(5, 16, 71), #050C38); */
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu-bar-el-menu {
    width: auto;
    background: none; /* 设置背景透明，继承上层背景 */
}

.el-menu-item, .el-submenu__title {
    background: none !important; /* 确保菜单项背景透明 */
    color: #fff;
}

.el-menu-item.is-active {
    background-color: #ffc107 !important; /* 设置激活状态颜色 */
}

</style>
