// Props传值
<template>
  <div class="father">
    <component-a :my-msg="msg"></component-a>
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
      msg: "12345"
    }
  },
  methods: {
    bindClick(props) {
      console.log(props)
    }
  }
}
</script>
