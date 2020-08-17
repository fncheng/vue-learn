<template>
  <div class="about">
    <h1>This is an about page</h1>
    子传父:<button @click="changeCount">Click {{ count }}</button> <br />
    非父子:<button @click="sendMsg">send msg</button>
    <div id="dynamic-component-demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <keep-alive>
        <component v-bind:is="currentTabComponent" class="tab"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import EventBus from "../event-bus"
import tabArchive from "@/components/tab-archive"
import tabPosts from "@/components/posts-tab"
export default {
  data() {
    return {
      count: 0,
      msg: "Hello",
      currentTab: "Posts",
      tabs: ["Posts", "Archive"]
    }
  },
  components: {
    tabArchive,
    tabPosts
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase()
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
  beforeRouteEnter(to, from, next) {
    // ...
    console.group("----beforeRouteEnter: About组件前置守卫----")
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log("----beforeRouteUpdate: About组件更新守卫----")
    next()
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log("----beforeRouteLeave: About组件后置守卫----")
    next()
  }
  /* beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate")
    next()
  } */
}
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
