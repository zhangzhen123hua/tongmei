<template>
  <div class="main">
    <div class="echarts" ref="recs"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      res: null,
    };
  },
  props: {
    charsData: Object,
  },
  computed: {
    prodata() {
      return this.charsData;
    },
  },
  methods: {
    forceUpdate () {
      debugger
      this.drawLine(this.prodata)
    },
    drawLine(params) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.recs);
      let sizeFun = function() {
        myChart.resize();
      };
      window.addEventListener("resize", sizeFun);
      //配置项
      let option = {
        legend: {
          orient: "vertical",
          left: 20,
          show: false,
        },
        series: [
          {
            name: params.name,
            type: "pie",
            radius: ["70%", "85%"],
            avoidLabelOverlap: false,
            label: {
              show: true, //饼图中心文字
              position: "center",
              fontSize: "12",
              lineHeight: 20,
              formatter: "{d}% \n {a}",
              color: "#C2D4FF",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "12",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              {
                value: params.data.heightLight.value,
                itemStyle: {
                  normal: {
                    //颜色渐变
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: params.data.heightLight.color[0] },
                      { offset: 1, color: params.data.heightLight.color[1] },
                    ]),
                  },
                },
              },
              {
                value: params.data.normal.value,
                label: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: params.data.normal.color[0],
                  },
                },
              },
            ],
            hoverAnimation: false, //关闭hover
          },
        ],
      };
      // 绘制图表
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawLine(this.prodata);
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
