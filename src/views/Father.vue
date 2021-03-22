// Props传值
<template>
  <div class="father">
    inputValue: <input type="text" v-model="inputValue" /> <br />
    msg: <input type="text" v-model="msg" />
    <div>{{ reverseMsg | all }}</div>
    <component-a v-if="true" :my-msg="msg" ref="myComponent">123</component-a>
    <component-b ref="myComponentB">123</component-b>
    <button @click="bindClick" :disabled="showButton()">
      点击
    </button>
    <button @click="setLocalStorage">存入数据</button>
    <ul @click="dateSwitch">
      <li class="item" index="1">日</li>
      <li class="item" index="2">周</li>
      <li class="item" index="3">月</li>
      <li class="item" index="4">年</li>
    </ul>
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
      inputValue: 'hello',
      isShowButton: false,
      isButton: false
    }
  },
  computed: {
    reverseMsg() {
      console.log('---------------------------------')
      return this.msg
        .split('')
        .reverse()
        .join('')
    }
  },
  watch: {
    inputValue() {
      console.log('inputValue has changed')
    },
    reverseMsg() {
      console.log('reverseMsg has changed')
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
    },
    setLocalStorage() {
      localStorage.setItem('name', 'zs')
    },
    showButton() {
      return true
    },
    dateSwitch(e) {
      e.target.set
      console.log(e.target.getAttribute('index'))
    }
  },
  mounted() {
    console.log('组件：', this.$children)
    // 动态添加路由
    this.$router.addRoutes([
      {
        path: '/test',
        component: () => import('@/views/Test/index')
      }
    ])
    console.log('路由：', this.$router)
  }
}
</script>
