<template>
  <div class="slot">
    <slot-a>123456插槽内容</slot-a>
    <slot-a></slot-a>
    <slot-b>
      <template v-slot:header="headerProps">
        插槽头部
        {{ headerProps.myName }}
      </template>
      <!-- 作用域插槽 -->
      <template v-slot:scope="slotProps">
        {{ slotProps }} <br />
        {{ slotProps.user }} <br />
        {{ slotProps.age }}
       obj: {{slotProps.obj}}
      </template>

      <div slot="footer">
        插槽底部
      </div>
    </slot-b>
    <component-name>插槽自定义内容</component-name>
  </div>
</template>

<script>
import slotA from '../../components/slotA'
import slotB from '@/components/slotB'
import ComponentName from './components/SomeComponent'
export default {
  data() {
    return {
      user: {
        firstName: 'first',
        lastName: 'last'
      }
    }
  },
  name: 'mySlot',
  components: {
    'slot-a': slotA,
    'slot-b': slotB,
    'component-name': ComponentName
  }
}
</script>

<style></style>
