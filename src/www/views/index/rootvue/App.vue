<template>
  <div class="vue-entry">
    <vheader></vheader>
    我是入口
        <router-link to="/">Go to Index</router-link>
        <router-link to="/home">Go to Home</router-link>
        <router-link to="/footers">Go to Footer</router-link>
      <router-view></router-view>
  </div>
</template>

<script type='text/javascript'>
  import Header from './components/vheader.vue'

  export default {
    name: 'AppRoot',
    mounted() {
      console.log('我，根组件');
    },
    components: {
      vheader: Header
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

