<template>
  <v-easy-dialog v-model="viewCallBack" :persistent="true" width="320px" backdropClass="callback" focus-on="#phone-number">
    <div class="callback-inner">
      <h3 class="callback-title">Созвон</h3>
      <button type="button" class="callback-close" @click="setCallbackPopup(false)">
        <img class="callback-close__icon" src="../assets/images/order_close.svg" alt="Close" />
      </button>

      <div class="callback-date">
        <v-date-picker class="callback-date__picker" v-if="dateCallBack" :value="dateCallBack" v-model="dateCallBack"
                       :clearable="false" :editable="false"
                       @open="openDate = true" @close="openDate = false"
        >
          <template slot="input">
            <div class="callback-date__input">
              <input type="text"  class="callback-date__input__element" :value="dateToFromNowDaily(dateCallBack)">
              <svg :class="[
                  'callback-date__input__arrow',
                  { 'callback-date__input__arrow_open': openDate }
              ]" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L12 12L22 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </template>
          <div style="display: none;" slot="icon-calendar" />
        </v-date-picker>
        <v-date-picker class="callback-date__picker" v-if="timeCallBack" :value="timeCallBack" v-model="timeCallBack" type="time"
                       :clearable="false" :editable="false"
                       :time-picker-options="{
                         start: `${currentHour}:${currentMinutes}`, step:'00:30' , end: '23:30', format: 'HH:mm'
                       }" @open="openTime = true" @close="openTime = false"
        >
          <template slot="input">
            <div class="callback-date__input">
              <input type="text"  class="callback-date__input__element" :value="formatTime(timeCallBack)">
              <svg :class="[
                  'callback-date__input__arrow',
                  { 'callback-date__input__arrow_open': openTime }
              ]" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L12 12L22 2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="callback-date__input__small">по московскому времени</div>
          </template>
          <div style="display: none;" slot="icon-calendar" />
        </v-date-picker>
      </div>

      <div class="callback__number">
        <vue-tel-input :inputOptions="{
          placeholder: 'Номер телефона', id: 'phone-number'
        }" :defaultCountry="'ru'" v-model="phoneNumber" mode="international" @validate="validatePhone" />
      </div>

      <button :class="[
          'callback__submit',
          { 'callback__submit_active': phoneObject.valid }
      ]" type="button">
        Жду звонка
      </button>

    </div>
  </v-easy-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import moment from 'moment';
import ru from 'moment/dist/locale/ru';

export default {
  name: 'TheCallBack',
  data: () => ({
    viewCallBack: false,
    dateCallBack: null,
    openDate: false,
    openTime: false,
    timeCallBack: null,
    currentHour: null,
    currentMinutes: null,
    phoneNumber: null,
    phoneObject: {
      valid: false,
    },
  }),
  watch: {
    callbackPopup: {
      handler(value) {
        if (value) {
          this.viewCallBack = true;
          this.$nextTick(() => this.initCallBack());
        } else {
          this.viewCallBack = false;
        }
      }, deep: true, immediate: true,
    }
  },
  computed: {
    ...mapGetters({
      callbackPopup: 'page/callbackPopup',
    }),
  },
  created() {
    moment.locale('ru', {
      relativeTime : {
        future: 'Через %s',
        past: '%s',
        s: 'Сейчас',
        m: 'минуту',
        mm: '%d минут',
        h: 'час',
        hh: '%d часа',
        d: 'день',
        dd: '%d дней',
      },
    });
  },
  methods: {
    ...mapMutations({
      setCallbackPopup: 'page/SET_CALLBACK_POPUP',
    }),
    validatePhone(phoneObject) {
      if (phoneObject.valid) {
        this.phoneObject = {
          valid: true,
          countryCode: phoneObject.countryCode,
          countryName: phoneObject.country.name,
          number: phoneObject.number,
        };
      } else {
        this.phoneObject.valid = false;
      }
    },
    initCallBack() {
      this.dateCallBack = new Date();
      this.timeCallBack = new Date();

      this.currentMinutes = 0;
      this.currentHour = Number(this.timeCallBack.getMinutes()) >= 1 ? Number(this.timeCallBack.getHours()) + 1 : Number(this.timeCallBack.getHours());
    },
    formatTime(myDate) {
      return moment(myDate).fromNow();
    },
    dateToFromNowDaily(myDate) {
      const fromNow = moment(myDate).fromNow();
      return moment(myDate).calendar(null,{
        lastWeek: 'DD MMM YYYY',
        lastDay:  '[Вчера]',
        sameDay:  '[Сегодня]',
        nextDay:  '[Завтра]',
        nextWeek: 'DD MMM YYYY',
        sameElse: () => ("[" + fromNow + "]")
      });
    },

  },
}
</script>

<style scoped>

</style>