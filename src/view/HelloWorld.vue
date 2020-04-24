<template>
<div id="home">
  <div class="main-header">
    <div class="logo"></div>
    <div class="title"></div>
    <div class="menu"></div>
  </div>
  <div class="main-container">
    <div class="left-panel">
      <!-- 上边区域 -->
      <div class="item-card">
        <div class="content">
          <div class="samll-title">
            <i class="el-icon-d-arrow-right"></i>
            <span>子系统</span>
          </div>
          <div class="view">
          </div>
        </div>
      </div>
      <!-- 中间区域 -->
      <div class="item-card">
        <div class="content">
          <div class="samll-title">
            <i class="el-icon-d-arrow-right"></i>
            <span>子系统</span>
          </div>
          <div class="view">
          </div>
        </div>
      </div>
      <!-- 下边区域 -->
      <div class="item-card">
        <div class="content">
          <div class="samll-title">
            <i class="el-icon-d-arrow-right"></i>
            <span>智能化率</span>
          </div>
          <div class="view">
          </div>
        </div>
      </div>
    </div>
    <div class="center-panel">
      <div class="item-card main">
        <div class="content">
          <div class="samllBtn">
             <span v-for="(item,index) in list" :key="index" @click="goChange(item.position)">{{item.name}}</span>
          </div>
          <Map/>
        </div>
      </div>
      <div class="item-card">
        <div class="content">
           <div class="samll-title">
            <i class="el-icon-d-arrow-right"></i>
            <span>隐患风险占比</span>
          </div>
          <div class="view">
            <div class="view-left">
              <Line-map/>
            </div>
            <div class="view-right">
              <circular-map/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right-panel">
      <div class="item-card">
        <div class="content">
          <div class="samll-title">
            <i class="el-icon-d-arrow-right"></i>
            <span>实时报警</span>
          </div>
          <div class="view">
            <ul>
              <li v-for="(item ,index) in timeList" :key="index">{{item.data}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="item-card">
        <div class="content">
          <div class="samll-title">
            <i class="el-icon-d-arrow-right"></i>
            <span>历史报警Top3</span>
          </div>
          <div class="view">
          </div>
        </div>
      </div>
      <div class="item-card">
        <div class="content">
          <div class="samll-title">
            <i class="el-icon-d-arrow-right"></i>
            <span>历史隐患</span>
          </div>
          <div class="view">
             <ul>
              <li v-for="(item ,index) in historyList" :key="index">{{item.data}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Map from '../components/map'
import Bus from '../components/bus'
import LineMap from '../components/lineMap'
import circularMap from '../components/circularMap'

export default {
    data(){
      return{
        list:[
          {id:1,name:'地煤',position:[113.22144, 39.99597]},
          {id:2,name:'朔煤',position:[112.92835, 39.77024]},
          {id:3,name:'轩煤',position:[112.43023, 38.89896]},
          {id:4,name:'宏大',position:[111.5416293, 36.1336759]}
        ],
        timeList:[
          {data:'20190909 8:00:00  1124皮带 电机轴温超限报警'},
          {data:'20190909 8:00:00  1124皮带 电机轴温超限报警'},
          {data:'20190909 8:00:00  1124皮带 电机轴温超限报警'},
          {data:'20190909 8:00:00  1124皮带 电机轴温超限报警'}
        ],
        historyList:[
          {data:'20190909 8:00:00  升压局部通风机计划停风停电'},
          {data:'20190909 8:00:00  升压局部通风机计划停风停电'},
          {data:'20190909 8:00:00  升压局部通风机计划停风停电'},
          {data:'20190909 8:00:00  升压局部通风机计划停风停电'}
        ]
      }
    },
  components:{
    Map,
    LineMap,
    circularMap
  },
  methods:{
    goChange(val){
      // console.log(val ,11111)
      Bus.$emit('evn',val)
    }
  }
}
</script>

<style scoped lang="scss">
#home {
  height: 100%;
  display: flex;
  flex-direction: column;
  background:rgb(7, 29, 92);
  background-image: url('../assets/images/table.png');
}
.main-header {
  height: 50px;
  background: transparent;
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: space-between;
  .logo {
    width: 100px;
    height: 100%;
    background: transparent;
  }
  .title {
    width: 500px;
    height: 80px;
    background: transparent;
  }
  .menu {
    width: 100px;
    height: 100%;
    background: transparent;
  }
}
//内容区域
.main-container {
  height: 100%;
  flex: 1;
  overflow: hidden;
  //左右区域
  .left-panel, .right-panel {
    float: left;
    width: 25%;
    height: 100%;
  }
  //中间区域
  .center-panel {
    float: left;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    .item-card {
      margin-top: -10px;
      .content .view{
        display: flex;
        div{
          flex: 1;
        }
      }

    }
    //上部分
    .main {
      flex: auto;
      padding: 0;
      margin: 0 -10px;
      .content {
        background: transparent;
        border: none;
        position: relative;
        .samllBtn{
          position: absolute;
          left: 20px;
          top:20px;
          z-index: 99;
          span{
            margin:10px ;
            
          }
        }
      }
    }
  }
  //左右区域下小方块区域
  .item-card {
    height: 33.33%;
    box-sizing: border-box;
    padding: 10px;
    .content {
      background: rgb(7, 39, 111);
      border: 1px solid rgb(41, 68, 191);
      box-shadow: -1px -2px  2px rgb(41, 68, 191);
      height: 100%;
      .samll-title{
        padding: 25px;
        padding-bottom: 10px;
      }
      .view{
        // margin-left: 35px;
        // margin-right: 35px;
        // height: 65%;
        // border: 1px solid red;
        li{
          list-style: none;
          word-break:keep-all;         
          white-space:nowrap;         
          overflow:hidden;  
          height: 45px;
          line-height: 45px;
        }
      }
    }
  }
}
</style>

<style lang="scss">
html, body, #app, .home {
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  color: rgb(69, 161, 255);
  font-size: 18px;
  font-family:Microsoft YaHei ;
  
}
</style>
