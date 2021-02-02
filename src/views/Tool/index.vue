<template>
  <div id="tool">
    <el-input
      placeholder="请输入内容"
      v-model="input"
      clearable
      max="200px"
      @keyup.enter.native="transForm"
      @clear="clearMsg"
    >
    </el-input>
    <el-input
      type="textarea"
      :rows="20"
      placeholder="输出结果"
      v-model="textarea"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      textarea: ''
    }
  },
  methods: {
    transForm(e) {
      if (e.target.value) {
        let res = e.target.value.split('&')
        let res1 = res.map((v) => v.split('=')[0] + ':' + v.split('=')[1])
        res1.forEach((v) => {
          this.textarea += `${v}\n`
        })
      } else return
    },
    clearMsg() {
      this.textarea = ''
    }
  }
}
</script>

<style scoped>
#tool {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.el-input {
  width: 300px;
}
.el-textarea {
  width: 600px;
}
</style>
