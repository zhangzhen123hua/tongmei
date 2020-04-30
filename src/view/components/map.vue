<template>
  <div class="map">
    <div id="mapChart" v-if="reload" ref="chart"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import mapData from "./map.json";
import { getLines, getGeoCoordList, getMap } from "./data";
import * as template from "./template";
import Bus from "./bus";

export default {
  data() {
    return {
      option: null,
      chart: null,
      recData: null,
      mapId: null,
      reload: true,
    };
  },
  created() {
    Bus.$on("evn", (data) => {
      this.recData = data.site;
      this.mapId = data.id;
      this.reload = false;
      this.$nextTick(() => {
        this.reload = true;
        this.$nextTick(() => {
          this.goInit();
        });
      });
    });
  },
  methods: {
    effectScatterHover(params,lableVal,chart) { //煤矿信息鼠标移入放大效果
      if (params.componentType == "series") {
        let effectScatter = null;
        let chartOption = chart.getOption();
        chartOption.series.forEach(function(item) {
          if (item.type == "effectScatter") {
            effectScatter = item;
          }
        });
        if (effectScatter && effectScatter.data) {
          effectScatter.data.forEach(function(item, index) {
            if (index == params.dataIndex) {
              item.label = lableVal;
            }
          });
        }
        chart.setOption(chartOption);
      }
    },
    goInit() {
      let series = [];
      echarts.registerMap("map", mapData);
      let chart = echarts.init(this.$refs.chart);
      let sizeFun = function() {
        chart.resize();
      };
      window.addEventListener("resize", sizeFun);
      chart.on("mouseover", (params)=> {
        this.effectScatterHover(params,{
          fontSize:16,
        },chart);
      });
      chart.on("mouseout", (params)=> {
        this.effectScatterHover(params,null,chart);
      });
      const result = getLines(this.mapId);
      //地图lines配置信息
      series.push(template.getLines(result));

      const markerData = getGeoCoordList(this.mapId);
      for (const key in markerData) {
        const { data, color } = markerData[key];
        const markers = template.getEffectScatter(data, color);
        //地图effectScatter配置信息
        series.push(markers);
      }
      const map = getMap(this.mapId);
      //地图Option配置信息
      this.option = template.getOption(this.recData, series, map && map.zoom);

      chart.setOption(this.option);
      chart.on("click", ({ data }) => {
        data && this.$emit("click", data.name);
        // console.log(111,data)
        return false;
      });
    },
  },
  mounted() {
    this.goInit();
  },
};
</script>

<style lang="scss" scoped>
#mapChart {
  width: 100%;
  height: 100%;
}
.map {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 400px;
  background: rgba(3, 37, 100, 0.3);
  border: 2px solid rgba(113, 135, 205, 0.2);
}
</style>
