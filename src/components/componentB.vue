<template>
  <div class="component-b">
    <slot>
      <div>slot中默认内容</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "component-b",
  // props: ["my-msg"],
  props: {
    myMsg: String
  },
  methods: {
    getSlot() {
      console.log("$slots:", this.$slots.default[0].text)
    }
  }
}
</script>

<style></style>
