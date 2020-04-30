<template>
  <div class="main-content">
    <div class="samll-title">
      <div class="title_left">
        <i class="el-icon-d-arrow-right"></i>
        <span>子系统</span>
      </div>
      <div class="edit_btn">
        <system-dialog :xied="list"/>
      </div>
    </div>
    <div class="view">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img :src="item.address" alt="" />
          <p>{{ item.name }}</p>
          <div>{{ item.value }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import img1 from "../../assets/img/运输.png";
import img2 from "../../assets/img/提升.png";
import img3 from "../../assets/img/风机.png";
import img4 from "../../assets/img/工作面.png";
import img5 from "../../assets/img/变电所.png";
import systemDialog from "./systemDialog";
export default {
  components: {
    systemDialog,
  },
  data() {
    return {
      list: [
        { name: "主运输系统", value: 23, address: img1 },
        { name: "主井提升系统", value: 23, address: img2 },
        { name: "副井提升系统", value: 16, address: img2 },
        { name: "主扇风机系统", value: 52, address: img3 },
        { name: "智能工作面", value: 65, address: img4 },
        { name: "智能变电所", value: 156, address: img5 },
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
    position: relative;
    .edit_btn{
      position: absolute;
      top:2%;
      right: 5%;
    }
  }
  .view {
    flex: 1;
    ul {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      text-align: center;
      li {
        width: 33.33%;
        img {
          width: 58px;
        }
        p {
          font-size: 14px;
          color: #97b6ff;
        }
        div {
          font-size: 20px;
          color: #45a1ff;
        }
      }
    }
  }
}
</style>
