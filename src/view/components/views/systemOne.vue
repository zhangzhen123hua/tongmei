<template>
  <div class="main-content">
    <div class="samll-title">
      <i class="el-icon-d-arrow-right"></i>
      <span>子系统</span>
    </div>
    <div class="view"></div>

  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="scss">
.main-content{
  height: 100%;
  display: flex;
  flex-direction: column;
  .samll-title{
    padding-left: 5%;
    font-size: 20px;
    color: #45A1FF;
    height:16%;
    line-height: 4vh;
  }
  .view{
    flex: 1;
    // border: 1px solid red;
  }
}
</style>