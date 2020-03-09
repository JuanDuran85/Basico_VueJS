<template>
  <div id="app">
    <img alt="logo" src="https://desafiolatam.com/assets/seo/desafiolatam_principal-031aadc574e79866fac011f0e4dae20b0d891d220e593b203b39568a495b894c.jpg">
    <HelloWorld msg="Bienvenidos"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
