<template>
  <div class="list">ListItem:<ListItem /></div>
</template>

<script>
import ListItem from './ListItem'
export default {
  name: 'List',
  components: {
    ListItem
  }
}
</script>

<style>
.list {
  width: 200px;
  margin: 0 auto;
}
</style>
