<template>
  <div class="main-content">
    <div class="samll-title">
      <i class="el-icon-d-arrow-right"></i>
      <span>实时报警</span>
    </div>
    <div class="view">
      <ul>
        <li v-for="(item ,index) in timeList" :key="index"><i></i>{{item.data}}</li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return{
      timeList:[
        {data:'20190909 8:00:00  1123皮带 电机轴温超限报警'},
        {data:'20190909 8:00:00  1123皮带 电机轴温超限报警'},
        {data:'20190909 8:00:00  1123皮带 电机轴温超限报警'},
        {data:'20190909 8:00:00  1123皮带 电机轴温超限报警'},
        {data:'20190909 8:00:00  1123皮带 电机轴温超限报警'},
      ]
    }
  }
  
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
    ul{
      height: 100%;
      display: flex;
      flex-direction: column;
      li{
        flex: 1;
        height: 20%;
        line-height: 5vh;
        font-size: 14px;
        padding-left: 8%;
        color: #97B6FF;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        i{
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: red;
          border-radius: 50%;
          margin-right: 5%;
          box-shadow: 0px 0px 30px 4px rgb(255, 0, 0);
        }
      }
      li:nth-child(2n+1){
        background: rgba(67,99,255,0.20);
      }
    }
  }
}
</style>