<template>
<div class="placeorder">
    <div class="left">
        <step></step>
<!-- 购买的车票信息 -->
 <!-- @submit.prevent="submit($event)"  -->
<form action="" >
<div class="message">
    <div class="sa">
        <!-- <font> 规定文本的字体、字体尺寸、字体颜色 -->
        <em class="weisa">您要购买的
            <strong>
                <font class="blue" style="color:blue;font-size:1.1rem">车票信息</font>
            </strong>如下:
        </em>
    </div>
    <div class="chose">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
                <tr class="fonw">
                    <td height="38" class="c1 c2" width="14%">发车时间</td>
                    <td width="21%" class="c1 c2">始发站</td>
                    <td width="21%" class="c1 c2">目的站</td>
                    <td width="8%" class="c1 c2">全价(元)</td>
                    <td width="8%" class="c1 c2">半价(元)</td>
                    <td width="8%" class="c1 c2">剩余票数</td>
                    <td width="6%" class="c1 c2">班次类型</td>
                    <td width="8%" class="c1 c2">里程</td>
                    <td width="8%" class="c2">车型</td>
                </tr>
                <tr>
                    <td height="55" width="14%">
                        2022-02-18 08:00 
                    </td>
                    <td width="21%">宜宾市高速公路客运站</td>
                    <td width="21%">自贡</td>
                    <td width="6%">28.00</td>
                    <td width="6%">14.00</td>
                    <td width="6%">29</td>
                    <td width="6%">
                        固定班</td>
                    <td width="8%">82公里</td>
                    <td width="8%">中型高一30</td>
                </tr>
            </tbody>
        </table>
    </div>
      <!-- 联系人信息 -->
  <div class="link">
      <div class="top">
       <em>
           联系人信息：<span>*</span>为必填项
       </em>
      </div>
      <div class="bottom">
          <h3 >请选择联系人:</h3>
          <br>
          <br>
          <ul class="link1">
              <li>姓名
                  <span>*&nbsp;</span>
                  <input type="text" id="name" name="contact_person_name" class="bt1" @blur ="getname()">
                  <div id="pleasename" style="display:none;color:red;margin-left:2.7rem">请输入姓名</div>
              </li>
              <li>
                  手机
                   <span>*&nbsp;</span>
                  <input type="text" name="contact_person_phone_number" class="bt2">
              </li>
              <li>
                  邮箱
                  <input type="text" name="contact_person_email">
              </li>
              <li>
                  <input type="checkbox" name="save" class=save1 >
                  <label for="save" class=save2 >
                    保存至常用联系人
                  </label>
              </li>
          </ul>
      </div>
  </div>
      <!-- 乘车人信息 -->
      <div class="riding">
        <div style="float: left;">
	      <i class="weisa">乘车人信息:
           <span>*</span>
           为必填项 &nbsp;&nbsp;&nbsp; 
           </i>
           <span style="color: red;">
               (当前免票儿童数：)
           </span>
		</div>
      <div class="please">
          <h3>请选择乘车人:</h3>
      </div>
      <div class="newpassenger">
          <table style="cellspacing:0;">
              <tbody class="hahh">
                 <tr>
                    <th style="width: 10%">票种</th>
                    <th style="width: 10%">是否携带1.2米以下儿童</th>
                    <th style="width: 15%"><span>*</span>姓名</th>
                    <th style="width: 10%"><span>*</span>证件</th>
                    <th style="width: 23%"><span>*</span>证件号</th>
                    <th style="width: 15%" class="class_have_insurant">购买保险</th>
                	<th style="width: 7%">&nbsp;</th>
                </tr>
				<tr>
                    <td>
                        <select>
                            <option>成人票</option>
                            <option>半票</option>
                            <option>携童票</option>
                        </select>
                    </td>
                    <td>
                         <select>
                            <option>否</option>
                            <option>是</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="passenger_name" class="bt3">
                    </td>
                    <td>
                         <select>
                            <option>身份证</option>
                            <option>军人证</option>
                            <option>护照</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="passenger_card_number" class="bt4">
                    </td>
                    <td>
                        <input type="checkbox" name="buying_insurance" >
                    </td>
                </tr>	
                <!-- <tr style="display:none" class="tr2">
                    <td>
                        <select>
                            <option>成人票</option>
                            <option>半票</option>
                            <option>携童票</option>
                        </select>
                    </td>
                    <td>
                         <select>
                            <option>否</option>
                            <option>是</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="passenger_name">
                    </td>
                    <td>
                         <select>
                            <option>身份证</option>
                            <option>军人证</option>
                            <option>护照</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="passenger_card_number" class="bt3">
                    </td>
                    <td>
                        <input type="checkbox" name="buying_insurance" class="bt4">
                    </td>
                </tr>
                <tr style="display:none" class="tr3">
                    <td>
                        <select>
                            <option>成人票</option>
                            <option>半票</option>
                            <option>携童票</option>
                        </select>
                    </td>
                    <td>
                         <select>
                            <option>否</option>
                            <option>是</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="passenger_name">
                    </td>
                    <td>
                         <select>
                            <option>身份证</option>
                            <option>军人证</option>
                            <option>护照</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="passenger_card_number" class="bt3">
                    </td>
                    <td>
                        <input type="checkbox" name="buying_insurance" class="bt4">
                    </td>
                </tr>
                <tr style="display:none" class="tr4">
                    <td>
                        <select>
                            <option>成人票</option>
                            <option>半票</option>
                            <option>携童票</option>
                        </select>
                    </td>
                    <td>
                         <select>
                            <option>否</option>
                            <option>是</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="passenger_name">
                    </td>
                    <td>
                         <select>
                            <option>身份证</option>
                            <option>军人证</option>
                            <option>护照</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="passenger_card_number" class="bt3">
                    </td>
                    <td>
                        <input type="checkbox" name="buying_insurance" class="bt4">
                    </td>
                </tr>
                <tr style="display:none" class="tr5">
                    <td>
                        <select>
                            <option>成人票</option>
                            <option>半票</option>
                            <option>携童票</option>
                        </select>
                    </td>
                    <td>
                         <select>
                            <option>否</option>
                            <option>是</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="passenger_name">
                    </td>
                    <td>
                         <select>
                            <option>身份证</option>
                            <option>军人证</option>
                            <option>护照</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="passenger_card_number" class="bt3">
                    </td>
                    <td>
                        <input type="checkbox" name="buying_insurance" class="bt4">
                    </td>
                </tr> -->
                <div class="nav" id="add_ticket_passenger">
                <span>
				<input type="button" class="n" value="添加乘车人" @click="add"/>
				</span>
				</div>					
              </tbody>
          </table>
      </div>
            </div>
            <div class="add" style="clear:both">
                <span>
                    一个订单最多可订购
                    <font>5张</font>
                    车票
                </span>
            </div>
            <div class="border">
<div class="new">
    <input type="checkbox" id="know" class="bt5" >
    <label for="know" >我已阅读并同意<a href="javascript:;">《购票须知》</a></label>
</div>
<div class="submit" >
    <!-- 阻止事件冒泡，event.propogation()子 -->
    <input type="button" value="提交订单" @click.stop="submit">
</div>
</div>
</div>
</form>
</div>
<div class="sidebar">
					<div class="mar">
						 <!-- <input class="flow-mb" disabled="disabled"> -->
                        重要提示
					</div>
					<div class="flow-main">
						<p>1、成人及身高超过1.5米的儿童须购买全价票，供给座位。</p>
						<p>2、身高1.2米至1.5米的儿童购买半价儿童票，供给座位。</p>
						<p>3、身高1.2米以下儿童属免票儿童，须由购买了“成人票”，并在“是否携带1.2米以下儿童”选项中选择“是”的一名成人带领下免费乘车。一张“成人票”最多可以携带一名免票儿童，免票儿童无座位。一名成人携带免票儿童超出一名时，应为超出的儿童购买儿童半票，儿童半票供给座位。</p>
						<p>4、旅客随身携带乘车的物品，每一张全票可免费10千克，每一张儿童票可免费5千克；体积不能超过0.05立方米，长度不能超过1.8米，并以能放置本人座位下或车内行李架上为限。超过规定时，其超过部分按行包收费；占用座位时，按实际占用座位数购票。</p>
						<p>5、网上售票暂不支持网上改签。</p>
						<p>6、您可以到始发站的自助取票机上取票。为避免误车，非节假日建议在发车前1小时取票，并提前30分钟到始发站乘车；法定节假日及法定节假日节前一天，建议在发车前2小时取票，并提前1小时到始发站乘车。
						</p>
					</div>
				</div>
</div>
</template>
<script>
import step from '../query/step.vue'
export default {
    name:'placeorder',
    components:{
        step
    },
    created(){
		 	this.linkperson();
    },
    methods:{
        linkperson(){
            this.axios(
				{
					method:'GET',
					url:'http://station.xuptdata.com/userCenter/getContactPersons',
					params:{
						
					},
					Headers:{
						SessionId: window.sessionStorage.getItem('SessionId'),
					}
				}
			).then(function(res){
                console.log(res)
                console.log(window.sessionStorage.getItem('SessionId'))
			})
        },
        add(){
         style.display = 'block';
        },
        // submit:function(){
            // var formData = new FormData(event.target);
            // this.$http.post('',formData).then(res=>{
            //   console.log(res);
            // },err => {

            // })
        // },
        getname(){
            var bt1 = document.querySelector('.bt1');
            var bt3 = document.querySelector('.bt3');
            if(bt1.value !== ''){
                bt3.value = bt1.value;
            }
    },
    submit(){
        var bt1 = document.querySelector('.bt1');
        var bt2 = document.querySelector('.bt2');
        var bt3 = document.querySelector('.bt3');
        var bt4 = document.querySelector('.bt4');
        var bt5 = document.querySelector('.bt5');
        var flag = 1;
//innerHTML： 设置或获取元素内的所有子节点（包括标签、注释和文本节点）
        if(bt1.value === ''){
              alert('姓名不能为空');
        }else{
            bt3.value = bt1.value;
        }
          if(bt2.value === ''){
              alert('号码不能为空');
        }else{
            var reg = /^1[3456789]\d{9}$/;
            if(!reg.test(bt2.value)){
                alert('请输入正确的手机号');
            }
        }
          if(bt3.value === ''){
              alert('姓名不能为空');
        }
          if(bt4.value === ''){
              alert('身份证不能为空');
        }else{
            var re =  /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            if(!re.test(bt4.value)){
                alert('请输入正确的身份证号码');
            }
        }

        if(bt5.checked){
          this.axios({
                method:'POST',
                url:'http://station.xuptdata.com/order/bookOrder',
                params:{
					},
                Headers:{
               }
            }).then(
                function(res){
                    console.log(res);
                }
            )
        }else{
           alert("请先阅读购票须知，进行勾选");
        }
        // this.$router.push('Menglogin')
    }
    }
}
</script>
<style scoped>
*{
    color: #444;
     margin: 0;
    padding: 0;
    font-family: "Microsoft YaHei",\5fae\8f6f\96c5\9ed1,arial,\5b8b\4f53;
}
tr{
    margin: 1.25rem;
}
.save1{
    margin: 6px 0 0 2.5rem;
}
.border{
        width: 53.75rem;
         padding: 2.5rem;
    border: .025rem solid #CCCCCC;
}
.sidebar{
    color: #444;
    width: 17.25rem;
    /* border: 1px solid #e0e0e0; */
    margin-left: 1.5rem;
    margin-top:1rem;
}
.mar{
    height: 2.5rem;
    line-height: 2.5rem;
    background: #f4f8fb;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: #2c96ea;
}
p{
    font-size: .75rem;
    line-height: 1.5625rem;
    color: #4f71a1;
    margin: 5px 0;
    font-weight:500;

}

.message,.link,.riding{
    font-size: .75rem;
    border-color: #2577e3 #CCCCCC #CCCCCC;
    border-right: 1px solid #CCCCCC;
    border-style: solid;
    border-width: 3px 1px 1px;
    line-height: 20px;
    margin: 16px 0 0;
    padding: 5px 3px 0px -1px;
    width: 53.75rem;
    float: left;
}
.message .chose{
background: #f6f9fe;
}
.link,.riding{
    margin: 1.25rem 0 ;
    width: 53.75rem;
    border: #2577e3  #CCCCCC #2577e3;
}
em,i,span{
    font-size:1.1rem;
    font-style:initial;
    font-weight: bold;
    color: #666 ;
}
.link .bottom,.please{
    font-size: .75rem;
    color: #444;
    line-height: 1.25rem;
    margin: 0;
    padding: 0;
    width: 53.2rem;
    /* border: 1px solid #e1e1e1; */
    background: #f6f9fe;
    margin-bottom: .125rem;
    margin:.25rem .0625rem .25rem;
}
.bottom h3{
    margin: 0;
    font-size: 100%;
    font-weight: bold;
    padding: .0625rem .625rem .0625rem .625rem;
    color: #2577E3;
    float: left;
    height: 2.5rem;
    line-height: 2.5rem;
}
ul{
    display: flex;
    margin: .625rem 0 .625rem;
    padding: .625rem 0 .625rem;
}
ul li{
    float: left;
  flex: 1;
}
span{
    color: red;
}
.riding{
    width: 53.75rem;
}
input{
    outline: none;
}
.riding .newpassenger{
    width: 53.2rem;
    /* border: 1px solid #e1e1e1; */
    background: #f6f9fe;
    margin:.25rem .0625rem .25rem;
}
.please{
    clear: both;
    background: #f6f9fe;
    margin:2rem .0625rem .8rem;
}
.please h3{
    color:#2577e3;
    height: 2.5rem;
    line-height: 2.5rem;
    margin:.25rem .0625rem .25rem;
}
table{
    border-collapse: collapse;
    border-spacing: 0;
}

th{
   
    /* border: solid #cfccbd 1px; */
    background: #ffedd5;
    line-height: 1.5625rem;
    color: #596289;
    font-weight: bold;
    font-size: .875rem;
    width: 10%;
}
.new{
    clear: both;
}
a{
    text-decoration: none;
    color: #2577e3;
}
.submit{
    height: 5rem;
    margin-top: .25rem;
}
.submit input{
    display: inline-block;
    font-family: tahoma;
    outline: 0 none;
    background-color: #FF9913;
    border: 0px solid #FF9913;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 1.125rem;
    font-weight: bold;
    height: 3.125rem;
    line-height: 3.125rem;
    width: 11.25rem;
    text-align: center;
    margin-top: 1.5rem;
    margin-left: 20.25rem;
}
.placeorder{
    display: flex;
}
.left{
    flex: 1;
    width: 100%;
}
.sidebar{
    flex:1;
    border: .0125rem solid #CCCCCC;
    padding: 1.025rem;
}
</style>