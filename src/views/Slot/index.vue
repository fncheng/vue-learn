<template>
  <div class="slot">
    <slot-a>123456插槽内容</slot-a>
    <slot-a></slot-a>
    <slot-b>
      <template v-slot:header>
        头部123
      </template>
      <!-- 作用域插槽 -->
      <template v-slot="slotProps">
        {{ slotProps }} <br />
        {{ slotProps.user }} <br />
        {{ slotProps.age }}
      </template>

      <template v-slot:footer>
        尾部456
      </template>
    </slot-b>
  </div>
</template>

<script>
import slotA from "../../components/slotA"
import slotB from "@/components/slotB"
export default {
  data() {
    return {
      user: {
        firstName: "first",
        lastName: "last"
      }
    }
  },
  name: "mySlot",
  components: {
    "slot-a": slotA,
    "slot-b": slotB
  }
}
</script>

<style></style>
