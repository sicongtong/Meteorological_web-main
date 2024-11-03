<script setup>
import vAppHistoricalcomparison from "@/components/AppHistoricalcomparison.vue";
import vAppDaystatistics from "@/components/AppDaystatistics.vue";
import vAppMeteorologicalindex from "@/components/AppMeteorologicalindex.vue";
import { ref } from "vue";

const defaultEndDate = new Date(); // 终止日期默认为今天
const defaultStartDate = new Date(defaultEndDate.getTime() - 86400000 * 30); // 默认起始日期为30天前

const dateRangePicker = ref([defaultStartDate, defaultEndDate]);

const rangeShortcuts = [
    {
        text: "过去一周",
        value: () => {
            const end = new Date();
            const start = new Date(end.getTime() - 7 * 86400000);
            return [start, end];
        },
    },
    {
        text: "过去30天",
        value: () => {
            const end = new Date();
            const start = new Date(end.getTime() - 30 * 86400000);
            return [start, end];
        },
    },
    {
        text: "过去三个月",
        value: () => {
            const end = new Date();
            const start = new Date(
                end.getFullYear(),
                end.getMonth() - 3,
                end.getDate()
            );
            return [start, end];
        },
    },
];

const disabledDate = (time) => {
    return time.getTime() > Date.now(); // 禁用未来的日期
};
</script>

<template>
    <div class="statstat-view">
        <!-- 第一部分：选择高铁路段 -->
        <div class="statstat-section-header">
            <el-row :gutter="20" align="middle" justify="space-between">
                <!-- 左边两个下拉框 -->
                <el-col :span="16">
                    <el-select v-model="selectedLine" placeholder="选择高铁路段" style="width: 200px; margin-right: 20px;">
                        <el-option label="广深线" value="广深线"></el-option>
                        <el-option label="沪昆线" value="沪昆线"></el-option>
                        <el-option label="京广线" value="京广线"></el-option>
                    </el-select>

                    <el-select v-model="selectedCity" placeholder="选择城市" style="width: 200px;">
                        <el-option label="广州" value="广州"></el-option>
                        <el-option label="深圳" value="深圳"></el-option>
                        <el-option label="潮汕" value="潮汕"></el-option>
                    </el-select>
                </el-col>

                <!-- 右边时间范围选择 -->
                <el-col :span="8" class="date-picker-col">
                    <el-date-picker
                        class="customs-date-picker"
                        v-model="dateRangePicker"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :disabled-date="disabledDate"
                        :shortcuts="rangeShortcuts"
                        align="right"
                        style="width: 100%;"
                    />
                </el-col>
            </el-row>
        </div>

        <!-- 第二部分：气象状况指数对比图 -->
        <div class="statstat-section-header">
            <span>各高铁路段气象状况指数对比图</span>
        </div>
        <div class="statstat-section-content">
            <el-row :gutter="20">
                <el-col :span="8">
                    <vAppMeteorologicalindex />
                </el-col>
                <el-col :span="8">
                    <vAppMeteorologicalindex />
                </el-col>
                <el-col :span="8">
                    <vAppMeteorologicalindex />
                </el-col>
            </el-row>
        </div>

        <!-- 第三部分：历史对比 -->
        <div class="statstat-section-header">
            <span>历史同周期气象状况指数对比</span>
        </div>
        <div class="statstat-section-content">
            <vAppHistoricalcomparison />
        </div>

        <!-- 第四部分：天数统计 -->
        <div class="statstat-section-header">
            <span>每月气象状况较差天数统计</span>
        </div>
        <div class="statstat-section-content">
            <vAppDaystatistics />
        </div>
    </div>
</template>

<style scoped>
.statstat-view {
    padding: 20px;
}
.statstat-section-header {
    font-size: 20px;
    margin-bottom: 0.1vh;
    color: #ffffff;
    font-size: calc(12px + 0.5vw);
    font-weight: bold;
    width: 100%;
    display: block;
    background: linear-gradient(to right, #376cc7, #060f43);
    border-radius: 5px;
    padding: 5px;
    margin-top: 20px;
}

.statstat-section-content {
    margin-bottom: 30px;
}

.el-row {
    margin-bottom: 2vh;
}

.el-card /deep/ .el-card__header {
    background: linear-gradient(to right, #376cc7, #1d3a70);
    color: #fff;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: calc(12px + 0.5vw);
    font-weight: bold;
}

.date-picker-col {
    display: flex;
    justify-content: flex-end;
}

</style>
