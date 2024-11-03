<template>
  <div class="weather-status">
    <h3>XX高铁各路段实时气象状况指数</h3>
    <ul class="status-list">
      <li v-for="item in dataList" :key="item.name" class="status-item">
        <span :class="['status-indicator', 'level-' + item.level]">{{ item.name }}</span>
        <div class="status-bar">
          <span :style="{ width: item.barWidth + '%' }" class="bar"></span>
        </div>
        <span class="status-value">{{ item.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const dataList = [
  { name: '广州-东莞', level: 1, value: 2, barWidth: 60 },
  { name: '虎门-中山', level: 2, value: 2, barWidth: 60 },
  { name: '潮汕-惠来', level: 3, value: 2, barWidth: 60 },
  { name: '东莞-深圳', level: 2, value: 2, barWidth: 60 },
  { name: '湛江-吴川', level: 2, value: 2, barWidth: 60 },
  { name: '郁南-云浮', level: 2, value: 2, barWidth: 60 },
  { name: '江门-台山', level: 1, value: 1, barWidth: 40 },
  { name: '阳江-阳西', level: 1, value: 1, barWidth: 40 }
];
</script>

<style scoped>
.weather-status {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.status-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.status-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.status-indicator {
  flex: 1;
  font-size: 14px;
}

.status-bar {
  flex: 2;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  margin: 0 10px;
  position: relative;
}

.bar {
  height: 100%;
  display: block;
  border-radius: 5px;
  background-color: #73c0de;
}

.status-value {
  flex: 0.5;
  font-size: 14px;
  text-align: right;
}

.level-1 .bar {
  background-color: #73c0de;
}

.level-2 .bar {
  background-color: #ff9f7f;
}

.level-3 .bar {
  background-color: #ff7875;
}
</style>
