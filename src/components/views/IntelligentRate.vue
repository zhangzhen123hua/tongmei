<template>
  <div class="main-content">
    <div class="samll-title">
      <i class="el-icon-d-arrow-right"></i>
      <span>智能化率</span>
    </div>
    <div class="view">
      <ul>
        <li v-for="(item, index)   in list" :key="index">
          <small-circle :charsData=item />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import smallCircle from "./smallCircle";
export default {
  components: {
    smallCircle,
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
            }
          }
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
};
</script>
<style scoped lang="scss">
.main-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  .samll-title {
    padding: 15px 0 10px 25px;
    font-size: 20px;
    color: #45a1ff;
  }
  .view {
    flex: 1;
    padding: 0px 30px 35px 30px;
    // padding-bottom: 20px;
    // border: 1px solid red;
    ul {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      li {
        width: 25%;
        height: 50%;
        box-sizing: border-box;
      }
    }
  }
}
</style>
