// 具名插槽
<template>
  <div class="my-slot-b">
    <p>这是具名插槽</p>
    <slot name="header" :myName="'header slot'">头部内容</slot> <br />
    <slot name="footer">尾部内容</slot> <br />
    <slot name="scope" v-bind:user="'nick'" :age="18"></slot>
  </div>
</template>

<script>
export default {
  name: 'slotA'
}
</script>

<style scoped>
.my-slot-b {
  width: 200px;
  margin: 0 auto;
  margin-bottom: 5px;
  background-color: red;
}
</style>
