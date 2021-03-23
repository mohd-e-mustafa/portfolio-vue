<template>
  <main id="main">

    <!-- ======= Breadcrumbs Section ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Portfolio Details</h2>
          <ol>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/home#portfolio">Portfolio</router-link>
            </li>
            <li>Portfolio Details</li>
          </ol>
        </div>

      </div>
    </section><!-- Breadcrumbs Section -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-8">
            <div class="portfolio-details-slider swiper-container">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img v-if="portfolioId == 1" v-bind:src="portfolio1" alt="">
                  <img v-else-if="portfolioId == 2" v-bind:src="portfolio2" alt="">
                  <img v-else-if="portfolioId == 3" v-bind:src="portfolio3" alt="">
                </div>

              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Project information</h3>
              <ul v-if="portfolioId == 1">
                <li><strong>Category</strong>: Shopify Theme</li>
                <li><strong>Client</strong>: Debutify Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li ><strong>Project URL</strong>: <a href="https://debutify.com/" target="_blank">www.debutify.com</a></li>
              </ul>

              <ul v-else-if="portfolioId == 2">
                <li><strong>Category</strong>: Web Development</li>
                <li><strong>Client</strong>: WeDoWebContent Company</li>
                <li><strong>Project date</strong>: 05 Sep, 2019</li>
                <li><strong>Project URL</strong>: <a href="https://staging.wedowebcontent.com/login" target="_blank">www.wedowebcontent.com</a></li>
              </ul>

              <ul v-else-if="portfolioId == 3">
                <li><strong>Category</strong>: Web Development</li>
                <li><strong>Client</strong>: N/A</li>
                <li><strong>Project date</strong>: 01 Jan, 2021</li>
                <li><strong>Project URL</strong>: <a href="https://github.com/mohd-e-mustafa/okta" target="_blank">www.okta-social-login.com</a></li>
              </ul>

            </div>
            <div v-if="portfolioId == 1" class="portfolio-description">
              <h2>Debutify Detail</h2>
              <p>
                Debutify is free Shopify theme with best-in class load time, mobile responsiveness and conversion-boosting add-ons.
              </p>
              <b>Technologies:</b> PHP, Laravel, Javascript, Bootstrap, HTML, CSS Shopify, Digital Marketing, Google Analytics.
            </div>
            <div v-else-if="portfolioId == 2" class="portfolio-description">
              <h2>WDWC Detail</h2>
              <p>
                We Do Web Content is a content marketing firm that specializes in providing customized and affordable web content writing and marketing solutions for law firms, small businesses and professionals.
              </p>
              <b>Technologies:</b> Symfony, Javascript, Bootstrap, RabbitMQ, Queue Worker, Supervisor, HTML, CSS
            </div>
            <div v-else-if="portfolioId == 3" class="portfolio-description">
              <h2>Okta Social Login Detail</h2>
              <p>
                This project shows you how to use PHP to login to your application with an Okta Hosted Social Login page. User can register or login with social accounts like Facebook, Google or LinkedIn.
              </p>
              <b>Technologies:</b> PHP, Twig, HTML, CSS, Okta, Facebook API, Google API, LinkedIn API.
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Portfolio Details Section -->

  </main><!-- End #main -->
</template>

<script>

import portfolio1 from '@/assets/img/portfolio/debutify-share.jpg';
import portfolio2 from '@/assets/img/portfolio/wdwc.png';
import portfolio3 from '@/assets/img/portfolio/okta.png';

export default {
  name: 'MainPortfolioDetail',
  components: {
  },
  props: ['portfolioId'],
  data: () => {
    return {
      portfolio1,
      portfolio2,
      portfolio3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #ffb727 !important;
  text-decoration: none !important;
}
</style>
