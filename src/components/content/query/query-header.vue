<template>
    <div class="query-header">
         <!-- 导航栏 -->
        <!--stretch标签撑开 -->
     <el-tabs  v-model="activeName" type="card" @tab-click="handleClick" stretch>
       <!-- 使用插槽自定义标签的内容，并且可以修改样式-->
      <el-tab-pane  class="el-tabs" name="first"><span slot="label" class="style">{{getdate1()}}
      </span>
       <bottom></bottom>
       </el-tab-pane>
      <el-tab-pane  class="el-tabs" name="second"><span slot="label" class="style">{{getdate2()}}</span>
       <bottom></bottom>
      </el-tab-pane>
      <el-tab-pane  class="el-tabs" name="third"><span slot="label" class="style">{{getdate3()}}</span>
       <bottom></bottom>
       </el-tab-pane>
      <el-tab-pane  class="el-tabs" name="fourth"><span slot="label" class="style">{{getdate4()}}</span>
       <bottom></bottom>
      </el-tab-pane>
    </el-tabs>
    </div>
</template>

<script>
import bottom from '../query/bottom.vue'
 export default {
     name:'query-header',
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
          // 不管是否有变化，每一次都要重新执行函数
      getdate1:function(){
       let date = new Date();
       var month = date.getMonth()<=9?"0"+(date.getMonth()+1):(date.getMonth()+1)
       var day = date.getDate()<=9?"0"+(date.getDate()):date.getDate()
       var  getdate = month+ '月' + day + '日';
       return getdate
      },
       getdate2:function(){
        let date = new Date();
       var month = date.getMonth()<=9?"0"+(date.getMonth()+1):(date.getMonth()+1)
       var day = date.getDate()<=9?"0"+(date.getDate()+1):(date.getDate()+1)
       var  getdate = month+ '月' + day + '日';
       return getdate
      },
       getdate3:function(){
        let date = new Date();
       var month = date.getMonth()<=9?"0"+(date.getMonth()+1):(date.getMonth()+1)
       var day = date.getDate()<=9?"0"+(date.getDate()+2):(date.getDate()+2)
       var  getdate = month+ '月' + day + '日';
       return getdate
      },
       getdate4:function(){
         let date = new Date();
       var month = date.getMonth()<=9?"0"+(date.getMonth()+1):(date.getMonth()+1)
       var day = date.getDate()<=9?"0"+(date.getDate()+3):(date.getDate()+3)
       var  getdate = month+ '月' + day + '日';
       return getdate
      }
    },
    computed:{
    
    },
    components:{
      bottom
    }
  };
</script>

<style scoped>

/* 修改选项卡的样式 */
.style{
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.25rem;
}
/* 通过类名，用到style有scoped中 */
/* .el-tabs__item :hover{
 background: lightblue;
} */
</style> 

			