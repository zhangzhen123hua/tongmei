<template>
  <div class="main-content">
    <div class="samll-title">
      <i class="el-icon-d-arrow-right"></i>
      <span>历史报警TOP3</span>
    </div>
    <div class="view">
      <historical-alarm/>
    </div>

  </div>
</template>
<script>
import historicalAlarm from './history'
export default {
  components:{
    historicalAlarm
  }
  
}
</script>
<style scoped lang="scss">
.main-content{
  height: 100%;
  display: flex;
  flex-direction: column;
  .samll-title{
    padding: 15px 0 10px 25px;
    font-size: 20px;
    color: #45A1FF;
  }
  .view{
    flex: 1;
    padding-left: 20px;
    // border: 1px solid red;
  }
}
</style>