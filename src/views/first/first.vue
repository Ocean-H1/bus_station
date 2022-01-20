<template>
  <div class="first">
    <div class="first-container">
      <HomeInquire></HomeInquire>
      <Swiper></Swiper>
      <HomeNotice></HomeNotice>
    </div>
    <div class="process">
      <HomeProcess></HomeProcess>
    </div>
    
  </div>
</template>

<script>
import HomeProcess from '../../components/content/Home-process/home-process'
import HomeNotice from '../../components/content/Home-Notice/home-notice'
import HomeInquire from '../../components/content/Home-Inquire/home-inquire'
import Swiper from '@/components/content/Home-Swiper/home-swiper.vue'

export default {
  name: 'first',
  data() {
    return {}
  },
  components: {
    HomeProcess,
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
  margin: 3vh 0 3vh 0;
}
.process {
  margin: 5vh 0 2vh 0;
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
