<template>
  <div>
    <div class="list">
      <ul id="legend">
        <li index="day">
          <span class="icon"></span><span class="title">当日</span>
        </li>
        <li index="month">
          <span class="icon"></span><span class="title">当月</span>
        </li>
        <li index="year">
          <span class="icon"></span><span class="title">当年</span>
        </li>
      </ul>
    </div>
    <el-button @click="legendChanged">Change</el-button>
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
          x1: '01:00',
          y1: 1,
          x2: '1.1',
          y2: 9,
          x3: '2013',
          y3: 10
        },
        {
          x1: '03:00',
          y1: 2,
          x2: '2.1',
          y2: 70,
          x3: '2014',
          y3: 10
        },
        {
          x1: '05:00',
          y1: 3,
          y3: 10,
          y2: 1,
          x2: '3.1',
          x3: '2015'
        },
        {
          x1: '07:00',
          y1: 1,
          y3: 10,
          y2: 20,
          x2: '4.1',
          x3: '2016'
        },
        {
          x1: '09:00',
          y1: 0,
          y3: 10,
          y2: 18,
          x2: '5.1',
          x3: '2017'
        },
        {
          x1: '11:00',
          y1: 10,
          y3: 20,
          y2: 12,
          x2: '6.1',
          x3: '2018'
        },
        {
          x1: '13:00',
          y1: 7.2,
          y3: 10,
          y2: 12,
          x2: '11',
          x3: '2019'
        },
        {
          x1: '15:00',
          y1: 10,
          y3: 10,
          y2: 12,
          x2: '7.1',
          x3: '2020'
        },
        {
          x1: '17:00',
          y1: 10,
          y3: 10,
          y2: 12,
          x2: '8.1',
          x3: '2021'
        }
      ],
      dayX: [], // 当天的 X轴
      monthX: [], // 当月的 X轴
      yearX: [],
      dataY: [], // Y 轴
      option: {}
    }
  },
  methods: {
    legendChanged() {
      let myChart = echarts.init(document.getElementById('main'))

      let options = myChart.getOption()
      options.xAxis[0].data = this.yearX
      console.log('options: ', options.xAxis[0].data)
      console.log('option:', options)
      myChart.setOption(options, true)
    }
  },
  mounted() {
    // this.$nextTick(() => {
    // x轴数据
    // (x2,y2) (x1,y1) (x3,y3)
    this.monthX = this.list.map((item) => item.x2)
    this.dayX = this.list.map((item) => item.x1)
    this.yearX = this.list.map((item) => item.x3)
    // Y轴的数据
    this.dataY.push({
      name: '当月',
      type: 'line', // 直线
      data: this.list.map((item) => item.y2)
    })
    this.dataY.push({
      name: '当日',
      type: 'line',
      data: this.list.map((item) => item.y1)
    })
    this.dataY.push({
      name: '当年',
      type: 'line',
      data: this.list.map((item) => item.y3)
    })
    // })

    let myChart = echarts.init(document.getElementById('main'))
    console.log(myChart)
    this.option = {
      // 图例组件
      legend: {
        icon: 'stack',
        data: ['当日', '当月', '当年'],
        selectedMode: 'single', // 单选
        selected: {
          当天: false,
          当月: true,
          当年: false
        }
      },
      tooltip: {
        trigger: 'axis',
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
      // x轴
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
        data: this.monthX
      },
      // y轴
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
      series: this.dataY
    }
    // 监听图例组件切换事件，切换数据
    // 图例组件，默认当月,x轴为this.monthX;切换当天后,x轴对应this.dayX;
    myChart.on('legendselectchanged', (obj) => {
      console.log(obj)
      let options = myChart.getOption()
      // options.xAxis[0].data = obj.name == '当月' ? this.monthX : this.dayX
      if (obj.name == '当月') {
        options.xAxis[0].data = this.monthX
      } else if (obj.name == '当日') {
        options.xAxis[0].data = this.dayX
      } else {
        options.xAxis[0].data = this.yearX
      }
      console.log('options: ', options.xAxis[0].data)
      // 第二个参数notMerge表示不合并option
      myChart.setOption(options, true)
    })

    document.getElementById('legend').addEventListener('click', (e) => {
      let options = myChart.getOption()
      console.log(options)
      if (e.target.parentNode.nodeName === 'LI') {
        let legendName = e.target.parentNode.getAttribute('index')
        if (legendName == 'month') {
          console.log(options.xAxis[0].data)
          options.xAxis[0].data = this.monthX
        } else if (legendName == 'day') {
          options.xAxis[0].data = this.dayX
        } else {
          options.xAxis[0].data = this.yearX
        }
        myChart.setOption(options, true)
        // this.$nextTick(() => {
        //   this.myChart.setOption(options, true)
        // })
      }
    })
    // 使用刚指定的配置项和数据显示图表。
    console.log('init:', this.option)
    myChart.setOption(this.option)
  }
}
</script>

<style lang="scss" scoped>
#main {
  width: 1200px;
  height: 600px;
}
.list {
  display: flex;
  ul {
    display: flex;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .icon {
    width: 20px;
    height: 14px;
    display: block;
    background-color: #ccc;
  }
  .title {
    margin-left: 5px;
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
}
</style>
