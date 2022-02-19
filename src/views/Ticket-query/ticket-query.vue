<template>
  <div class="ticketquery">
    <!-- 顶部 -->
    <div class="top">
      <step></step>
    </div>
    <!-- 导航栏 -->
    <div class="query-header">
      <queryheader></queryheader>
    </div>
    <!-- 侧边栏 -->
    <div class="slidebar">
      <slidebar></slidebar>
    </div>
  </div>
</template>

<script>
import step from '../../components/content/query/step.vue'
import queryheader from '../../components/content/query/query-header.vue'
import slidebar from '../../components/content/query/slide.vue'
export default {
  name: 'ticketquery',
  data() {
    return {}
  },
  components: {
    step,
    queryheader,
    slidebar,
  },
}
</script>
<style scoped>
.ticketquery {
  /* height: 90vh; */
}
.slidebar {
  display: block;
  position: absolute;
  right: 3.25rem;
  top: 9.8rem;
}
</style>