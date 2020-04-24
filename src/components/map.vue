<template>
  <div class="map">
    <div id='mapChart'></div>
  </div>
</template>
<script>
import echarts from 'echarts'
import mapData from './map.json'
import { lines, getGeoCoordList } from './data'
import * as template from './template'
import Bus from './bus'

export default {
  data () {
    return {
      option: null,
      series: [],
      chart: null,
      recData:null

    }
  },
  created(){
    Bus.$on('evn',(data)=>{
      // console.log(data)
      this.recData=data
      this.goInit()
    })
  },
  methods:{
    goInit(){
    echarts.registerMap('map', mapData)
    this.chart = echarts.init(document.getElementById('mapChart'))

    this.series.push(template.getLines(lines))

    // Temp
    const state = {
       宏大公司:1,
       程家沟矿:0,
       轩岗煤电公司:2,
       同煤集团:3
    }

    const legendMap = {
      1: {
        color: 'rgba(139, 28, 98, .8)',
        name: '矿井火灾事故'
      },
      2: {
        color: 'rgba(255, 235, 59, .7)',
        name: '瓦斯突出爆炸'
      },
      4: {
        color: 'rgba(139, 136, 120, .8)',
        name: '顶板事故'
      },
      3: {
        color: 'rgba(118, 238, 0, .8)',
        name: '机电事故'
      },
      5: {
        color: 'rgba(241, 109, 115, .8)',
        name: '矿尘爆炸'
      },
      6: {
        color: 'rgba(147, 235, 248, .8)',
        name: '矿井水灾事故'
      }
    }

    const setLegend = (firstPosition, offset = 1) => {
      let index = 0
      for (const key in legendMap) {
         
        if (Object.prototype.hasOwnProperty.call(legendMap, key)) {
          const { name, color } = legendMap[key]
          let position = [...firstPosition]
          if (index % 2 === 0) {
            position[1] -= offset * index / 2
          } else {
            position[0] += 3
            position[1] -= offset * (index - 1) / 2
          }
          this.series.push(template.getEffectScatter([{ name, value: position }], color))
          index++
        }
      }
    }

    setLegend([130, 53])

    const markerData = getGeoCoordList().filter(item => {
      return state[item.name] === undefined || state[item.name] === 0
    })

    this.series.push(template.getMarker(markerData))

    const effectScatterData = getGeoCoordList().filter(item => {
      return state[item.name] > 0
    })

    effectScatterData.forEach(item => {
      const i = state[item.name]
      this.series.push(template.getEffectScatter([item], legendMap[i].color))
    })

    this.option = template.getOption(this.recData,this.series)

    this.chart.setOption(this.option, true)
    this.chart.on('click', ({ data }) => {
      this.$emit('click', data.name)
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
