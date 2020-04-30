<template>
  <div class="main-content">
    <div class="samll-title">
      <div>
        <i class="el-icon-d-arrow-right"></i>
        <span>智能化率</span>
      </div>
      <div class="edit_btn">
        <intelligent-dialog :profit="list" @sender="goUpdate($event)"/>
      </div>
    </div>
    <div class="view">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <small-circle :ref="`smallCircle${index}`" :charsData="item" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import smallCircle from "./smallCircle";
import intelligentDialog from "./intelligentDialog";

export default {
  components: {
    smallCircle,
    intelligentDialog,
  },
  data() {
    return {
      list: [
        {
          name: "塔山煤矿",
          data: {
            heightLight: {
              value: "75",
              color: ["#58CB74", "#11C2C1 "],
            },
            normal: {
              value: "25",
              color: ["#264CA1"],
            },
          },
        },
        {
          name: "塔山煤矿",
          data: {
            heightLight: {
              value: "50",
              color: ["#7638FF ", "#6066E4 "],
            },
            normal: {
              value: "50",
              color: ["#264CA1"],
            },
          },
        },
        {
          name: "塔山煤矿",
          data: {
            heightLight: {
              value: "50",
              color: ["#7638FF ", "#6066E4 "],
            },
            normal: {
              value: "50",
              color: ["#264CA1"],
            },
          },
        },
        {
          name: "塔山煤矿",
          data: {
            heightLight: {
              value: "25",
              color: ["#426CFF", "#45A1FF "],
            },
            normal: {
              value: "75",
              color: ["#264CA1"],
            },
          },
        },
        {
          name: "塔山煤矿",
          data: {
            heightLight: {
              value: "25",
              color: ["#426CFF", "#45A1FF "],
            },
            normal: {
              value: "75",
              color: ["#264CA1"],
            },
          },
        },
        {
          name: "塔山煤矿",
          data: {
            heightLight: {
              value: "25",
              color: ["#426CFF", "#45A1FF "],
            },
            normal: {
              value: "75",
              color: ["#264CA1"],
            },
          },
        },
        {
          name: "塔山煤矿",
          data: {
            heightLight: {
              value: "25",
              color: ["#426CFF", "#45A1FF "],
            },
            normal: {
              value: "75",
              color: ["#264CA1"],
            },
          },
        },
        {
          name: "塔山煤矿",
          data: {
            heightLight: {
              value: "25",
              color: ["#426CFF", "#45A1FF "],
            },
            normal: {
              value: "75",
              color: ["#264CA1"],
            },
          },
        },
      ],
    };
  },
  methods:{
    goUpdate(val){
      this.list=val
      console.log(val)
      const charts = this.list.map((_, index) => `smallCircle${index}`)
      charts.forEach((item)=>{
        this.$refs[item][0].forceUpdate()
        })
      }
  }
};
</script>
<style scoped lang="scss">
.main-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  .samll-title {
    padding-left: 5%;
    font-size: 20px;
    color: #45a1ff;
    height: 16%;
    line-height: 4vh;
    position: relative;
    .edit_btn {
      position: absolute;
      top: 2%;
      right: 5%;
    }
  }
  .view {
    flex: 1;
    padding: 0 6%;
    ul {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      //
      li {
        width: 25%;
        height: 50%;
        box-sizing: border-box;
      }
    }
  }
}
</style>
