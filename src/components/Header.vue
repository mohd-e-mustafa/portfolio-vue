<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top d-flex justify-content-center align-items-center header-transparent">

    <nav id="navbar" class="navbar">
      <ul>
        <li>
          <router-link to="/" v-if="isProfileDetail === true">Home</router-link>
          <a v-else class="nav-link scrollto active" href="#hero">Home</a>
        </li>
        <li>
          <router-link to="/" v-if="isProfileDetail === true">About</router-link>
          <a v-else class="nav-link scrollto" href="#about">About</a>
        </li>
        <li>
          <router-link to="/" v-if="isProfileDetail === true">Resume</router-link>
          <a v-else class="nav-link scrollto" href="#resume">Resume</a>
        </li>
        <li>
          <router-link to="/" v-if="isProfileDetail === true">Services</router-link>
          <a v-else class="nav-link scrollto" href="#services">Services</a>
        </li>
        <li>
          <router-link to="/" v-if="isProfileDetail === true">Portfolio</router-link>
          <a v-else class="nav-link scrollto " href="#portfolio">Portfolio</a>
        </li>
        <li>
          <router-link to="/" v-if="isProfileDetail === true">Contact</router-link>
          <a v-else class="nav-link scrollto" href="#contact">Contact</a>
        </li>
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav><!-- .navbar -->

  </header><!-- End Header -->
</template>

<script>
export default {
  name: 'Header',
  props: ['isProfileDetail']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header.header-scrolled {
  height: 60px;
  background: rgba(25, 28, 31, 0.8) !important;
}
</style>
