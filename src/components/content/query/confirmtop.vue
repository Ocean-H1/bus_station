<template>
    <div class="confirmtop">
            <dl>
                <dt >
                    <div class="left1">
                      <h2>提示信息</h2>
                    </div>
                </dt>
                <dd>
                    <div class="qcontent">
								  <p>
                                1、为了使您能成功购买车票，请在<span style="color: #f00;">29分钟内</span>完成支付。
                            </p>
								
							
								 <p>
                                2、支付成功后请前往联系人邮箱（查收取票验证码邮件）或个人中心查询是否成功购票。 <span style="color: #f00;">特别声明：支付成功并不代表购票成功</span>，请及时查询，如有疑问联系客服(08:00-20:00)。
                            </p>
								<p>
									3、本网站网上退票功能将在<span style="color: #f00;">发车前2小时关闭</span>，关闭后只能到始发站办理退票手续。
								</p>
							</div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <div class="left2">
                      <h2>车票信息</h2>
                    </div>
                </dt>
                <dd>
                    <div class="title">
                 <ul>
                    <li class="c0">始发站</li>
                    <li class="c3">目的地</li>
                    <li class="c1">乘车人</li>
                    <li class="c4"> 发车时间</li>
                    <li class="c1">车票金额 </li>
                    <li class="c2">操作</li>
				</ul>
                    </div>
                    <div class="list">
                <ul>
                    <li class="c0">宜宾市高速公路客运站</li>
                    <li class="c3">自贡</li>
                    <li class="c1">王星星（成人票）</li>
                    <li class="c4">2022-02-18 08:00</li>
                    <li class="c1">28.00</li>
                    <li class="c2">
                        <font class="org">详情</font>
                    </li>
                </ul>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                <div class="left3">
                    <h2>结算信息</h2>
                </div>
                </dt>
                <dd>
                    <div class="money">
                        <i>28.00(元)</i>
                    </div>
                </dd>
            </dl>
        </div>
</template>
<script>
export default {
    name:'confirmtop'
}
</script>
<style scoped>
*{
    font-family: "Microsoft YaHei",\5fae\8f6f\96c5\9ed1,arial,\5b8b\4f53;
    margin: 0;
    padding: 0;
     color: #444;
}
.left1{
    width: 12.25rem;
    height:7.7rem;
    line-height: 7.7rem;
    text-align: center;
}
.left2{
    line-height: 8.4rem;
    text-align: center;
    width: 12.25rem;
    height:8.4rem;
}
.left3{
    line-height: 5.5rem;
    text-align: center;
    width: 12.25rem;
    height:5.5rem;
}
ul{
    display: flex;
}
.title{
    background: #f5f5f5;
}
.title ul li{
     flex: 1;
    font-weight: 900;
    font-size: 1.1rem;
    list-style: none;
    display: block;
    line-height: 2.4375rem;
    text-align: center;
    color: #666;
    width: 10rem;
}
.list{
    margin-top:.9rem ;
    height: 5rem;
}
.list ul li{
    flex: 1;
    font-size: 1rem;
        text-align: center;
            color: #666;

}
dl{
    font-size: .75rem;
    background-color: #F1F1F1;
    border: 1px solid #DDDCDC;
    margin-top: .625rem;
    /* overflow: hidden; */
    padding: 20px 0;
}
dt{
    font-size: .75rem;
    float: left;
    text-align: center;
    /* width: 13.125rem; */
    /* height: .6875rem;
    line-height: 6.6875rem; */
}
h2{
    font-size: 1.5rem;
    font-weight: bold;
    
}
dd{
    margin-left: 13.25rem;
     background: white;
}
.money{
    height: 5.5rem;
    line-height: 5.5rem;
}
p{
    line-height: 1.9rem;
    padding-left: .5625rem;
    text-align: left;
    font-size: .875rem;
    font-weight: 500;
    background: white;

}
i{

    font-size: 1.6rem;
    color: orange;
    margin-left: 1.25rem;
    font-style: normal;
    }
</style>