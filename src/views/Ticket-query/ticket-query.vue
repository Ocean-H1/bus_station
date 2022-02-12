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

    </div>
</template>

<script>
import step from '../../components/content/query/step.vue'
import queryheader from '../../components/content/query/query-header.vue'
  export default{
    name:'ticketquery',
    data(){
      return{}
    },
    components:{
      step,
      queryheader
    }
  }
</script>
<style scoped>

</style>