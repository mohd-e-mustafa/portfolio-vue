<template>
  <div id="app">
    <Header v-bind:isProfileDetail="true"/>
    <MainPortfolioDetail v-bind:portfolioId="portfolioId" />
    <Footer/>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import MainPortfolioDetail from "@/components/MainPortfolioDetail";
import Footer from "@/components/Footer";

export default {
  name: 'PortfolioDetail',
  components: {
    Header,
    MainPortfolioDetail,
    Footer
  },
  // data: () => {
  //   return {
  //     portfolio1:portfolio1,
  //     portfolio2:portfolio2,
  //     portfolio3:portfolio3,
  //     portfolioId: this.$route.params.id
  //   }
  // },
  data() {
    return {
      portfolioId: this.$route.params.id,
    }
  },
}
</script>

<style>
#header {
  z-index: 997;
  transition: all 0.5s;
  height: 80px;
  background: rgba(25, 28, 31, 0.8) !important;
}
</style>
