<template>
  <div class="mybtn">
    MyBtn
  </div>
</template>

<script>
export default {
  name: 'MyBtn',
  props: {
    name: {
      type: String
    }
  },
  beforeCreate: function() {
    console.group('------子组件beforeCreate创建前状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) //undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) //undefined
  },
  created: function() {
    console.group('------子组件created创建完毕状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) //undefined
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
    console.log('%c%s', 'color:red', 'name: ' + this.name) //已被初始化
  },
  beforeMount: function() {
    console.group('------子组件beforeMount挂载前状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) //已被初始化
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
    console.log('%c%s', 'color:red', 'name: ' + this.name) //已被初始化
  },
  mounted: function() {
    console.group('------子组件mounted 挂载结束状态------')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el) //已被初始化
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data) //已被初始化
    console.log('%c%s', 'color:red', 'name: ' + this.name) //已被初始化
  },
  beforeUpdate: function() {
    console.group('子组件beforeUpdate 更新前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'name: ' + this.name)
  },
  updated: function() {
    console.group('子组件updated 更新完成状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'name: ' + this.name)
  },
  beforeDestroy: function() {
    console.group('子组件beforeDestroy 销毁前状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'name: ' + this.name)
  },
  destroyed: function() {
    console.group('子组件destroyed 销毁完成状态===============》')
    console.log('%c%s', 'color:red', 'el     : ' + this.$el)
    console.log(this.$el)
    console.log('%c%s', 'color:red', 'data   : ' + this.$data)
    console.log('%c%s', 'color:red', 'name: ' + this.name)
  }
}
</script>

<style></style>
