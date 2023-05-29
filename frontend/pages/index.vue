<template>
  <div class="main">
    <div :class="[
        'main-video__overlay',
        { 'main-video__overlay_open_mobile': mobileMenu }
    ]">
      <iframe id="mainVideo" ref="mainVideo" class="main-video" src="https://player.vimeo.com/video/820383465?autoplay=0&loop=1&autopause=0&muted=1&controls=0&playsinline=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
    <div class="container">
      <div class="row">
        <div class="main-info">
          <h1 class="main-headline">
            Создаем продающие видео и&nbsp;подкасты для бизнеса
          </h1>
          <h3 class="main-subheadline">
            Профессиональный видеопродакшн с&nbsp;20-и летним стажем медиционского
            видеомаркетинга
          </h3>
          <button type="button" class="main-action-button" @click="setOrderPopup(true)">Заказать услуги</button>
        </div>
      </div>
    </div>
    <the-ticker />
    <the-showreel ref="TheShowreel" />
    <the-services />
    <the-strategy />
    <the-create ref="TheCreate" />
    <the-slider />
    <the-reviews />
    <the-team />
    <the-footer />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import 'intersection-observer';

import TheShowreel from '../components/TheShowreel.vue';
import TheTicker from '../components/TheTicker.vue';
import TheServices from '../components/TheServices.vue';
import TheStrategy from '../components/TheStrategy.vue';
import TheCreate from '../components/TheCreate.vue';
import TheSlider from '../components/TheSlider.vue';
import TheReviews from '../components/TheReviews.vue';
import TheTeam from '../components/TheTeam.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  name: 'Home',
  data: () => ({
    observer: null,
    player: {},
  }),
  components: {
    TheShowreel,
    TheTicker,
    TheServices,
    TheStrategy,
    TheCreate,
    TheSlider,
    TheReviews,
    TheTeam,
    TheFooter,
  },
  computed: {
    ...mapGetters({
      mobileMenu: 'page/mobileMenu',
    })
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.observer = new IntersectionObserver(this.onElementObserved);

        if (this.observer) {
          this.observer.observe(this.$refs.mainVideo);
          this.observer.observe(this.$refs.TheShowreel.$refs.showReelVideo);
          this.observer.observe(this.$refs.TheCreate.$refs.conceptVideo);
          this.observer.observe(this.$refs.TheCreate.$refs.arVideo);
        }
      }, 500);
    });
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    ...mapMutations({
      setOrderPopup: 'page/SET_ORDER_POPUP',
    }),
    onElementObserved(entries) {
      entries.forEach(async ({ target, isIntersecting }) => {
        if (target && target.id) {
          const playerKey = String(target.id);
          if (!this.player[playerKey]) {
            this.player[playerKey] = new Vimeo.Player(target);
            await this.handleVideo(playerKey, 'ready');
          }
          await this.handleVideo(playerKey, isIntersecting ? 'play' : 'pause');
        }
      });
    },
    async handleVideo(key, type = 'play', count = 0) {
      try {
        if (this.player[key]) {
          switch (type) {
            case 'play': {
              await this.player[key].play();
              break;
            }
            case 'pause': {
              await this.player[key].pause();
              break;
            }
            case 'ready': {
              await this.player[key].ready();
              break;
            }
            default: break;
          }
        }
      } catch (error) {
        if (count < 10) {
          setTimeout(() => this.handleVideo(key, type, count + 1), 1000);
        }
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import '../assets/styles/mixins';

.main {
  &-info {
    width: 100%;
    @media (min-width: 992px) {
      padding-top: 76px;
      padding-bottom: 138px;
      padding-left: 51px;
    }
    @media (max-width: 991px) {
      padding: 141px 0 62px;
    }
  }
  &-headline {
    margin: 0;
    color: #FFFFFF;
    @media (min-width: 992px) {
      @include text('white', 'headline');
      max-width: 755px;
    }
    @media (max-width: 991px) {
      max-width: calc(100% - (40px * 2));
      font-weight: 400;
      font-size: 48px;
      line-height: 56px;
      margin: 0 auto;
    }
    @media (max-width: 575px) {
      max-width: calc(100% - (42px * 2));
      font-size: 35px;
      line-height: 120%;//
    }
    @media (max-width: 374px) {
      font-size: 32px;
    }
  }
  &-subheadline {
    font-weight: 350;
    @media (min-width: 992px) {
      margin: 40px 0 0;
      @include text('white', 'subheadline');
      max-width: 600px;
    }
    @media (max-width: 991px) {
      max-width: calc(100% - (40px * 2));
      margin: 70.42px auto 0;
      font-size: 24px;
      line-height: 30px;
      color: #F5F5F5;
    }
    @media (max-width: 374px) {
      font-size: 20px;
      line-height: 120%;
    }
  }
  &-action-button {
    background-color: $lightblue;
    text-align: center;

    @media (min-width: 992px) {
      margin-top: 63px;
      border-radius: 20px;
      padding: 24px 60px 30px;
      @include text('white', 'headbutton');
    }
    @media (max-width: 991px) {
      border-radius: 18px;
      margin: 82px auto 0;
      max-width: calc(100% - (40px * 2));
      padding: 19px 38px 22px;
      font-weight: 400;
      font-size: 30px;
      line-height: 36px;
      color: #FFFFFF;
      width: 100%;
      display: block;
    }

    @media (max-width: 575px) {
      font-size: 28px;
      white-space: nowrap;
      max-width: max-content;
    }

    @media (max-width: 374px) {
      font-size: 24px;
      padding: 14px 34px 14px;
    }
  }
}
</style>