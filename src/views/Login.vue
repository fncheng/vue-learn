<template>
  <div class="login">
    <h1>Login</h1>
    <el-form ref="form">
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.password"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit')
      // axios.post(url,params)
      // .then(res => {
      //   console.log(res)
      // })
      // .catch(err => {
      //   console.error(err);
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 300px;
  margin: 180px auto;
}
</style>
