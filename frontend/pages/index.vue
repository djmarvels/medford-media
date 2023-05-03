<template>
  <div class="main">
    <iframe id="mainVideo" ref="mainVideo" class="main-video" src="https://player.vimeo.com/video/820383465?autoplay=0&loop=1&autopause=0&muted=0&controls=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
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
import { mapMutations } from 'vuex';
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
    padding-top: 76px;
    padding-bottom: 138px;
    padding-left: 51px;
  }
  &-headline {
    @include text('white', 'headline');
    max-width: 755px;
    margin: 0;
  }
  &-subheadline {
    margin: 40px 0 0;
    @include text('white', 'subheadline');
    max-width: 600px;
    font-weight: 350;
  }
  &-action-button {
    margin-top: 63px;
    background-color: $lightblue;
    border-radius: 20px;
    padding: 24px 60px 30px;
    @include text('white', 'headbutton');
  }
}
</style>