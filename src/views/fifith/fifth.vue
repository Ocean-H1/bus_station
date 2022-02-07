<template>
  <div class="fifth">
    <div class="fifth-main">
      <aboutmain></aboutmain>
    </div>
    <div class="fifth-footer">
      <aboutfooter></aboutfooter>
    </div>
  </div>
</template>
<script>
import aboutmain from '../../components/content/About-Main/about-main.vue'
import aboutfooter from '../../components/content/About-Footer/about-footer.vue'
export default {
  name: 'fifth',
  data() {
    return {}
  },
  components: {
    aboutmain,
    aboutfooter,
  },
}
</script>
<style  scoped>
</style>