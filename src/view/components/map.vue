<template>
  <div class="map">
    <div id='mapChart' v-if="reload" ref="chart"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import mapData from './map.json'
import { getLines, getGeoCoordList, getMap } from './data'
import * as template from './template'
import Bus from './bus'

export default {
  data () {
    return {
      option: null,
      chart: null,
      recData: null,
      mapId: null,
      reload: true
    }
  },
  created () {
    // 接受坐标
    Bus.$on('evn', (data) => {
      this.recData = data.site
      this.mapId = data.id
      this.reload = false
      this.$nextTick(() => {
        this.reload = true
        this.$nextTick(() => {
          this.goInit()
        })
      })
    })
  },
  methods: {
    goInit () {
      let series = []
      echarts.registerMap('map', mapData)
      let chart = echarts.init(this.$refs.chart)

      const result = getLines(this.mapId)
      series.push(template.getLines(result))
      const markerData = getGeoCoordList(this.mapId)
      for (const key in markerData) {
        const { data, color } = markerData[key]
        const markers = template.getEffectScatter(data, color)
        series.push(markers)
      }

      const map = getMap(this.mapId)
      this.option = template.getOption(this.recData, series, map && map.zoom)

      chart.setOption(this.option)
      chart.on('click', ({ data }) => {
        data && this.$emit('click', data.name)
        return false
      })
    }
  },
  mounted () {
    this.goInit()
  }
}
</script>

<style lang='scss' scoped>
#mapChart {
  width: 100%;
  height: 100%;
}
.map {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 400px;
  height: 100%;
  background: rgba(3,37,100,0.30);
  border: 2px solid rgba(113,135,205,0.20);

}
</style>
