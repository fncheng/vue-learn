<template>
  <div class="user-profile">
    <h3>用户中心UserProfile</h3>
    我是兄弟组件: <span>{{ myMsg }}</span>
  </div>
</template>

<script>
import EventBus from "../event-bus"
export default {
  data() {
    return {
      myMsg: "Hi"
    }
  },
  mounted() {
    EventBus.$on("msgSend", this.sendMsg)
  },
  methods: {
    sendMsg(msg) {
      this.myMsg = msg
      console.log(msg)
    }
  },
  // 销毁eventbus
  beforeDestroy() {
    EventBus.$off("msgSend", () => console.log("eventbus已被销毁"))
  }
}
</script>

<style></style>
