<template>
  <div class="trend-chart">
    <!-- 用于显示 ECharts 图表的容器 -->
    <div ref="chartContainer" class="chart-container"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts'; // 导入 ECharts 库

// 引用 DOM 容器
const chartContainer = ref(null);

// 图表选项
const chartOptions = {
  title: {
    text: 'XXX高铁路段气象变化趋势图',
    left: 'center'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      const date = params[0].axisValue;
      const value = params[0].data;
      return `${date}<br/>数据: ${value}`;
    }
  },
  xAxis: {
    type: 'category',
    data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 5
  },
  series: [
    {
      name: '数据',
      type: 'line',
      data: [2, 2, 1, 1, 2, 3, 1, 2, 1, 1, 2, 2, 1],
      symbol: 'circle', // 设置数据点的样式
      symbolSize: 8, // 设置数据点的大小
      itemStyle: {
        color: '#00cc33' // 数据点的颜色
      },
      smooth: false // 禁用平滑曲线
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
.trend-chart {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.chart-container {
  width: 100%;
  height: 400px; /* 设置图表容器的高度 */
}
</style>
