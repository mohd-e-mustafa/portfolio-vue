import Vue from 'vue'
import router from './router'
import App from './App.vue'

import('./assets/vendor/bootstrap/css/bootstrap.min.css')
import('./assets/img/favicon.png');
import('./assets/img/apple-touch-icon.png');
import('./assets/vendor/bootstrap/css/bootstrap.min.css');
import('./assets/vendor/bootstrap-icons/bootstrap-icons.css');
import('./assets/vendor/boxicons/css/boxicons.min.css');
import('./assets/vendor/glightbox/css/glightbox.min.css');
import('./assets/vendor/swiper/swiper-bundle.min.css');
import('./assets/css/style.css');


import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import('./assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
import('./assets/vendor/glightbox/js/glightbox.min.js');
import('./assets/vendor/isotope-layout/isotope.pkgd.min.js');
import('./assets/vendor/php-email-form/validate.js');
import('./assets/vendor/purecounter/purecounter.js');
import('./assets/vendor/swiper/swiper-bundle.min.js');
import('./assets/vendor/waypoints/noframework.waypoints.js');

import('./assets/js/main.js');


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
