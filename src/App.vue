<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'app',
  components: {
    Home,
  },
  created() {
    // 在页面刷新的时候将vuex里的数据保存到localStorage中
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('dataStore', JSON.stringify(this.$store.state))
    })
    // 在页面加载的时候读取localStorage中的数据
    localStorage.getItem('dataStore') &&
      this.$store.replaceState(
        Object.assign(
          this.$store.state,
          JSON.parse(localStorage.getItem('dataStore'))
        )
      )
  },
}
</script>

<style>
</style>