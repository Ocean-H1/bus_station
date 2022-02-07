<template>
  <div class="second">
    <div class="second-main">
      <refundbox></refundbox>
    </div>
    <div class="second-footer"></div>
  </div>
</template>
<script>
import refundbox from '../../components/content/refund-Main/refund-main.vue'

export default {
  name: 'second',
  data() {
    return {}
  },
  components: {
    refundbox,
  },
}
</script>
                 
<style scoped>
.second-main {
  display: flex;
  justify-content: center;
}
</style>


