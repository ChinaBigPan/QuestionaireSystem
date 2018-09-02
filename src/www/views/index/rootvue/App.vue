<template>
  <div class="vue-entry">
    我是入口
  </div>
</template>

<script type='text/javascript'>
  export default {
    name: 'AppRoot',
    mounted() {
      console.log('我，根组件');
    }
  }
</script>

<style scoped>
:root {
  --green: blue;
}

.vue-entry {
  color: var(--green);
}
</style>

