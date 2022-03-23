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
  data() {
    return {}
  },
  created:function(){
				this.getShuttleList()
  },
  components: {
    step,
    queryheader,
    slidebar,
  },
  methods:{
    getShuttleList(){
		this.$http.get(
		'/query/shuttle/getShuttleList?start_region_id=1&final_region_id=10&shuttle_shift_date=2022-03-06',
		).then(function(res){
			if(res.data.code === 10000){
				console.log(1)
				console.log(res);
				var flow1 = document.querySelector('#flow1');
				var flow2 = document.querySelector('#flow2');
				flow2.innerHTML = ``
				for(let i = 0;i < res.data.data.flow_shuttle_list.length;i++){
                  flow1.innerHTML +=`<tr data-tname="城西客运站" class="tr sone" > <td height="42"  ><strong > ${res.data.data.flow_shuttle_list[0].start_station}
			</strong></td>	
		<td style="padding: 7px;"><strong>${res.data.data.flow_shuttle_list[0].shuttle_shift_time}</strong></td>
		<td> ${res.data.data.flow_shuttle_list[0].start_region}</td>	
	    <td><strong> ${res.data.data.flow_shuttle_list[0].final_region}</strong></td> 
		<td>
			<strong> ${res.data.data.flow_shuttle_list[0].shuttle_shift_type}</strong>
		</td>
		<td> ${res.data.data.flow_shuttle_list[0].full_lenght}</td>	 
		<td> ${res.data.data.flow_shuttle_list[0].car_model}</td>	
		<td><strong> ${res.data.data.flow_shuttle_list[0].ticket_price}</strong></td>	 
		<td> ${res.data.data.flow_shuttle_list[0].unuse_ticket_quantity}</td>
		<td class="child"> ${res.data.data.flow_shuttle_list[0].unuse_child_ticket_quantity}</td>
        <td>
			<span>
				<input type="submit" value="购票" class="span${i}" onclick="getticket(this)" >
	    </span>
		</td>
	</tr>
		`
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