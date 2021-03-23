<template>
  <!-- ======= My Portfolio Section ======= -->
  <section id="portfolio" class="portfolio">
    <div class="container">

      <div class="section-title">
        <span>My Portfolio</span>
        <h2>My Portfolio</h2>
        <p>Below are some of the sample portfolio projects.</p>
      </div>

      <ul id="portfolio-flters" class="d-flex justify-content-center">
        <li data-filter="*" class="filter-active">All</li>
<!--        <li data-filter=".filter-app">App</li>-->
<!--        <li data-filter=".filter-card">Card</li>-->
<!--        <li data-filter=".filter-web">Web</li>-->
      </ul>

      <div class="row portfolio-container">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-img"><img v-bind:src="firstPortfolioUrl" class="img-fluid" alt=""></div>
          <div class="portfolio-info">
            <h4>Debutify</h4>
            <p>Shopify Theme</p>
<!--            <a :href="firstPortfolioUrl" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>-->
            <router-link to="/portfolioDetail/1"><i class="bx bx-link"></i></router-link>
<!--            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>-->
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-web">
          <div class="portfolio-img"><img v-bind:src="secondPortfolioUrl" class="img-fluid" alt=""></div>
          <div class="portfolio-info">
            <h4>WDWC</h4>
            <p>Web</p>
            <router-link to="/portfolioDetail/2"><i class="bx bx-link"></i></router-link>
<!--            <a :href="secondPortfolioUrl" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>-->
<!--            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>-->
          </div>
        </div>

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <div class="portfolio-img"><img v-bind:src="thirdPortfolioUrl" class="img-fluid" alt=""></div>
          <div class="portfolio-info">
            <h4>Okta Hosted Login</h4>
            <p>Web</p>
            <router-link to="/portfolioDetail/3"><i class="bx bx-link"></i></router-link>
<!--            <a v-bind:href="thirdPortfolioUrl" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>-->
<!--            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>-->
          </div>
        </div>

<!--        <div class="col-lg-4 col-md-6 portfolio-item filter-card">-->
<!--          <div class="portfolio-img"><img v-bind:src="fourthPortfolioUrl" class="img-fluid" alt=""></div>-->
<!--          <div class="portfolio-info">-->
<!--            <h4>Card 2</h4>-->
<!--            <p>Card</p>-->
<!--            <a v-bind:href="fourthPortfolioUrl" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>-->
<!--            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-lg-4 col-md-6 portfolio-item filter-web">-->
<!--          <div class="portfolio-img"><img v-bind:src="fifthPortfolioUrl" class="img-fluid" alt=""></div>-->
<!--          <div class="portfolio-info">-->
<!--            <h4>Web 2</h4>-->
<!--            <p>Web</p>-->
<!--            <a v-bind:href="fifthPortfolioUrl" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>-->
<!--            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-lg-4 col-md-6 portfolio-item filter-app">-->
<!--          <div class="portfolio-img"><img v-bind:src="sixthPortfolioUrl" class="img-fluid" alt=""></div>-->
<!--          <div class="portfolio-info">-->
<!--            <h4>App 3</h4>-->
<!--            <p>App</p>-->
<!--            <a v-bind:href="sixthPortfolioUrl" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>-->
<!--            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-lg-4 col-md-6 portfolio-item filter-card">-->
<!--          <div class="portfolio-img"><img v-bind:src="seventhPortfolioUrl" class="img-fluid" alt=""></div>-->
<!--          <div class="portfolio-info">-->
<!--            <h4>Card 1</h4>-->
<!--            <p>Card</p>-->
<!--            <a v-bind:href="seventhPortfolioUrl" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>-->
<!--            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-lg-4 col-md-6 portfolio-item filter-card">-->
<!--          <div class="portfolio-img"><img v-bind:src="eighthPortfolioUrl" class="img-fluid" alt=""></div>-->
<!--          <div class="portfolio-info">-->
<!--            <h4>Card 3</h4>-->
<!--            <p>Card</p>-->
<!--            <a v-bind:href="eighthPortfolioUrl" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>-->
<!--            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="col-lg-4 col-md-6 portfolio-item filter-web">-->
<!--          <div class="portfolio-img"><img v-bind:src="ninthPortfolioUrl" class="img-fluid" alt=""></div>-->
<!--          <div class="portfolio-info">-->
<!--            <h4>Web 3</h4>-->
<!--            <p>Web</p>-->
<!--            <a v-bind:href="ninthPortfolioUrl" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>-->
<!--            <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>-->
<!--          </div>-->
<!--        </div>-->

      </div>

    </div>
  </section><!-- End My Portfolio Section -->

</template>

<script>
import portfolioOne from '@/assets/img/portfolio/debutify-share.jpg';
import portfolioTwo from '@/assets/img/portfolio/wdwc.png';
import portfolioThree from '@/assets/img/portfolio/okta.png';
import portfolioFour from '@/assets/img/portfolio/portfolio-4.jpg';
import portfolioFive from '@/assets/img/portfolio/portfolio-5.jpg';
import portfolioSix from '@/assets/img/portfolio/portfolio-6.jpg';
import portfolioSeven from '@/assets/img/portfolio/portfolio-7.jpg';
import portfolioEight from '@/assets/img/portfolio/portfolio-8.jpg';
import portfolioNine from '@/assets/img/portfolio/portfolio-9.jpg';
export default {
  name: 'Portfolio',
  data: () => {
    return {
      firstPortfolioUrl: portfolioOne,
      secondPortfolioUrl: portfolioTwo,
      thirdPortfolioUrl: portfolioThree,
      fourthPortfolioUrl: portfolioFour,
      fifthPortfolioUrl: portfolioFive,
      sixthPortfolioUrl: portfolioSix,
      seventhPortfolioUrl: portfolioSeven,
      eighthPortfolioUrl: portfolioEight,
      ninthPortfolioUrl: portfolioNine,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.portfolio .portfolio-item .portfolio-info {
  position: inherit !important;
}
.portfolio .portfolio-item .portfolio-info .preview-link, .portfolio .portfolio-item .portfolio-info .details-link {
  position: inherit !important;
}
</style>
