<template>
  <div class="main-content">
    <div class="samll-title">
      <i class="el-icon-d-arrow-right"></i>
      <span>隐患风险占比</span>
    </div>
    <div class="view">
      <div class="item-left">
        <line-echarts/>
      </div>
      <div class="item-right">
        <circular-echarts/>
      </div>
    </div>

  </div>
</template>
<script>
import lineEcharts from './lineEcharts'
import circularEcharts from './circularEcharts'
export default {
  components:{
    lineEcharts,
    circularEcharts
  }
}
</script>
<style scoped lang="scss">
.main-content{
  height: 100%;
  display: flex;
  flex-direction: column;
  .samll-title{
    padding-left: 3%;
    font-size: 20px;
    color: #45A1FF;
    height:16%;
    line-height: 4vh;
  }
  .view{
    flex: 1;
    display: flex;
    flex-direction: row;
    .item-left{
      flex: 1;
       padding: 0 6%;
    }
    .item-right{
      flex: 1;
      padding: 0 6%;
    }
   
  }
}
</style>