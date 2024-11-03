<script setup>
import { ref } from 'vue';
const selectedLines = ref(['京广线', '京九线', '京包线']);
</script>

<style scoped>
.railway-lines {
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <div class="railway-lines">
    <el-checkbox-group v-model="selectedLines">
      <el-checkbox label="京广线">京广线</el-checkbox>
      <el-checkbox label="京九线">京九线</el-checkbox>
      <el-checkbox label="京包线">京包线</el-checkbox>
      <el-checkbox label="京哈线">京哈线</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

