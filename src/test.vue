<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="layoutisCollapse ? '64px':'200px'" class="elaside">
	    <div v-show="!layoutisCollapse" class="elaside-head">
          <div>
            <img src="./../assets/logo.png" alt="logo">
            <span style="elaside-head">后台管理系统</span>
          </div>
        </div>
	   <div v-show="layoutisCollapse" class="elaside-head">
          <div>
            <img src="./../assets/logo.png" alt="logo">
          </div>
        </div>
        <div class="elaside-head-line" /> 
		<!-- <el-divider /> -->
	  <el-menu
		class="el-menu-vertical-demo"
		:collapse="layoutisCollapse"
		:unique-opened="true"
		:collapse-transition="false"
		background-color="#222832"
        text-color="#fff"
		:router="true"
		>
		<el-sub-menu index="1">
            <template #title>
              <el-icon><user /></el-icon><span>Dashboard</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/introduce"><el-icon><tools /></el-icon>系统介绍</el-menu-item>
              <el-menu-item index="/dashboard"><el-icon><house /></el-icon>Dashboard</el-menu-item>
              <el-menu-item index="/about"><el-icon><tools /></el-icon>关于我们</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><tools /></el-icon><span>首页配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/swiper"><el-icon><tools /></el-icon>轮播图配置</el-menu-item>
              <el-menu-item index="/hot"><el-icon><tools /></el-icon>热销商品配置</el-menu-item>
              <el-menu-item index="/new"><el-icon><tools /></el-icon>新品上线配置</el-menu-item>
              <el-menu-item index="/recommend"><el-icon><tools /></el-icon>为你推荐配置</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><ticket /></el-icon><span>模块管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/category"><el-icon><tools /></el-icon>分类管理</el-menu-item>
              <el-menu-item index="/good"><el-icon><tools /></el-icon>商品管理</el-menu-item>
              <el-menu-item index="/guest"><el-icon><tools /></el-icon>会员管理</el-menu-item>
              <el-menu-item index="/order"><el-icon><house /></el-icon>订单管理</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><unlock /></el-icon><span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/account"><el-icon><lock /></el-icon>修改密码</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon><burger /></el-icon><span>模块案例</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/transfer"><el-icon><tools /></el-icon>Transfer穿梭框</el-menu-item>
              <el-menu-item index="/input"><el-icon><tools /></el-icon>Input</el-menu-item>
              <el-menu-item index="/table"><el-icon><tools /></el-icon>Table</el-menu-item>
              <el-menu-item index="/table01"><el-icon><tools /></el-icon>Table01</el-menu-item>
              <el-menu-item index="/table01copy"><el-icon><tools /></el-icon>Table01copy</el-menu-item>
              <el-menu-item index="/life"><el-icon><tools /></el-icon>life</el-menu-item>
              <el-menu-item index="/life01"><el-icon><tools /></el-icon>life01</el-menu-item>
			  <el-menu-item index="/about"><el-icon><tools /></el-icon>about</el-menu-item>
              <el-menu-item index="/about01"><el-icon><tools /></el-icon>about01</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
		</el-menu>
    </el-aside>
      <el-container>
        <el-header>
		  <div class="elheader">
			  <el-radio-group v-model="layoutisCollapse" style="float:left; margin-top: 10px;">
				<el-icon v-show="!layoutisCollapse" @click="layoutisCollapse=true" style="font-size:32px;"><Fold/></el-icon>
				<el-icon v-show="layoutisCollapse" @click="layoutisCollapse=false" style="font-size:32px;"><Expand/></el-icon>
			  </el-radio-group>
			  <div style="float:left;">Header</div>
			  <div style="float:right;">
				<div style="font-size:18px;"><span>欢迎<el-icon><Avatar /></el-icon></span>【独秀】<span @click="layoutElHeaderLogout">退出登录<el-icon><caret-bottom /></el-icon></span></div>
			  </div>
		  </div>
		</el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer>
		  <div class="elfooter">
			<div class="left">Copyright © 2019-2022 十三. All rights reserved.</div>
			<div class="right">
			  <a target="_blank" href="https://github.com/newbee-ltd/vue3-admin">vue3-admin Version 3.0.0</a>
			</div>
		  </div>
		</el-footer>
      </el-container>
    </el-container>
  </div>
</template>



<script setup>
import { ref } from 'vue'
import { Document, Menu, Location, Setting} from '@element-plus/icons-vue'

const layoutisCollapse = ref(false)

const layoutElHeaderLogout = ()=>{
  console.log("点击了退出登录！");
}



</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.elaside-head-line {
  border-top: 1px solid hsla(0,0%,100%,.05);
  border-bottom: 1px solid rgba(0,0,0,.2);
}
  
.el-menu-vertical-demo {
  min-height: 600px;
}
.el-menu {
  border-right: none!important;
}
.el-submenu {
  border-top: 1px solid hsla(0, 0%, 100%, .05);
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}

.elaside {
  background-color: #222832;
  overflow: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.elaside::-webkit-scrollbar {
  display: none;
}
.elaside-head {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.elaside-head > div {
  display: flex;
  align-items: center;
}
.elaside-head img {
  width: 40px;
  height: 40px;
  argin-left: 8px;
  margin-right: 8px;
}
.elaside-head span {
  font-size: 20px;
  color: #ffffff;
}



.elheader {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #e9e9e9;
  align-items: center;
}

.elfooter {
  height: 50px;
  border-top: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>