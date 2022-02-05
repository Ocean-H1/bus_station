<template>
    <div class="third">
        <div class="third-header">
        <helpheader></helpheader>
        </div>
        <div class="third-main">
        </div>
        <div class="footer">
        <helpfooter></helpfooter>
        </div>
    </div>
</template>
<script>
import helpheader from '../../components/content2/help-Header/help-header.vue'
import helpfooter from '../../components/content2/help-Footer/help-footer.vue'
export default{
     name:'third',
      data() {
    return {}
  },
  components: {
   helpheader,
  helpfooter
  }
 }
</script>
<style scoped>
.third{
  border: blue;
}
</style>
