<template>
  <div class="Home">
      <div class="header">头部</div>
      <div class="container">
          <router-view></router-view>
      </div>
      <div class="footer">尾部</div>
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>