<template>
  <div class="main-content">
    <div class="samll-title">
      <i class="el-icon-d-arrow-right"></i>
      <span>历史隐患</span>
    </div>
    <div class="view">
      <ul>
        <li v-for="(item ,index) in historyList" :key="index"><i></i>{{item.data}}</li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return{
      historyList:[
          {data:'20190909 8:00:00  集团公司主井提升机困罐风险'},
          {data:'20190909 8:00:00  升压局部通风机无计划停风停电…'},
          {data:'20190909 8:00:00  集团公司主井提升机困罐风险'},
          {data:'20190909 8:00:00  升压局部通风机无计划停风停电…'},
          {data:'20190909 8:00:00  升压局部通风机无计划停风停电…'}
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
    padding: 15px 0 10px 25px;
    font-size: 20px;
    color: #45A1FF;
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
        line-height: 46px;
        font-size: 14px;
        color: #97B6FF;
        i{
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #4363FF;
          border-radius: 50%;
          margin-right: 20px;
          margin-left: 35px;
          box-shadow: 0px 0px 30px 4px #4363FF;
        }
      }
      li:nth-child(2n+1){
        background: rgba(67,99,255,0.20);
      }
    }
  }
}
</style>