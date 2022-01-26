<template>
  <div class="home-footer">
    <div class="BigBox">
      <img src="../../../../src/assets/img/buy.svg" alt="如何购买" />
      <div class="info">
        <div class="infotitle">如何购票</div>
        <div>如何注册</div>
        <div>如何购票</div>
      </div>
    </div>
    <div class="BigBox">
      <img src="../../../../src/assets/img/pay.svg" alt="如何支付" />
      <div class="info">
        <div class="infotitle">如何支付</div>
        <div>如何支付</div>
      </div>
    </div>
    <div class="BigBox">
      <img src="../../../../src/assets/img/refund.svg" alt="如何退票" />
      <div class="info">
        <div class="infotitle">如何退票</div>
        <div>网上退票</div>
        <div>综合窗口退票</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-footer',
}
</script>
<style scoped>
.home-footer {
  width: 100%;
  height: 40vh;
  border: 4px dotted #e3eff6;
  display: flex;
  justify-content: space-around;
}
.BigBox {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.BigBox img {
  height: 5rem;
}
.BigBox .info {
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 2px;
}
.info div:hover {
  text-decoration: underline;
  cursor: pointer;
}
.infotitle {
  font-size: 2rem;
}
.infotitle:hover {
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
}
</style>
