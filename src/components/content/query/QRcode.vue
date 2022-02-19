<template>
<div class="QRcode">
        <a href="http://localhost:8080/first"><h2>西安客运票务网</h2></a>
    <div class="row"></div>
   <div id="divPay">
     <div class="payinfowx">
    <p>支付金额
        <span class="price">
        28.00
        </span>
    <label id="tipMsg">请扫描下方二维码完成支付</label>
    </p>
    <div class="qrCode">
        <canvas  ></canvas>
    </div>
       </div>     
   </div>
</div>
   
</template>
<script>
export default {
    name:'QRcode'
  
}
</script>
<style scoped>
.qrCode{
    background: lightcyan;
    width: 19rem;
    height: 19rem;
    position: relative;
    left: 50%;
    top: 50%;
    margin-top: -4.5rem;
    margin-left: -9.5rem;

}
.price{
    color: orange;
}
.row{
    width: 100%;
    height: .15rem;
    background:lightskyblue;

}
a{
    text-decoration: none;
}
p{
    color: #333;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 3.125rem;
    font-size: 1.5rem;
    font-weight: 500;
}
h2{
    font-size:1.5rem;
    color: red;
    display: block;
    width: 100%;
    height: 3.125rem;
    line-height: 3.125rem;
    text-indent: 1.25rem;
        font-weight: 500;
}   

</style>