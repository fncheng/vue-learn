// Props传值
<template>
  <div class="father">
    <input type="text" v-model="inputValue" />
    <component-a :my-msg="msg" ref="myComponent">123</component-a>
    <component-b ref="myComponentB">123</component-b>
    <button @click="bindClick">点击</button>
  </div>
</template>

<script>
import componentA from '@/components/componentA'
import componentB from '@/components/componentB'
export default {
  components: {
    componentA: componentA,
    componentB: componentB
  },
  data() {
    return {
      msg: '12345',
      inputValue: 'hello'
    }
  },
  methods: {
    bindClick(props) {
      console.log(props)
      // console.log(this.$refs.myComponent)
      // console.log("Father B: ", this.$el)
      // console.log("B: ", this.$refs["myComponentB"].$el.innerText)
      // console.log("$slot: ", this.$slots)
      this.$refs.myComponentB.getSlot()
    }
  },
  mounted() {
    console.log('组件：', this.$children)
  }
}
</script>
