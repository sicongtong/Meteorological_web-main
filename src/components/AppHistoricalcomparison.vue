<template>
  <div class="historical-comparison">
    <h2>历史对比图</h2>
    <!-- 用于显示 ECharts 图表的容器 -->
    <div ref="chartContainer" class="chart-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts'; // 导入 ECharts

// 引用 DOM 容器
const chartContainer = ref(null);

// 图表配置选项
const chartOptions = {
  title: {
    text: '历史对比',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['2020', '2021'],
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '2020',
      type: 'line',
      data: [5, 3, 4, 8, 7, 6, 5, 4, 8, 9, 6, 7],
      smooth: false
    },
    {
      name: '2021',
      type: 'line',
      data: [4, 5, 6, 9, 6, 7, 8, 5, 6, 7, 8, 9],
      smooth: false
    },
  ]
};

// 在组件挂载时初始化图表
onMounted(() => {
  const chart = echarts.init(chartContainer.value); // 初始化 ECharts 实例
  chart.setOption(chartOptions); // 设置图表选项
});
</script>

<style scoped>
.historical-comparison {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.chart-container {
  width: 100%;
  height: 400px; /* 设置图表容器的高度 */
}
</style>
