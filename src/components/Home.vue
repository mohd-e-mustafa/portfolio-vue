<template>
  <div id="app">
    <Header v-bind:isProfileDetail="false"/>
    <Hero/>
    <Main/>
    <Footer/>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    Main,
    Footer
  }
}
</script>

<style>

</style>
