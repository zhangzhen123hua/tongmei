<template>
<div id="home">
  <!-- 头部 -->
  <div class="main-header">
    <div class="logo"></div>
    <div class="title"></div>
    <div class="menu"></div>
  </div>
  <!-- 主体 -->
  <div class="main-container">
    <!-- 左侧 -->
    <div class="left-panel">
      <div class="item-card">
        <div class="content">
          <system-one></system-one>
        </div>
      </div>
      <div class="item-card">
        <div class="content">
          <system-two></system-two>
        </div>
      </div>
      <div class="item-card">
        <div class="content">
          <Intelligent-rate/>
        </div>
      </div>
    </div>
    <!-- 中间 -->
    <div class="center-panel">
      <div class="item-card main">
        <div class="content">
          <div class="main-btn">
            <ul>
              <li v-for="(item,index) in listBtn" :key="index" @click="goChange(item.position)">
                <span><img :src="item.url" alt=""></span>
                <div >{{item.name}}</div>
              </li>
            </ul>
          </div>
          <Map/>
        </div>
      </div>
      <div class="item-card ">
        <div class="content bot-border">
          <middle/>
        </div>
      </div>
    </div>
    <!-- 右侧 -->
    <div class="right-panel">
      <div class="item-card">
        <div class="content">
          <time-alarm></time-alarm>
        </div>
      </div>
      <div class="item-card">
        <div class="content">
          <historical-alarm/>
        </div>
      </div>
      <div class="item-card">
        <div class="content">
          <hidden-trouble></hidden-trouble>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Map from './components/map'
import Bus from './components/bus'
import systemOne from './components/views/systemOne'
import systemTwo from './components/views/systemTwo'
import timeAlarm from './components/views/timeAlarm'
import hiddenTrouble from './components/views/hiddenTrouble'
import historicalAlarm from './components/views/historicalAlarm'
import middle from './components/views/middle'
import IntelligentRate from './components/views/IntelligentRate'
import image0 from './assets/img/本部.png'
import image1 from './assets/img/朔煤.png'
import image2 from './assets/img/本部.png'
import image3 from './assets/img/轩煤.png'
import image4 from './assets/img/宏大.png'
import './assets/css/style.css'

export default {
  data () {
    return {
      listBtn: [
        { id: 0, name: '本部', position: { id: 0, site: [113.20312578, 40.04471515] }, url: image0 },
        { id: 1, name: '地煤', position: { id: 1, site: [113.22144, 39.99597] }, url: image1 },
        { id: 2, name: '朔煤', position: { id: 2, site: [112.92835, 39.77024] }, url: image2 },
        { id: 3, name: '轩煤', position: { id: 3, site: [112.43023, 38.89896] }, url: image3 },
        { id: 4, name: '宏大', position: { id: 4, site: [111.5416293, 36.1336759] }, url: image4 }
      ]
    }
  },
  components: {
    Map,
    systemOne,
    systemTwo,
    timeAlarm,
    hiddenTrouble,
    historicalAlarm,
    middle,
    IntelligentRate
  },
  methods: {
    goChange (val) {
      Bus.$emit('evn', val)
    }
  }

}
</script>

<style scoped lang="scss">
#home {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url('./assets/img/背景1.png');
}
//需要隐藏头部
.main-header {
  height: 50px;
  // background: #f00;
  display: flex;
  position: relative;
  z-index: 2;
  justify-content: space-between;
  .logo {
    width: 100px;
    height: 100%;
    // background: yellow;
  }
  .title {
    width: 500px;
    height: 80px;
    // background: yellow;
  }
  .menu {
    width: 100px;
    height: 100%;
    // background: yellow;
  }
}
//主体部分
.main-container {
  height: 100%;
  flex: 1;
  overflow: hidden;
  //左右两侧
  .left-panel, .right-panel {
    float: left;
    width: 25%;
    height: 100%;
    .item-card {
      height: 33.33%;
      box-sizing: border-box;
      padding: 10px;
      .content {//内容区域
        // background: green;
        height: 100%;
        background: rgba(11,63,161,0.30);
        border: 2px solid rgba(113,135,205,0.20);
        box-shadow: 0 5px 6px 0 rgba(0,0,0,0.30), inset 0 0 14px 0 #215EDA;
      }
    }
  }
  // 中间部分
  .center-panel {
    float: left;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    // 子下
    .item-card {
      margin-top: -10px;
      height: 33.33%;
      box-sizing: border-box;
      padding: 10px;
      .content { //内容区域
        // background: rgb(8, 8, 8);
        height: 100%;
      }
      .bot-border{
        background: rgba(11,63,161,0.30);
        border: 2px solid rgba(113,135,205,0.20);
        box-shadow: 0 5px 6px 0 rgba(0,0,0,0.30), inset 0 0 14px 0 #215EDA;
      }
    }
    // 子上
    .main {
      flex: auto;
      padding: 0;
      margin: 0 -10px;
      .content { //内容区域
        // background: #00f;
        position: relative;
        .main-btn{
          position: absolute;
          left: 0px;
          top:20px;
          z-index: 99;
          ul{
            display: flex;
            li{
              flex: 1;
              margin-left:29px;
              font-size: 16px;
              color: #97B6FF;
              text-align: center;
              cursor: pointer;
              img{
                width: 28px;
              }
            }
          }
        }
        .map{
          border: none;
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
}
</style>
