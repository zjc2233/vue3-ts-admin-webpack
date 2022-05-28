<template>
    <div class="container">
        <div class="chart-container-box">
            <div
                ref="chart"
                class="chart-box"
                style="width: 100%; height: 284px"
            ></div>
        </div>
    </div>
</template>
<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为Chart,也可以引入其他图表
import { BarChart, PieChart, LineChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    DatasetComponent,
} from "echarts/components"; // 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import { CanvasRenderer } from "echarts/renderers"; // 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { number } from "echarts/core";
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    BarChart,
    PieChart,
    LineChart,
    CanvasRenderer,
    LegendComponent,
    DatasetComponent,
]);

export default {
    name: "menuLine",
    props: {
        mode: {
            type: String,
            default: "0", //0为没有详情，1为有详情a标签
        },
    },
    data() {
        return {
            menuSelect: "shanghai",
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            // console.log(echarts);
            let myChart = echarts.init(this.$refs.chart);
            let option = {
                grid: {
                    // top: 24,
                    top: 54,
                    right: 57,
                    left: 54,
                    bottom: 0,
                    containLabel: true,
                },
                xAxis: {
                    type: "category", //类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                    boundaryGap: true,
                    data: [
                        "01-11",
                        "01-12",
                        "01-13",
                        "01-14",
                        "01-15",
                        "01-16",
                        "01-17",
                    ],

                    axisTick: {
                        //是否显示坐标轴刻度。
                        inside: true, //坐标轴刻度是否朝内，默认朝外。
                        alignWithLabel: true,
                    },
                },
                yAxis: {
                    type: "value",
                    show: true,
                    splitLine: {
                        show: false, //是否显示分隔线。默认数值轴显示，类目轴不显示。
                    },
                    axisLine: { show: true },
                    axisTick: {
                        show: true,
                        inside: false,
                    },
                },
                tooltip: {
                    trigger: "axis", //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
                    // trigger: "item",
                },
                legend: {
                    orient: "horizontal",
                    x: "center",
                    y: "top",
                    data: ["隐形正畸", "义齿加工"],
                    itemGap: 15,
                    textStyle: { fontSize: 14, fontWeight: 400, color: "#333" },
                },

                series: [
                    {
                        type: "line", //线条
                        name: "隐形正畸", //系列名称，用于tooltip的显示
                        data: [12, 15, 16, 21, 35, 22, 13],
                        symbol: "circle", //标记的类型：圆圈
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                // shadowBlur: 50, //文字块的背景阴影长度。
                                color: "#78D649", //图形的颜色
                                lineStyle: {
                                    color: "#78D649", //线的颜色
                                    width: 2, //线的宽度
                                },
                            },
                        },
                    },
                    {
                        type: "line", //线条
                        name: "义齿加工", //系列名称，用于tooltip的显示
                        data: [42, 55, 28, 61, 25, 42, 23],
                        symbol: "circle", //标记的类型：圆圈
                        symbolSize: 10,
                        itemStyle: {
                            normal: {
                                // shadowBlur: 50, //文字块的背景阴影长度。
                                color: "#547AFF", //图形的颜色
                                lineStyle: {
                                    color: "#547AFF", //线的颜色
                                    width: 2, //线的宽度
                                },
                            },
                        },
                    },
                ],
            };
            myChart.setOption(option);
        },
    },
};
</script>
<style lang='scss' scoped >
.container {
    margin-bottom: 5px;
    width: 100%;
    height: 360px;
    padding-left: 24px;
    background-color: #fff;
    .chart-container-box {
        position: relative;
    }
}
</style>
