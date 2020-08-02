<template>
  <div class="about">
    <h1>This is an about page</h1>
    子传父:<button @click="changeCount">Click {{ count }}</button> <br />
    非父子:<button @click="sendMsg">send msg</button>
  </div>
</template>
<script>
import EventBus from "../event-bus"
export default {
  data() {
    return {
      count: 0,
      msg: "Hello"
    }
  },
  methods: {
    changeCount() {
      this.count++
      this.$emit("countChange", this.count)
    },
    sendMsg() {
      EventBus.$emit("msgSend", this.msg)
    }
  },
  beforeRouteEnter() {
    // ...
    console.log("beforeRouteEnter: 路由前置守卫")
  },
  beforeRouteUpdate() {
    console.log("beforeRouteUpdate: 路由更新守卫")
  },
  beforeRouteLeave() {
    // ...
    console.log("beforeRouteLeave: 路由后置守卫")
  }
}
</script>
