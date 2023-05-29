<template>
  <v-easy-dialog v-model="viewOrder" fullscreen backdropClass="order" focus-on="#input-name">
    <div class= overflow-y-auto">
      <div class="order__container">
        <transition-group class="order-inner" name="fade" duration="600" tag="div">
          <div v-if="successForm" class="order__success" key="success">
            <h3 class="order__success__title">Ваша заявка принята</h3>
            <p class="order__success__text">Наш менеджер свяжется с&nbsp;вами в&nbsp;ближайшее время</p>
            <button type="button" class="order-form__submit order__success__submit" @click="hidePopUp">Ясно</button>
          </div>
          <template v-else-if="viewOrderForm">
            <h2 class="order-title" key="order-title">Заказ услуг</h2>
            <div class="order-slugs" key="order-slugs">
              <h4 class="order-slugs__title">Проект</h4>
              <ul class="order-slugs__list">
                <li v-for="slug in slugs" :key="slug.id" :class="[
                    'order-slugs__list__item',
                    { 'order-slugs__list__item_active': slug.active }
                ]">
                  <button type="button" v-html="slug.title" @click.stop="submitSlug(slug)" />
                </li>
              </ul>
            </div>
            <div class="order-form" key="order-form">
              <div :class="[
                  'order-form__group',
                  { 'order-form__group_active': (orderForm.companyName.length > 0) }
              ]">
                <input id="input-name" placeholder="Имя" class="input order-form__group__input" name="company" v-model="orderForm.companyName" />
              </div>
              <div :class="[
                  'order-form__group',
                  { 'order-form__group_active': (phoneObject.valid) }
              ]">
                <vue-tel-input class="order-form__tel-input" :inputOptions="{
                  placeholder: 'Номер телефона', id: 'phone-number', showDialCode: true, styleClasses: 'input order-form__group__input'
                }" :defaultCountry="'ru'" v-model="orderForm.phoneNumber" mode="international" @validate="validatePhone" />
              </div>
              <div :class="[
                  'order-form__group',
                  { 'order-form__group_active': (orderForm.email.length > 0) }
              ]">
                <input placeholder="Электропочта" class="input order-form__group__input" name="mail" v-model="orderForm.email" />
              </div>
              <button type="button" :class="[
                  'order-form__submit',
                  { 'order-form__submit_active': validateForm }
              ]" @click="submitForm">Отправить заявку</button>
            </div>
          </template>
        </transition-group>

        <transition-group name="fade" duration="600">
          <button v-if="viewOrder && viewOrderContent" type="button" class="order-close" @click="hidePopUp" key="order-close">
            <img class="order-close__icon" src="../assets/images/order_close.svg" alt="Close" />
          </button>
          <iframe v-if="viewOrder && viewOrderContent" key="popupVideo" id="popupVideo" ref="popupVideo" class="order__video" src="https://player.vimeo.com/video/820383465?autoplay=0&loop=1&autopause=0&muted=1&controls=0&playsinline=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen"  webkitallowfullscreen mozallowfullscreen allowfullscreen />
        </transition-group>
      </div>
    </div>
  </v-easy-dialog>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'TheOrder',
  data: () => ({
    slugs: [
      { id: 1, title: 'Имиджевый видеоролик', active: false },
      { id: 2, title: 'Видеоблог', active: false },
      { id: 3, title: 'Вебинар', active: false },
      { id: 4, title: 'Подкаст', active: false },
    ],
    viewOrder: false,
    viewOrderContent: false,
    player: null,
    successForm: false,
    orderForm: {
      companyName: '',
      phoneNumber: '',
      email: '',
    },
    phoneObject: {
      valid: false,
    },
  }),
  computed: {
    ...mapGetters({
      orderPopup: 'page/orderPopup',
    }),
    validateForm() {
      return Boolean(this.orderForm.companyName.length && (this.phoneObject.valid || this.orderForm.email.length));
    },
    viewOrderForm() {
      return Boolean(this.viewOrder && this.viewOrderContent && !this.successForm);
    },
    activeSlugs() {
      return Array(...this.slugs).filter(item => Boolean(item.active));
    },
  },
  watch: {
    orderPopup: {
      async handler(value) {
        if (value) {
          this.viewOrder = true;
          await this.orderTick(300);
          this.viewOrderContent = true;
          // this.viewOrder = true;
          await this.orderTick(300);
          if (!this.player) await this.initializeVideo();
          await this.playVideo();

        } else {
          this.successForm = false;
          this.viewOrder = false;
          this.viewOrderContent = false;

          if (this.player) {
            this.player.destroy();
            this.player = null;
          }
        }
      }, deep: true, immediate: true,
    }
  },
  mounted() {
  },
  methods: {
    ...mapMutations({
      setOrderPopup: 'page/SET_ORDER_POPUP',
    }),
    orderTick(ms = 100) {
      return new Promise(resolve => this.$nextTick(() => setTimeout(() => resolve(), ms)));
    },
    initializeVideo() {
      return new Promise((resolve) => {
        this.player = new Vimeo.Player(this.$refs.popupVideo);
        this.player.ready().then(() => resolve());
      });
    },
    playVideo() {
      return new Promise((resolve) => {
        this.player.play().then(() => resolve()).catch(e => console.log(e));
      });
    },
    submitSlug(slug) {
      slug.active = Boolean(!slug.active);
    },
    submitForm() {
      this.successForm = true;
    },
    async hidePopUp() {
      this.viewOrderContent = false;
      this.setOrderPopup(false);
    },
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
  },
}
</script>

<style lang="scss">

.fade {
  &-enter {
    opacity: 0;

    &-to {
      opacity: 1;
    }
    &-active {
      transition: all var(--transition-time) 0s var(--transition-timing)!important;
    }
  }
  &-leave {
    opacity: 1;

    &-active {
      transition: all var(--transition-time) 0s var(--transition-timing)!important;
    }
    &-to {
      opacity: 0;
    }
  }
}
</style>