<template>
  <div class="meteorological-index">
    <h2>气象状况指数</h2>
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
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '气象状况',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 25, name: '极高' },
        { value: 25, name: '高' },
        { value: 25, name: '中' },
        { value: 25, name: '低' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
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
.meteorological-index {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
}

.chart-container {
  width: 100%;
  height: 400px; /* 设置图表的高度 */
}
</style>
