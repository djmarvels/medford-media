import Vue from 'vue';
import VueOwlCarousel from 'vue-owl-carousel';
import VEasyDialog from 'v-easy-dialog';
import ru from 'vue2-datepicker/locale/ru';
import DatePicker from 'vue2-datepicker';

DatePicker.locale(ru);

Vue.use(VueOwlCarousel);
Vue.component('owl-carousel', VueOwlCarousel);
Vue.component('v-easy-dialog', VEasyDialog);
Vue.component('v-date-picker', DatePicker);