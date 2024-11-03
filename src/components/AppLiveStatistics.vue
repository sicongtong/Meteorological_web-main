<template>
    <div class="live-statistics">
      <el-table :data="liveData" border style="width: 100%">
        <el-table-column prop="stationName" label="站点名称" />
        <el-table-column prop="windDirection" label="较大风向" />
        <el-table-column prop="windLevel" label="较大风速" />
        <el-table-column prop="temperature" label="气温" />
        <el-table-column prop="visibility" label="能见度" />
        <el-table-column prop="precipitation" label="小时雨量" />
      </el-table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const liveData = ref([
    { stationName: '广州', windDirection: '西北风', windLevel: '3级', temperature: '-0.5', visibility: '0.0', precipitation: '0.0' },
    { stationName: '海运', windDirection: '西北风', windLevel: '3级', temperature: '-0.5', visibility: '0.0', precipitation: '0.0' },
    { stationName: '顺德', windDirection: '西北风', windLevel: '3级', temperature: '-0.5', visibility: '0.0', precipitation: '0.0' },
    { stationName: '韶关', windDirection: '西北风', windLevel: '3级', temperature: '-0.5', visibility: '0.0', precipitation: '0.0' }
  ]);
  </script>
  
  <style scoped>
  .live-statistics {
    height: 100%;
    background-color: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  