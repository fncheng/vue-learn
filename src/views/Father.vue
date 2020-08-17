// Props传值
<template>
  <div class="father">
    <input type="text" v-model="inputValue" />
    <component-a :my-msg="msg" ref="myComponent"></component-a>
    <button @click="bindClick">点击</button>
  </div>
</template>

<script>
import componentA from "@/components/componentA"
export default {
  components: {
    componentA: componentA
  },
  data() {
    return {
      msg: "12345",
      inputValue: "hello"
    }
  },
  methods: {
    bindClick(props) {
      console.log(props)
      console.log(this.$refs.myComponent)
    }
  }
}
</script>
