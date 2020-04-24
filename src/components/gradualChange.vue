<template>
  <div id="main">

  </div>
</template>
<script>
import echarts from 'echarts'
import Option from './esh'

export default {
  mounted(){
    this.echartsInit()
  },
  methods:{
    echartsInit(){
       var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(Option);
    }
  }
}
</script>