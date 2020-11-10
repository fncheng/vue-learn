<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'echarts2',
  data() {
    return {}
  },
  methods: {},
  mounted() {
    const myChart = echarts.init(document.getElementById('main'))
    let option = {
      xAxis: {
        type: 'category',
        data: ['11-1', '11-2', '11-3', '11-4', '11-5', '11-6']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'totalmen',
          data: [120, 332, 901, 400, 600, 800],
          type: 'line',
          smooth: true,
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              x2: 1,
              y: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: '#7DAFFF'
                },
                {
                  offset: 1,
                  color: '#4595FF'
                }
              ]
            },
            width: 3
          }
        },
        {
          name: 'total',
          data: [220, 332, 680, 400, 780, 432],
          type: 'line',
          smooth: true,
          // 线条样式
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              x2: 1,
              y: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: '#82E087'
                },
                {
                  offset: 1,
                  color: '#78C97D'
                }
              ]
            },
            width: 3
          }
        }
      ],
      grid: {
        top: 20,
        right: 60,
        bottom: 20,
        left: 40
      }
    }
    myChart.setOption(option)
    console.log(myChart)
  }
}
</script>

<style scoped>
#main {
  width: 1200px;
  height: 600px;
}
</style>
