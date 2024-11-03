<template>
  <div class="warning-list">
    <h2>今日高铁各路段气象预警</h2>
    <p>更新时间: 2020-11-24 12:00:00</p>
    <ul>
      <li v-for="warning in warnings" :key="warning.id">
        <div class="warning-item">
          <span :class="getIconClass(warning.level)" class="icon"></span>
          <span>{{ warning.location }}</span>
          <span class="status">{{ warning.status }}</span>
          <span class="level">{{ warning.levelNum }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const warnings = [
  { id: 1, location: '广州-东莞', level: '高', levelNum: 3 },
  { id: 2, location: '虎门-中山', level: '高', levelNum: 3 },
  { id: 3, location: '潮汕-惠来', level: '中', levelNum: 2 },
  { id: 4, location: '东莞-深圳', level: '中', levelNum: 2 },
  { id: 5, location: '湛江-吴川', level: '低', levelNum: 1 },
  { id: 6, location: '阳江-阳西', level: '低', levelNum: 1 },
  { id: 7, location: '江门-台山', level: '低', levelNum: 1 },
  { id: 8, location: '郁南-云浮', level: '低', levelNum: 1 },
];

const getIconClass = (level) => {
  if (level === '高') return 'icon-high';
  if (level === '中') return 'icon-medium';
  if (level === '低') return 'icon-low';
  if (level === '极高') return 'icon-extreme';
};
</script>

<style scoped>
.warning-list {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

p {
  color: #999;
  font-size: 12px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.warning-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
}

.icon {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 10px;
}

.icon-high {
  background-color: red;
}

.icon-medium {
  background-color: orange;
}

.icon-low {
  background-color: green;
}

.icon-extreme {
  background-color: purple;
}

.status {
  flex-grow: 1;
}

.level {
  background-color: #62a3ee;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  min-width: 20px;
  text-align: center;
}
</style>
