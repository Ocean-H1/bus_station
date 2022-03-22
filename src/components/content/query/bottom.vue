<template>
    <div class="bottom">
        <!-- 车型说明 -->
					<div class="car">
						<p>车型说明：同班线路,车型越高,票价越高,舒适度越高。</p>
						<!-- <div id="hint" style="display: block; color: rgb(0, 0, 255); font-size: 13px; padding-left: 10px;"></div> -->
						<!-- <p>西安客运站</p> -->
					</div>

					<!-- 流水班车  -->
					<div id="c01">
						<p style="color: #af0609; ">流水班：即滚动发车，乘客须在截止时间之前到站乘车。</p>
						<div class="flow-water">
							<table class="table_list" width="100%" border="0" cellspacing="0"
								cellpadding="0">
								<tbody>
									<tr class="stwo1">
										<td class="stationName" width="10%" height="35">乘车车站</td>
										<td class="start" width="16%">截止时间</td>
										<td class="stationName" width="10%">途经站</td>
										<td class="stationName" width="10%">终点站</td>
										<td class="classType" width="8%">班次类型</td>
										<td class="mileage" width="9%">里程</td>
										<td class="stationName" width="10%">车型</td>
										<td class="priceNumber" width="6%">票价</td>
										<td class="priceNumber" width="6%">票数</td>
										<td class="child" width="8%">免票儿童数</td>
										<td class="operation" width="7%">操作</td>
									</tr>
								</tbody>
	<!-- 流水班 -->
<tbody class="show-ticket-one" id="flow1">
</tbody>
							</table>
						</div>
					</div>

					<!-- 固定班车 -->
					<div id="c02">
						<div class="wflow">
							<p class="blue">固定班：乘客须按发车时间准时乘车。</p>
						</div>
						<div class="fixed">
							<table class="table_list_two" border="0" 
								cellspacing="0" cellpadding="0">
								<tbody>
									<tr class="stwo2">
										<td class="stationName" width="10%" height="35">乘车车站</td>
										<td class="start" width="16%">发车时间</td>
										<td class="stationName" width="10%">途经站</td>
										<td class="stationName" width="10%">终点站</td>
										<td class="classType" width="8%">班次类型</td>
										<td class="mileage" width="9%">里程</td>
										<td class="stationName" width="10%">车型</td>
										<td class="priceNumber" width="6%">票价</td>
										<td class="priceNumber" width="6%">票数</td>
										<td class="child" width="8%">免票儿童数</td>
										<td clsss="operation" width="7%">操作</td>
									</tr>
								</tbody>
<tbody id="show-ticket-two">
  	<tr data-tname="城西客运站" class="tr sone" id="flow2"> 
	<td></td>
	</tr>
								</tbody>
							</table>
						</div>
					</div>
				<td>
		</td>
				</div>

</template>
<script>
export default {
    name:'bottom',
	data(){
		return{
		
		}
	},
	created:function(){
		this.getShuttleList()
	},
	// 钩子函数，初始化页面完成以后，在对dom结点进行相关操作
	mounted(){
		window.getticket = this.getticket
	},
	methods:{
		getticket(){
		var result = confirm("温馨提示：购票后请到窗口办理取票!");
		if(result===true){
			if(this.$store.state.isLogin===1){
             this.$router.push({path:'placeorder'});
			}else{
				alert('请先登陆');
				window.open('http://localhost:8080/login');
			}
		
        }
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
				<input type="submit" value="购票" class="span_pr" onclick="getticket()" >
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
*{
    font-family: "Microsoft YaHei",\5fae\8f6f\96c5\9ed1,arial,\5b8b\4f53;
     margin: 0;
    padding: 0;
}
.car p,#c01 p,.blue{
    font-size: .9375rem;
    line-height: 1.3125rem;
    white-space: nowrap;
    color: #666;
    font-weight: 100;
    padding: .6625rem;
    /* font-weight: bold; */
}
#c01 p{
    color: red;
}
.blue{
    color: darkcyan;
}
.in{
	position: absolute;
	top: 8.7rem;
	left: 49.8rem;
}
.flow-water,.fixed{
    font-size: .7875rem;
    color: #444;
    margin-top: .6625rem;
    border: 1px solid #6ABDF1;
}
table{
    font-size: .7875rem;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: #fff;
    width: 100%;
    border: 1px solid #fff;
    text-align: center;
    overflow: hidden;
    color: #403c3b;
}
.stwo1,stwo2{
    line-height:1.125rem;
    padding: .2125rem;
    font-size: .7875rem;
    overflow: hidden;
    background-color:lightpink;
}
.stwo2{
    background-color: lightskyblue;
}
tr{
	background: lightcyan;
}
span input{
    font-family: tahoma;
	/* 设置一个元素的垂直对齐方式。 */
    vertical-align: baseline;
    border: 0 none;
    color: #FAFAFA;
    cursor: pointer;
    height: 1.2875rem;
    padding-bottom: 2px;
    text-align: center;
    width: 3.1625rem;
    line-height: 1.2875rem;
    background: lightsalmon;
}

</style>



