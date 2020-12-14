<template>
  <div class="echart">
    <!--为echarts准备一个具备大小的容器dom-->
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>


<script>
import echarts from "echarts";
export default {
  name: "DemandChart",
//   props: ["User"],

  data() {
    return {
      i: 0,
      userlist: {},
      charts: "",
      opinion: ["已提交的检测", "审核中的检测", "待操作的检测","待检测的检测","检测中的检测","已完成的检测","已退回的检测" ],
      opinionData: [
        { value: 5, name: "已提交的检测" },
        { value: 6, name: "审核中的检测" },
        { value: 4, name: "待操作的检测" },
        { value: 5, name: "待检测的检测" },
        { value: 6, name: "检测中的检测" },
        { value: 7, name: "已完成的检测" },
        { value: 2, name: "已退回的检测" },
      ],
    };
  },
  methods: {
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: "需求检测任务进度",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          left: "center",
          top: "bottom",
          data: this.opinion,
        },
        color: ["#ffff00", "#FFB90F", "#33ccff","#8470FF","#FF6EB4","#F08080","#E066FF"],
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
            },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [20, 110],

            roseType: "radius",
            label: {
              show: true,
            },
            emphasis: {
              label: {
                show: true,
              },
            },
            data: this.opinionData,
          },
        ],
      });
    },


    loadData() {
      // //请求接口，假设接口返回的数据我们用tableData接收了
    this.$nextTick(function () { this.drawPie("main");});
    },
  },

  mounted() {
    this.loadData()
  },
};
</script>

<style>
.echart {
  display: flex;
  margin: 30px 30px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>