<template>
  <div class="weather-map">
    <h2>  XX高铁沿线气象危机状况实时地图分布</h2>
    <div id="baidu-map" class="map-container"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // 创建百度地图实例
  const map = new BMapGL.Map("baidu-map");
  
  // 设置地图中心点和初始比例尺
  const centerPoint = new BMapGL.Point(100.404, 24.915); // 设置关注点为北京
  map.centerAndZoom(centerPoint, 8); // 设置缩放级别为10
  
  // 启用鼠标滚轮缩放
  map.enableScrollWheelZoom(true);

  // 设置自定义地图样式（如使用自定义的风格）
  map.setMapStyleV2({
    styleId: "6bc79e41cb671da62fd01b78d6b7171e", // 替换为您的自定义样式 ID
  });

  // 添加地图控件
  map.addControl(new BMapGL.ScaleControl()); // 比例尺控件
  map.addControl(new BMapGL.ZoomControl()); // 缩放控件
});
</script>

<style scoped>
.weather-map {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
}

.map-container {
  width: 100%;
  height: 500px; /* 设置地图高度 */
  border-radius: 8px;
}
</style>
