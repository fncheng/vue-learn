<template>
  <label>
    {{ label }}- {{ $attrs.placeholder }}-
    <input v-bind="$attrs" />
  </label>
</template>

<script>
export default {
  props: {
    label: String
  },
  // inheritAttrs 属性继承
  // https://cn.vuejs.org/v2/guide/components-props.html#%E7%A6%81%E7%94%A8-Attribute-%E7%BB%A7%E6%89%BF
  inheritAttrs: false,
  mounted() {
    console.log(this.$attrs)
  }
}
</script>

<style></style>
