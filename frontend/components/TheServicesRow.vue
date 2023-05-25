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
    <div class="services-row-carousel">
      <client-only>
        <owl-carousel :nav="false" :dots="false" :autoWidth="true" :margin="20">
          <div class="services-row-carousel-padding" />
          <a v-for="item in items" :key="`services-row-item-${item.id}`" :href="item.href" target="_blank" class="services-row-item">
            <img class="services-row-image" :src="require(`../assets/images/${item.src}`)" :alt="`services-row-item-${item.id}`">
          </a>
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
  }
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
    }
  }
  &-item {
    @include exact-size(320px, 180px);
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    display: block;
  }
  &-image {
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    transform: scale(1.01);
    object-fit: cover;
  }
}
</style>