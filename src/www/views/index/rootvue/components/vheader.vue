<template>
  <div class="header">
  	我是入口
        <router-link to="/">Go to Index</router-link>
        <router-link to="/home">Go to Home</router-link>
        <router-link to="/footers">Go to Footer</router-link>
  </div>
</template>

<script>
export default {
  name: 'vheader',
  data() {
    return {
      header: '我是头部'
    }
  }
}
</script>

<style scoped>
:root {
  --color: #242f42;
}
.header{
	width:100%;
	height:65px;
	background:var(--color);
}
</style>

