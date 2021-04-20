<template>
  <div class="component-communication">
    <h3>Component Communication</h3>
    <my-input @handleKey="handleKeyUp" v-model="msg"></my-input>
    <div v-text="msg"></div>
  </div>
</template>

<script>
import MyInput from './components/MyInput'
export default {
  name: 'Communication',
  components: {
    MyInput
  },
  data() {
    return {
      msg: 'default'
    }
  },
  props: {},
  methods: {
    handleKeyUp(e) {
      console.log('msg:', e)
      this.msg = e
    }
  }
}
</script>

<style></style>
