<template>
  <div class="my-input">
    <el-input
      v-model="msg"
      placeholder="Please Type Here"
      size="small"
      :maxlength="50"
      max="50"
      @keyup.enter.native="handleKeyup($event)"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    handleKeyup(e) {
      console.log(e.target.value)
      console.log('msg input: ', this.msg)
      this.$emit('handleKey', this.msg)
    }
  }
}
</script>

<style>
.my-input {
  width: 200px;
  margin: 0 auto;
}
</style>
