<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'echartsmorey',
  data() {
    return {
      list: [
        {
          x: '01:00',
          y: 1,
          y1: 10,
          z: 9,
          x2: '1.1',
          x3: '2013'
        },
        {
          x: '03:00',
          y: 2,
          y1: 10,
          z: 70,
          x2: '2.1',
          x3: '2014'
        },
        {
          x: '05:00',
          y: 3,
          y1: 10,
          z: 1,
          x2: '3.1',
          x3: '2015'
        },
        {
          x: '07:00',
          y: 1,
          y1: 10,
          z: 20,
          x2: '4.1',
          x3: '2016'
        },
        {
          x: '09:00',
          y: 0,
          y1: 10,
          z: 18,
          x2: '5.1',
          x3: '2017'
        },
        {
          x: '11:00',
          y: 10,
          y1: 20,
          z: 12,
          x2: '6.1',
          x3: '2018'
        },
        {
          x: '13:00',
          y: 7.2,
          y1: 10,
          z: 12,
          x2: '11',
          x3: '2019'
        },
        {
          x: '15:00',
          y: 10,
          y1: 10,
          z: 12,
          x2: '7.1',
          x3: '2020'
        },
        {
          x: '17:00',
          y: 10,
          y1: 10,
          z: 12,
          x2: '8.1',
          x3: '2021'
        }
      ],
      dayX: [], // 当天的 X轴
      monthX: [], // 当月的 X轴
      dataY: [] // Y 轴
    }
  },
  methods: {
    init(dataX, dataY) {
      this.myChart = echarts.init(document.getElementById('main'))
      let option = {
        // 图例组件
        legend: {
          icon: 'stack',
          data: ['当天', '当月', '当年'],
          selectedMode: 'single', // 单选
          selected: {
            当天: false,
            当月: true,
            当年: false
          }
        },
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        // 工具栏
        toolbox: {
          x: 1100,
          y: 0,
          feature: {
            saveAsImage: {
              name: `test`
            }
          }
        },
        grid: {
          left: '5%', //组件距离容器左边的距离
          right: '20%',
          top: '15%'
        },
        // X轴 滑块 可缩放
        dataZoom: [
          {
            type: 'slider',
            show: true,
            start: 0, // 开始百分数
            end: 100 // 结束百分数
          }
        ],
        xAxis: {
          type: 'category',
          // X 轴分隔线样式
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#f3f0f0'],
              width: 2,
              type: 'dotted'
            }
          },
          // x轴数据
          data: dataX
        },
        yAxis: [
          {
            name: 'Y轴单位写的位置',
            type: 'value',
            position: 'left',
            splitNumber: 10, // Y 轴分隔格数
            // Y 轴分隔线样式
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#f3f0f0'],
                width: 2,
                type: 'solid'
              }
            }
          }
        ],
        series: dataY
      }
      // 监听图例组件切换事件，切换数据
      // 图例组件，默认当月,x轴为this.monthX;切换当天后,x轴对应this.dayX;
      this.myChart.on('legendselectchanged', (obj) => {
        var options = this.myChart.getOption()
        // options.xAxis[0].data = obj.name == '当月' ? this.monthX : this.dayX
        if (obj.name == '当月') {
          options.xAxis[0].data = this.monthX
        } else if (obj.name == '当日') {
          options.xAxis[0].data = this.dayX
        } else {
          options.xAxis[0].data = this.yearX
        }
        this.myChart.setOption(options, true)
      })

      // 使用刚指定的配置项和数据显示图表。
      this.myChart.setOption(option)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.monthX = this.list.map((item) => item.x2)
      this.dayX = this.list.map((item) => item.x)
      this.yearX = this.list.map((item) => item.x3)
      // Y轴的数据有y和z
      this.dataY.push({
        name: '当月',
        type: 'line', // 直线
        data: this.list.map((item) => item.y)
      })

      this.dataY.push({
        name: '当天',
        type: 'line',
        data: this.list.map((item) => item.z)
      })
      this.dataY.push({
        name: '当年',
        type: 'line',
        data: this.list.map((item) => item.y1)
      })

      this.init(this.monthX, this.dataY)
    })
  }
}
</script>

<style scoped>
#main {
  width: 1200px;
  height: 600px;
}
</style>
