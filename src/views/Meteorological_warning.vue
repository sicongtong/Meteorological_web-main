<script setup>
import vAppWarningList from "@/components/AppWarningList.vue";
import vAppWeatherSummary from "@/components/AppWeatherSummary.vue";
import vAppWeatherMap from "@/components/AppWeatherMap.vue";
import vAppTrendChart from "@/components/AppTrendChart.vue";
import vAppDetailChart from "@/components/AppDetailChart.vue";

</script>

<template>
  <div class="main-layout">
    <!-- 第一部分：气象预警列表 -->
    <div class="section-warning-list">
      <vAppWarningList /> <!-- 组件占位符，具体组件可以根据需求替换 -->
    </div>

    <!-- 第二部分：气象监测地图 -->
    <div class="section-weather-map">
      <vAppWeatherMap /> <!-- 组件占位符 -->
    </div>

    <!-- 第三部分：趋势图 -->
    <div class="section-trend-chart">
      <vAppTrendChart /> <!-- 组件占位符 -->
    </div>

    <!-- 第四部分：城市天气概况 -->
    <div class="section-weather-summary">
      <vAppWeatherSummary /> <!-- 组件占位符 -->
    </div>

    <!-- 第五部分：详细数值和图表对比 -->
    <div class="section-detail-chart">
      <vAppDetailChart /> <!-- 组件占位符 -->
    </div>
  </div>
</template>

<style scoped>
/* 整体背景设置为灰色 */
.main-layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 四分之一宽度布局，左边1份，中间2份，右边1份 */
  grid-template-rows: repeat(9, 1fr); /* 高度分9份，每一份等高 */
  gap: 10px;
  height: 100vh; /* 页面全屏高度 */
  padding: 10px;
  background-color: #e0e0e0; /* 整体背景颜色设置为灰色 */
}

/* 气象预警列表，占据左边1份，9行中的全部行 */
.section-warning-list {
  grid-column: 1 / 2;
  grid-row: 1 / 10;
  background-color: #ffffff; /* 部分背景颜色设置为白色 */
  border-radius: 8px;
  padding: 15px;
}

/* 气象监测地图，占据中间两份，9行中的前7行 */
.section-weather-map {
  grid-column: 2 / 3;
  grid-row: 1 / 5;
  background-color: #ffffff; /* 部分背景颜色设置为白色 */
  border-radius: 8px;
  padding: 15px;
}

/* 趋势图，占据中间两份，9行中的后两行 */
.section-trend-chart {
  grid-column: 2 / 3;
  grid-row: 4 / 10;
  background-color: #ffffff; /* 部分背景颜色设置为白色 */
  border-radius: 8px;
  padding: 15px;
}

/* 城市天气概况，占据右边1份，9行中的前5行 */
.section-weather-summary {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  background-color: #ffffff; /* 部分背景颜色设置为白色 */
  border-radius: 8px;
  padding: 15px;
}

/* 详细数值和图表对比，占据右边1份，9行中的后4行 */
.section-detail-chart {
  grid-column: 3 / 4;
  grid-row: 2 / 10;
  background-color: #ffffff; /* 部分背景颜色设置为白色 */
  border-radius: 8px;
  padding: 15px;
}
</style>
