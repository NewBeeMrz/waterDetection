<template>
  <div id="app">
    <!-- 留坑 -->
    <router-view></router-view>
    <!-- <Footer /> -->
    <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 关闭x轴滚动条 移动端演示适配*/
html {
  overflow-y: scroll;
}

:root {
  overflow-y: auto;
  overflow-x: hidden;
}

:root body {
  position: absolute;
}

body {
  width: 100vw;
  overflow: hidden;
}
/* 关闭x轴滚动条 移动端演示适配 --end*/
</style>
