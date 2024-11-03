<script setup>
import { RouterView } from "vue-router";
</script>

<template>
    <el-config-provider :locale="zhCn">
        <router-view />
    </el-config-provider>
</template>

<style lang="scss">
@import "./style/common";
</style>
