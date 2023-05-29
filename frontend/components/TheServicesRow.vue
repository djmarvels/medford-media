<template>
  <div class="services-row">
    <div class="container">
      <div class="row">
        <div class="col col-12 col-md-9 offset-md-1">
          <div class="services-row-header">
            <div class="services-row-title" v-html="title" />
            <p class="services-row-subtitle" v-html="subtitle" />
          </div>
        </div>
      </div>
    </div>
    <div class="services-row-popups">
      <client-only>
        <v-easy-dialog backdropClass="service-video" :width="`${sizeVideo}px`" v-for="item in items" :key="`services-row-popup-${item.id}`" v-model="item.popup">
          <div class="service-video__container">
            <iframe v-if="sizeVideo && item.popup" class="service-video__iframe"
                    :src="`https://www.youtube.com/embed/${item.youtubeId}?controls=0&muted=1&autoplay=1`"
                    allow="autoplay; encrypted-media; fullscreen;"
                    allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen"
                    oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen"
                    frameborder="0" :width="`${sizeVideo * 0.8}px`" :height="`${(sizeVideo * 0.8) / 1.778}px`"
            />

            <button class="service-video__close" @click="item.popup = false">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52 2L2 52" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <path d="M2 2L52 52" stroke="white" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </v-easy-dialog>
      </client-only>
    </div>
    <div class="services-row-carousel">
      <client-only>
        <owl-carousel :nav="false" :dots="false" :autoWidth="true" :margin="20">
          <div class="services-row-carousel-padding" />
          <button v-for="item in items" :key="`services-row-item-${item.id}`" type="button" @click.prevent="openVideo(item)" class="services-row-item">
            <img class="services-row-image" :src="require(`../assets/images/${item.src}`)" :alt="`services-row-item-${item.id}`">
          </button>
        </owl-carousel>
      </client-only>
    </div>
    <div class="container">
      <div class="row">
        <div class="col col-12 col-md-9 offset-md-1">
          <p class="services-row-text" v-html="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheServicesRow',
  props: {
    title: {
      type: String, required: false, default: '',
    },
    subtitle: {
      type: String, required: false, default: '',
    },
    text: {
      type: String, required: false, default: '',
    },
    items: {
      type: Array, required: false, default: []
    },
  },
  computed: {
    sizeVideo() {
      return typeof window !== 'undefined' && window.innerWidth ? Number(window.innerWidth) : null;
    },
  },
  methods: {
    openVideo(item) {
      item.popup = true;
    }
  },
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

.services-row {
  &:not(&:first-child) {
    @media (min-width: 992px) {
      margin-top: 100px;
    }
    @media (max-width: 991px) {
      margin-top: 64px;
    }
  }

  &-header {
  }
  &-title {
    @media (min-width: 992px) {
      @include text('white', 'titleRow');
    }
    @media (max-width: 991px) {
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      color: #FFFFFF;
    }
  }
  &-subtitle {
    font-weight: 350;

    @media (min-width: 992px) {
      margin-top: 5px;
      @include text('white', 'subtitleRow');
    }
    @media (max-width: 991px) {
      margin-top: 4px;
      font-size: 18px;
      line-height: 24px;
      color: #FFFFFF;
    }
  }
  &-text {
    @media (min-width: 992px) {
      margin-top: 40px;
      @include text('white', 'subtitleRow');
      font-weight: 350;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }

  &-carousel {
    margin-top: 28px;

    &-padding {
      @media (min-width: 1200px) {
        padding-left: calc(((100vw - 825px) / 2) - (20px * 3.3));
      }
      @media (max-width: 1199px) and (min-width: 992px) {
        padding-left: calc(((100vw - 690px) / 2) - (20px * 3));
      }
      @media (max-width: 991px) and (min-width: 768px) {
        padding-left: calc(((100vw - 540px) / 2) - 30px);
      }
      @media (max-width: 767px) and (min-width: 576px) {
        padding-left: calc(((100vw - 520px) / 2) - 15px);
      }
    }
  }
  &-item {
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    display: block;
    background: none!important;
    padding: 0!important;
    border: 0!important;
    margin: 0!important;
    -webkit-appearance: none!important;
    outline: none!important;

    @media (min-width: 375px) {
      @include exact-size(320px, 180px);
    }
    @media (max-width: 374px) {
      @include exact-size(280px, 180px);
    }
  }
  &-image {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;

    @media (min-width: 375px) {
      transform: scale(1.01);
      object-fit: cover;
    }
    @media (max-width: 374px) {
      object-fit: contain;
    }
  }
}
</style>