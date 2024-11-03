<template>
  <div class="day-statistics">
    <h2>天数统计</h2>
    <!-- ECharts 图表的容器 -->
    <div ref="chartContainer" class="chart-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts'; // 导入 ECharts 库

// 引用 DOM 容器
const chartContainer = ref(null);

// 图表选项
const chartOptions = {
  title: {
    text: '每月气象天数统计',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }
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
      name: '天数',
      type: 'bar',
      data: [10, 15, 20, 25, 18, 23, 17, 21, 19, 24, 20, 16],
      barWidth: '35%',
      itemStyle: {
        color: '#73c0de'
      }
    }
  ]
};

// 在组件挂载时初始化图表
onMounted(() => {
  const chart = echarts.init(chartContainer.value); // 初始化 ECharts 实例
  chart.setOption(chartOptions); // 设置图表选项
});
</script>

<style scoped>
.day-statistics {
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
