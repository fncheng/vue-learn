<template>
  <div id="media">
    <Aplayer :options="options" />
    <div @click="init()">123</div>
  </div>
</template>

<script>
import Aplayer from '@/common/aplayer'
export default {
  components: {
    Aplayer
  },
  data() {
    return {
      options: {
        container: null,
        fixed: false,
        mini: false,
        autoplay: false, // 自动播放 //主题色
        loop: 'all', //音频循环播放, 可选值: 'all', 'one', 'none'
        order: 'list', //音频循环顺序, 可选值: 'list', 'random'
        preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
        volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
        audio: [
          // 音频信息, 应该是一个对象或对象数组
          {
            name: 'arr', // 音频名称
            artist: 'artist', // 音频艺术家
            url: 'url.mp3', // 音频链接
            cover: 'cover.jpg' //音频封面
          }
        ]
      }
    }
  }
}
</script>

<style></style>
