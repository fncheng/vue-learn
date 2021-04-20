<template>
  <div class="learnvue">
    <base-input
      label="姓名"
      class="name-input"
      placeholder="请输入姓名"
      test-attrs="$attrs"
    ></base-input>
  </div>
</template>

<script>
import BaseInput from './components/BaseInput'
export default {
  name: 'learn-vue',
  components: {
    BaseInput
  }
}
</script>

<style></style>
