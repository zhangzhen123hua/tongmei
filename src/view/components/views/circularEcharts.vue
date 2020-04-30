<template>
  <div class="wrap">
    <div id="doughtnut" class="doughtnut" ref="doughtnut" ></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      doughtnut: null
    }
  },
  methods: {
    drawLine (params) {
      let valueMap = new Map()
      let sum = 0
      for (const { name, value } of params) {
        valueMap.set(name, value)
        sum += value
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.doughtnut)
      let sizeFun = function() {
        myChart.resize();
      };
      window.addEventListener("resize", sizeFun);
      let option = {
         title: {
          text: '隐患风险等级统计',
          textStyle:{
            color:'#97B6FF',
            fontSize:14
          }
        },
        color: ['#FFCB00', '#FF9200 ', '#EF4D68', '#C91313'],
        legend: {
          orient: 'vertical', 
          x: 'right',
          left:'60%',
          top: '22%',
          icon: 'circle',
          itemGap: 20,
          textStyle: {
            fontSize: 16,
            color: '#97B6FF'
          },
          data: params.map(({ name }) => name),
          formatter: (name) => {
            let value = valueMap.get(name)
            return `${name}  ${parseInt(value / sum * 100)}%`
          },
          
        },
        series: [
          {
            type: 'pie',
            center: ['20%', '50%'],
            radius: ['55%', '50%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                formatter: `${sum}`,
                position: 'center',
                color: '#97B6FF',
                fontSize: 15
              }
            },
            left:30,
            data: params
          }
        ]
      }
      // 绘制图表
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawLine([
      { value: 335, name: '动态风险' },
      { value: 310, name: '一般隐患' },
      { value: 234, name: '较大隐患' },
      { value: 135, name: '重大隐患' }
    ])
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .doughtnut {
    width: 100%;
    height: 100%;
  }
}
</style>
