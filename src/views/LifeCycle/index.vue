<template>
  <div class="life">
    life
    <my-btn :name="'MyBtn component'"></my-btn>
  </div>
</template>

<script>
import MyBtn from './components/myButton'
export default {
  components: {
    MyBtn
  },
  data() {
    return {
      message: '123'
    }
  },
  beforeCreate: function() {
    console.group('------父组件beforeCreate创建前状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) //undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) //undefined
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  created: function() {
    console.group('------父组件created创建完毕状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) //undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
  },
  beforeMount: function() {
    console.group('------父组件beforeMount挂载前状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) //已被初始化
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
  },
  mounted: async function() {
    let res = await this.getNumber()
    console.log(res)
    console.group('------父组件mounted 挂载结束状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) //已被初始化
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
    console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
  },
  beforeUpdate: function() {
    console.group('父组件beforeUpdate 更新前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  updated: function() {
    console.group('父组件updated 更新完成状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  beforeDestroy: function() {
    console.group('父组件beforeDestroy 销毁前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  destroyed: function() {
    console.group('父组件destroyed 销毁完成状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'message: ' + this.message)
  },
  methods: {
    getNumber() {
      return setTimeout(() => {
        console.log(123)
      }, 3000)
    }
  }
}
</script>

<style></style>
