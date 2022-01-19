<template>
  <div class="first">
    <div class="first-container">
      <HomeInquire></HomeInquire>
      <Swiper></Swiper>
      <HomeNotice></HomeNotice>
    </div>
    
  </div>
</template>

<script>
import HomeNotice from '../../components/content/Home-Notice/home-notice'
import HomeInquire from '../../components/content/Home-Inquire/home-inquire'
import Swiper from '@/components/content/Home-Swiper/home-swiper.vue'

export default {
  name: 'first',
  data() {
    return {}
  },
  components: {
    HomeNotice,
    HomeInquire,
    Swiper,
  },
}
</script>

<style scoped>

.first-container {
  display: flex;
  justify-content: space-between;
  max-height: 300px;
  margin-top: 1vh;
}
.HomeNotice {
  width: 25vw;
}
.HomeSwiper {
  width: 35vw;
}
.HomeInquire {
  width: 25vw;
}

</style>
