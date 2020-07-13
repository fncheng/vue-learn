<template>
  <div class="uesr">
    <ul>
      <li>{{ myname }}</li>
      <li>{{ price }}</li>
      <li>{{ info }}</li>
    </ul>
    <p>{{ username }}</p>
    <!-- 路由出口 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    myname: String,
    price: Number,
    info: String
  },
  computed: {
    username() {
      return this.$store.state.name
    }
  }
}
</script>

<style></style>
