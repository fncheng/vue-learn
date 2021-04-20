// provide / inject
<template>
  <div class="component">
    <List />
  </div>
</template>

<script>
import List from './components/List'
export default {
  name: 'Communication',
  components: {
    List
  },
  data() {
    return {
      msg: 'default'
    }
  },
  methods: {
    getMsg() {
      alert(this.msg)
    }
  },
  props: {},
  provide: function() {
    return {
      getMsg: this.getMsg
    }
  }
}
</script>

<style></style>
