<script setup>
import { ref, onMounted } from "vue";
import vAppRailwayLine from '@/components/AppRailwayLine.vue';
import vAppLiveStatistics from '@/components/AppLiveStatistics.vue';

const isRealTimeStatsVisible = ref(true);
const isShowLinesVisible = ref(true);

const toggleRealTimeStats = () => {
  isRealTimeStatsVisible.value = !isRealTimeStatsVisible.value;
};

const toggleShowLines = () => {
  isShowLinesVisible.value = !isShowLinesVisible.value;
};

onMounted(() => {
  const map = new BMapGL.Map('baidu-map'); // 使用 BMapGL 创建地图实例
  const point = new BMapGL.Point(116.404, 39.915); // 设置地图中心点
  map.centerAndZoom(point, 6); // 初始化地图，设置缩放级别
  map.enableScrollWheelZoom(true); // 开启滚轮缩放功能

  // 使用自定义地图样式，调整铁路线条的颜色和粗细
  map.setMapStyleV2({
    styleId: '6bc79e41cb671da62fd01b78d6b7171e' // 替换为你的自定义样式ID
  });

  // 添加控件
  map.addControl(new BMapGL.ScaleControl()); // 比例尺
  map.addControl(new BMapGL.ZoomControl()); // 缩放控件
});
</script>

<template>
  <div class="main-view">
    <!-- 百度地图容器 -->
    <div id="baidu-map" class="map-container"></div>

    <!-- 顶部按钮切换背景 -->
    <div class="top-buttons">
      <button @click="changeBackground('/中国高速铁路网络示意图.png')">线路</button>
      <button @click="changeBackground('/降水.png')">降水</button>
      <button @click="changeBackground('/大风.png')">大风</button>
      <button @click="changeBackground('/雷电.png')">雷电</button>
    </div>

    <!-- 实况统计表 -->
    <div class="floating-box" style="top: 10%; left: 1%;">
      <div class="card-header" @click="toggleRealTimeStats">实况统计表</div>
      <el-card v-if="isRealTimeStatsVisible">
        <vAppLiveStatistics />
      </el-card>
    </div>

    <!-- 显示线路 -->
    <div class="floating-box" style="top: 10%; right: 1%;">
      <div class="card-header" @click="toggleShowLines">显示线路</div>
      <el-card v-if="isShowLinesVisible">
        <vAppRailwayLine />
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.main-view {
  height: 100vh;
  position: relative;
}

.map-container {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0; /* 确保地图在底部 */
}

.top-buttons {
  display: flex;
  justify-content: center;
  margin: 20px 40px;
  position: absolute;
  top: 10px; /* 距离页面顶部一定距离 */
  z-index: 1000; /* 确保按钮置顶 */
  gap: 15px; /* 按钮间留空 */
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #62a3ee;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.floating-box {
  position: absolute;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 450px;
}

.card-header {
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: white;
  color: black;
  padding: 10px;
  text-align: center;
}
</style>
