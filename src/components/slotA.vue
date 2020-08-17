// 插槽和后备内容
<template>
  <div class="my-slot-a">
    <p>这是插槽</p>
    <slot>这是后备内容</slot>
  </div>
</template>

<script>
export default {
  name: "slotA"
}
</script>

<style scoped>
.my-slot-a {
  width: 200px;
  margin: 0 auto;
  margin-bottom: 5px;
  background-color: #ccc;
}
</style>
