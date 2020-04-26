<script>
const getOffsetLocation = (element) => {
  let offsetTop = element.offsetTop
  let offsetLeft = element.offsetLeft
  let location = {
    offsetTop: offsetTop,
    offsetLeft: offsetLeft,
    visualTop: offsetTop,
    visualLeft: offsetLeft,
    width: element.offsetWidth,
    height: element.offsetHeight
  }
  let getOffsetParent = (ele) => {
    let parent = ele.offsetParent
    if (parent) {
      let parentOffsetTop = parent.offsetTop
      let parentOffsetLeft = parent.offsetLeft
      location.offsetTop += parentOffsetTop
      location.offsetLeft += parentOffsetLeft
      getOffsetParent(parent)
    }
    return parent
  }
  getOffsetParent(element)
  location.visualTop = location.offsetTop
  location.visualLeft = location.offsetLeft
  let getParent = (ele) => {
    let parent = ele.parentNode
    if (parent) {
      if (!isNaN(parent.scrollTop)) location.visualTop -= parent.scrollTop
      if (!isNaN(parent.scrollLeft)) location.visualLeft -= parent.scrollLeft
      getParent(parent)
    }
    return parent
  }
  getParent(element)
  return location
}
export default {
  data () {
    return {
      position: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
  },
  mounted () {
    this.chartInit()
  },
  methods: {
    chartInit () {
      this.position = getOffsetLocation(this.$refs.history)
    }
  },
  render () {
    //   下面的数组决定了结构 start 和 end 是起始和结束的颜色 0-2 分别代表 RGB
    const list = [
       {
        title: '电机轴温报警',
        start: [239,77,104],
        end: [152,96,228],
        value: 100
      },
      {
        title: '电机轴温报警',
        start: [255,203,0],
        end: [255,145,0],
        value: 70
      },
      {
        title: '电机轴温报警',
        start: [69,161,255],
        end: [66,108,255],
        value: 50
      }
    ]
    const { width } = this.position
    const MARGIN_ADD_WIDTH = 12
    const OFFSET = 100
    const defaultNum = parseInt((width - OFFSET) / MARGIN_ADD_WIDTH)
    const getItem = (max, num = defaultNum) => list.map(({ start, end, value, title }) => {
      const percentage = value / max
      num = parseInt(percentage * num)
      const startR = start[0]
      const startG = start[1]
      const startB = start[2]
      const stepR = (end[0] - startR) / num
      const stepG = (end[1] - startG) / num
      const stepB = (end[2] - startB) / num
      let result = []
      for (let i = 0; i < num; i++) {
        const style = `background: rgba(${startR + stepR * i},${startG + stepG * i},${startB + stepB * i},1)`
        result.push((
          <div class='line' style={style} />
        ))
      }
      return (
        <div class='item'>
          <div class='title'>{title}</div>
          <div class='progress'>{result}<div class='value'>{value}</div></div>
        </div>
      )
    })
    return (<div class='history' ref='history'>{getItem(100)}</div>)
  }
}
</script>

<style lang="scss" scoped>
.history {
    height: 220px;
    .item {
        padding: 10px;
        .title {
            font-size: 14px;
            color: #97B6FF;
            padding-bottom: 12px;
        }
        .progress {
            overflow: hidden;
            display: flex;
            align-items: center;
        }
        .line {
            width: 6px;
            height: 22px;
            float: left;
            margin-right: 6px;
        }
        .value {
            padding-left: 10px;
            color: #97B6FF;
            font-size: 16px;
        }
    }
}
</style>