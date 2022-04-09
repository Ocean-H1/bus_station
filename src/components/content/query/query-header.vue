<template>
  <div class="query-header">
    <!-- 导航栏 -->
    <!--stretch标签撑开 -->
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" stretch>
      <!-- 使用插槽自定义标签的内容，并且可以修改样式-->
      <el-tab-pane class="el-tabs" name="first" @click="new1"
        ><span slot="label" class="style"  >{{ getdate1() }} </span>
        <bottom></bottom>
      </el-tab-pane>
      <el-tab-pane class="el-tabs" name="second"  
        ><span slot="label" class="style" @click="new2">{{ getdate2() }}</span>
        <bottom></bottom>
      </el-tab-pane>
      <el-tab-pane class="el-tabs" name="third"  
        ><span slot="label" class="style" @click="new3">{{ getdate3() }}</span>
        <bottom></bottom>
      </el-tab-pane>
      <el-tab-pane class="el-tabs" name="fourth"
        ><span slot="label" class="style"  @click="new4">{{ getdate4() }}</span>
        <bottom></bottom>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import bottom from '../query/bottom.vue'
export default {
  name: 'query-header',
  inject: ['reload'], // 引入方法
  data() {
    return {
      activeName: this.$route.query.choice || 'first',
    }
  },
mounted(){
      if(!window.name){
        window.name = 'test';
        window.location.reload();
     } 
},
  created(){
    this.getdate1();
   },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
new1(){
		this.$http.get(
		'/query/shuttle/getShuttleList?start_region_id=1&final_region_id=10&shuttle_shift_date=2022-03-06',
		).then(function(res){
			if(res.data.code === 10000){
				console.log(res);
				var flow1 = document.querySelector('#flow1');
				var flow2 = document.querySelector('#flow2');
				flow2.innerHTML = ``
         if(window.sessionStorage.getItem('start_name')&&window.sessionStorage.getItem('final_name')){
                            var de =0
         for(let i = 0;i < res.data.data.flow_shuttle_list.length;i++){
    var flag1 = window.sessionStorage.getItem('day1')
    if(flag1 === res.data.data.flow_shuttle_list[i].shuttle_shift_time.slice(5,10)){
                        var de = 1
     flow1.innerHTML +=`<tr data-tname="城西客运站" class="tr sone" > <td height="42"  ><strong > ${res.data.data.flow_shuttle_list[i].start_station}
			</strong></td>	
		<td style="padding: 7px;"><strong>${res.data.data.flow_shuttle_list[i].shuttle_shift_time}</strong></td>
		<td> ${res.data.data.flow_shuttle_list[i].start_region}</td>	
	    <td><strong> ${res.data.data.flow_shuttle_list[i].final_region}</strong></td> 
		<td>
			<strong> ${res.data.data.flow_shuttle_list[i].shuttle_shift_type}</strong>
		</td>
		<td>${res.data.data.flow_shuttle_list[i].full_lenght}</td>	 
		<td>${res.data.data.flow_shuttle_list[i].car_model}</td>	
		<td><strong>${res.data.data.flow_shuttle_list[i].ticket_price}</strong></td>	 
		<td> ${res.data.data.flow_shuttle_list[i].unuse_ticket_quantity}</td>
		<td class="child"> ${res.data.data.flow_shuttle_list[i].unuse_child_ticket_quantity}</td>
        <td>
			<span>
				<input type="submit" value="购票" class="span${i}" onclick="getticket(this)" >
	    </span>
		</td>
	</tr>
		`
              }            
            }
            if(de != 1){
              alert('抱歉，暂无相关的票务信息');
            }
          }
			}else{
			alert(res.data.message)
			}
		}).catch(function(){

		}
		)
		 },
     new2(){
		this.$http.get(
		'/query/shuttle/getShuttleList?start_region_id=1&final_region_id=10&shuttle_shift_date=2022-03-06',
		).then(function(res){
			if(res.data.code === 10000){
				console.log(res);
				var flow1 = document.querySelector('#flow1');
				var flow2 = document.querySelector('#flow2');
				flow2.innerHTML = ``
         if(window.sessionStorage.getItem('start_name')&&window.sessionStorage.getItem('final_name')){
                   var de =0
        for(let i = 0;i < res.data.data.flow_shuttle_list.length;i++){
    var flag1 = window.sessionStorage.getItem('day2')
    console.log(111111)
    console.log(flag1)
    console.log(res.data.data.flow_shuttle_list[i].shuttle_shift_time.slice(5,10))
    if(flag1 == res.data.data.flow_shuttle_list[i].shuttle_shift_time.slice(5,10)){
         var de =1
     flow1.innerHTML +=`<tr data-tname="城西客运站" class="tr sone" > <td height="42"  ><strong > ${res.data.data.flow_shuttle_list[i].start_station}
			</strong></td>	
		<td style="padding: 7px;"><strong>${res.data.data.flow_shuttle_list[i].shuttle_shift_time}</strong></td>
		<td> ${res.data.data.flow_shuttle_list[i].start_region}</td>	
	    <td><strong> ${res.data.data.flow_shuttle_list[i].final_region}</strong></td> 
		<td>
			<strong> ${res.data.data.flow_shuttle_list[i].shuttle_shift_type}</strong>
		</td>
		<td>${res.data.data.flow_shuttle_list[i].full_lenght}</td>	 
		<td>${res.data.data.flow_shuttle_list[i].car_model}</td>	
		<td><strong>${res.data.data.flow_shuttle_list[i].ticket_price}</strong></td>	 
		<td> ${res.data.data.flow_shuttle_list[i].unuse_ticket_quantity}</td>
		<td class="child"> ${res.data.data.flow_shuttle_list[i].unuse_child_ticket_quantity}</td>
        <td>
			<span>
				<input type="submit" value="购票" class="span${i}" onclick="getticket(this)" >
	    </span>
		</td>
	</tr>
		`
              }            
            }
            if(de == 0){
              alert('抱歉，暂无相关的票务信息');
            }
          }
			}else{
			alert(res.data.message)
			}
		}).catch(function(){

		}
		)
		 },
     new3(){
		this.$http.get(
		'/query/shuttle/getShuttleList?start_region_id=1&final_region_id=10&shuttle_shift_date=2022-03-06',
		).then(function(res){
			if(res.data.code === 10000){
				console.log(res);
				var flow1 = document.querySelector('#flow1');
				var flow2 = document.querySelector('#flow2');
				flow2.innerHTML = ``
         if(window.sessionStorage.getItem('start_name')&&window.sessionStorage.getItem('final_name')){
                            var de =0
         for(let i = 0;i < res.data.data.flow_shuttle_list.length;i++){
    var flag1 = window.sessionStorage.getItem('day3')
    if(flag1 === res.data.data.flow_shuttle_list[i].shuttle_shift_time.slice(5,10)){
     var de = 1
     flow1.innerHTML +=`<tr data-tname="城西客运站" class="tr sone" > <td height="42"  ><strong > ${res.data.data.flow_shuttle_list[i].start_station}
			</strong></td>	
		<td style="padding: 7px;"><strong>${res.data.data.flow_shuttle_list[i].shuttle_shift_time}</strong></td>
		<td> ${res.data.data.flow_shuttle_list[i].start_region}</td>	
	    <td><strong> ${res.data.data.flow_shuttle_list[i].final_region}</strong></td> 
		<td>
			<strong> ${res.data.data.flow_shuttle_list[i].shuttle_shift_type}</strong>
		</td>
		<td>${res.data.data.flow_shuttle_list[i].full_lenght}</td>	 
		<td>${res.data.data.flow_shuttle_list[i].car_model}</td>	
		<td><strong>${res.data.data.flow_shuttle_list[i].ticket_price}</strong></td>	 
		<td> ${res.data.data.flow_shuttle_list[i].unuse_ticket_quantity}</td>
		<td class="child"> ${res.data.data.flow_shuttle_list[i].unuse_child_ticket_quantity}</td>
        <td>
			<span>
				<input type="submit" value="购票" class="span${i}" onclick="getticket(this)" >
	    </span>
		</td>
	</tr>
		`
              }            
            }
            if(de != 1){
              alert('抱歉，暂无相关的票务信息');
            }
          }
			}else{
			alert(res.data.message)
			}
		}).catch(function(){

		}
		)
		 },
     new4(){
		this.$http.get(
		'/query/shuttle/getShuttleList?start_region_id=1&final_region_id=10&shuttle_shift_date=2022-03-06',
		).then(function(res){
			if(res.data.code === 10000){
				console.log(res);
				var flow1 = document.querySelector('#flow1');
				var flow2 = document.querySelector('#flow2');
				flow2.innerHTML = ``
         if(window.sessionStorage.getItem('start_name')&&window.sessionStorage.getItem('final_name')){
                           var de =0
        for(let i = 0;i < res.data.data.flow_shuttle_list.length;i++){
    var flag1 = window.sessionStorage.getItem('day4')
    if(flag1 === res.data.data.flow_shuttle_list[i].shuttle_shift_time.slice(5,10)){
                        var de =1
     flow1.innerHTML +=`<tr data-tname="城西客运站" class="tr sone" > <td height="42"  ><strong > ${res.data.data.flow_shuttle_list[i].start_station}
			</strong></td>	
		<td style="padding: 7px;"><strong>${res.data.data.flow_shuttle_list[i].shuttle_shift_time}</strong></td>
		<td> ${res.data.data.flow_shuttle_list[i].start_region}</td>	
	    <td><strong> ${res.data.data.flow_shuttle_list[i].final_region}</strong></td> 
		<td>
			<strong> ${res.data.data.flow_shuttle_list[i].shuttle_shift_type}</strong>
		</td>
		<td>${res.data.data.flow_shuttle_list[i].full_lenght}</td>	 
		<td>${res.data.data.flow_shuttle_list[i].car_model}</td>	
		<td><strong>${res.data.data.flow_shuttle_list[i].ticket_price}</strong></td>	 
		<td> ${res.data.data.flow_shuttle_list[i].unuse_ticket_quantity}</td>
		<td class="child"> ${res.data.data.flow_shuttle_list[i].unuse_child_ticket_quantity}</td>
        <td>
			<span>
				<input type="submit" value="购票" class="span${i}" onclick="getticket(this)" >
	    </span>
		</td>
	</tr>
		`
              }            
            }
            if(de != 1){
              alert('抱歉，暂无相关的票务信息');
            }
          }
			}else{
			alert(res.data.message)
			}
		}).catch(function(){

		}
		)
		 },

    
    // 不管是否有变化，每一次都要重新执行函数
    getdate1() {
      let date = new Date()
      var month =
      date.getMonth() <= 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()
      if( window.sessionStorage.getItem('shuttle_shift_date').slice(1,4) === '022'){
        getdate = (window.sessionStorage.getItem('shuttle_shift_date').slice(5,10));
        console.log(getdate)
        console.log(1)
        window.sessionStorage.getItem('shuttle_shift_date')==null
         window.sessionStorage.setItem('day1',getdate)
      }
      else{
          var getdate = month + '-' + day 
                   window.sessionStorage.setItem('day1',getdate)
      }
      return getdate
    },
    getdate2: function () {
      let date = new Date()
      var month =
        date.getMonth() <= 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day =
        date.getDate()+1 <= 9 ? '0' + (date.getDate() + 1) : date.getDate() + 1
          var getdate = month + '-' + day 
          window.sessionStorage.setItem('day2',getdate)
      return getdate
    },
    getdate3: function () {
      let date = new Date()
      var month =
        date.getMonth() <= 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day =
        date.getDate()+3 <= 9 ? '0' + (date.getDate() + 2) : date.getDate() + 2
          var getdate = month + '-' + day 
               window.sessionStorage.setItem('day3',getdate)
      return getdate
    },
    getdate4: function () {
      let date = new Date()
      var month =
        date.getMonth() <= 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day =
        date.getDate()+4 <= 9? '0' + (date.getDate() + 3) : date.getDate() + 3
          var getdate = month + '-' + day 
               window.sessionStorage.setItem('day4',getdate)
      return getdate
    },
  },

  computed: {},
  components: {
    bottom,
  },
}
</script>

<style scoped>
/* 修改选项卡的样式 */
.style {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.25rem;
}
.query-header {
  /* width: 53.75rem; */
  width: 100%;
}
/* 通过类名，用到style有scoped中 */
/* .el-tabs__item :hover{
 background: lightblue;
} */
</style> 

			