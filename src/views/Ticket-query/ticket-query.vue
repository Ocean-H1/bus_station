<template>
  <div class="ticketquery">
    <!-- 顶部 -->
    <div class="left">
   <div class="top">
      <step></step>
    </div>
    <!-- 导航栏 -->
    <div class="query-header">
      <queryheader></queryheader>
    </div>
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
      inject:['reload'],
  data() {
    return {}
  },
  created:function(){
    this.reload();
  },
  mounted(){
   this.GetRequest()
  this.getShuttleList()
  },
  components: {
    step,
    queryheader,
    slidebar,
  },
  methods:{
    GetRequest() {
      window.sessionStorage.setItem('start_name',this.$route.query.start_name)
      window.sessionStorage.setItem('final_name',this.$route.query.final_name)
     window.sessionStorage.setItem('shuttle_shift_date',this.$route.query.shuttle_shift_date)
},
    getShuttleList(){
		this.$http.get(
		'/query/shuttle/getShuttleList?start_region_id=1&final_region_id=10&shuttle_shift_date=2022-03-06',
		).then(function(res){
			if(res.data.code === 10000){
				console.log(res);
				var flow1 = document.querySelector('#flow1');
				var flow2 = document.querySelector('#flow2');
				flow2.innerHTML = ``
         if(window.sessionStorage.getItem('start_name')&&window.sessionStorage.getItem('final_name')&&window.sessionStorage.getItem('shuttle_shift_date')){
         console.log(1)
         for(let i = 0;i < res.data.data.flow_shuttle_list.length;i++){
          console.log(3)
          console.log(res.data.data.flow_shuttle_list[i].shuttle_shift_time.slice(5,10))
    var flag1 = (res.data.data.flow_shuttle_list[i].shuttle_shift_time.slice(0,10)==window.sessionStorage.getItem('shuttle_shift_date'))
   var haha = (res.data.data.flow_shuttle_list[i].final_region==window.sessionStorage.getItem('final_name'))
   var flag = (res.data.data.flow_shuttle_list[i].start_region==window.sessionStorage.getItem('start_name'))
    if(flag&&haha&&flag1){
      var de = 1;
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
		 }
  }
}
</script>
<style scoped>
.ticketquery {
 display: flex;
  overflow: hidden;
}
.left{
  width: 80%;
  display: flex;
  flex-direction: column;
}
.top {
  width: 100%;
  flex: 1;
}
.query-header{
    width: 100%;
   flex: 5;
   margin-top: 1rem;

}
.slidebar {
  margin-top: 1.25rem;
  position: relative;
  width: 23%;
  margin-left: 10px;
  /* left: 77rem;
  top: 8.5rem; */
}
</style>