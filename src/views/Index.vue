<template>
  <div class="index">
    <h1>Index页面</h1>
  </div>
</template>

<script>
// import { getAllFiles } from "../Api/api"
// import service from "../utils/util"
export default {
  name: "Index",
  data() {
    return {
      msg: "hello vue"
    }
  },
  created() {
    // 创建axios实例,然后通过实例直接调用axios身上的方法
    // service.get("https://gonelist.cugxuan.cn/onedrive/getallfiles")
    // service({
    //   method: "GET"
    // })
    //   .then(result => {
    //     console.log(result)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
    // ------------等效于------------
    // getAllFiles("https://gonelist.cugxuan.cn", "/").then(res => console.log(res))
  }
}
</script>

<style></style>
