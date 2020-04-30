<template>
  <div class="main-content">
    <div class="samll-title">
      <i class="el-icon-d-arrow-right"></i>
      <span>历史隐患</span>
    </div>
    <div class="view">
      <ul>
        <li v-for="(item, index) in historyList" :key="index">
          <i></i>{{ item.data }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      historyList: [
        { data: "20190909 8:00:00  集团公司主井提升机困罐风险" },
        { data: "20190909 8:00:00  升压局部通风机无计划停风停电…" },
        { data: "20190909 8:00:00  集团公司主井提升机困罐风险" },
        { data: "20190909 8:00:00  升压局部通风机无计划停风停电…" },
        { data: "20190909 8:00:00  升压局部通风机无计划停风停电…" },
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
    padding-left: 5%;
    font-size: 20px;
    color: #45a1ff;
    height: 16%;
    line-height: 4vh;
  }
  .view {
    flex: 1;
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      li {
        flex: 1;
        height: 20%;
        line-height: 5vh;
        font-size: 14px;
        padding-left: 8%;
        color: #97b6ff;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        i {
          display: inline-block;
          width: 8px;
          height: 8px;
          background-color: #4363ff;
          border-radius: 50%;
          margin-right: 5%;
          box-shadow: 0px 0px 30px 4px #4363ff;
        }
      }
      li:nth-child(2n + 1) {
        background: rgba(67, 99, 255, 0.2);
      }
    }
  }
}
</style>
