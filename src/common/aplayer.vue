<template>
  <div id="aplayer"></div>
</template>

<script>
import 'aplayer/dist/APlayer.min.css'
import APlayer from 'aplayer'
export default {
  data() {
    return {}
  },
  props: {
    options: {
      type: Object,
      require: true,
      container: {
        type: String,
        require: true
      },
      fixed: {
        type: Boolean,
        default: false
      }, //开启吸底模式,
      mini: {
        type: Boolean,
        default: false
      }, //开启迷你模式
      autoplay: {
        type: Boolean,
        default: false
      }, // 自动播放
      theme: {
        type: String,
        default: '#b7daff'
      } //主题色
    }
  },
  mounted() {
    /* eslint-disable */
    this.options.container = document.getElementById('aplayer')
    new APlayer(this.options)
  }
}
</script>

<style></style>
