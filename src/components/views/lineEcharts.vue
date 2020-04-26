<template>
  <div class="wrap">
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      chart: null,
      option: {}
    }
  },
  mounted () {
    this.chartInit()
  },
  methods: {
    chartInit () {
      this.option = {
        title: {
          text: '子公司隐患风险统计',
          textStyle:{
            color:'#97B6FF',
            fontSize:14
          }
        },
        color: ['#fff'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['本部', '地煤', '索梅', '轩煤', '宏大'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0,
              rotate: 0,
              textStyle: {
                color: '#97B6FF'
              }
            }
          }
        ],
        yAxis: [{
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#97B6FF'
            }
          },
          splitLine: { 
            lineStyle: {
              type: 'dashed',
              opacity: 0.3
            }
          }
        }],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: 24,
            data: [8, 5, 4, 5, 4],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#83bff6' },
                    { offset: 0.5, color: '#188df0' },
                    { offset: 1, color: '#188df0' }
                  ]
                )
              }
            }
          }
        ]
      }
      this.chart === null || this.chart.dispose()
      this.chart = echarts.init(this.$refs.chart)
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  overflow: hidden;
  .chart {
    width: 100%;
    height: 200px;
  }
}
</style>
