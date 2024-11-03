<template>
  <div class="weather-summary">
    <h2>{{ cityName }}</h2>
    <p>{{ updateTime }}</p>
    <div class="level-display">
      <div class="level-circle">
        <span>{{ weatherLevel }}</span>
      </div>
    </div>
    <div class="level-bar">
      <ul>
        <li v-for="n in 10" :key="n" :class="{ active: n <= weatherLevel }">{{ n }}</li>
        <li v-if="weatherLevel > 10" :class="{ active: true }">10+</li>
      </ul>
    </div>
    <p class="advice">{{ weatherAdvice }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 城市名称和更新时间
const cityName = "广州-东莞";
const updateTime = "2020-11-24 12:00:00";

// 雷电天气等级（假设范围是 1 到 10+）
const weatherLevel = 7;

// 根据雷电天气的等级提供健康建议
const weatherAdvice = ref("");

if (weatherLevel <= 2) {
  weatherAdvice.value = "雷电轻微，可以进行室外活动，但建议随时关注天气情况。";
} else if (weatherLevel <= 5) {
  weatherAdvice.value = "雷电适中，建议减少室外活动，特别是高处和空旷地区。";
} else if (weatherLevel <= 7) {
  weatherAdvice.value = "雷电较强，尽量避免外出，必要时注意防雷措施。";
} else if (weatherLevel <= 9) {
  weatherAdvice.value = "雷电非常强，切勿外出，应待在安全室内区域。";
} else {
  weatherAdvice.value = "雷电极强，极度危险，必须待在避雷措施良好的室内。";
}
</script>

<style scoped>
.weather-summary {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
}

p {
  color: #999;
  font-size: 14px;
  margin-bottom: 20px;
}

.level-display {
  margin: 20px 0;
}

.level-circle {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border: 4px solid green;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: green;
}

.level-bar {
  margin: 20px 0;
}

.level-bar ul {
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
}

.level-bar li {
  flex-grow: 1;
  text-align: center;
  background-color: #e0e0e0;
  padding: 4px 0;
  margin-right: 2px;
  color: #fff;
}

.level-bar li.active {
  background-color: #4CAF50;
}

.advice {
  font-size: 14px;
  color: #666;
}
</style>
