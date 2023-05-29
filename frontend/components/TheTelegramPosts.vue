<template>
  <div class="tg__posts">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <h3 id="behind" class="tg__posts__title">
            За кадром
          </h3>
        </div>
        <div class="col col-12 tg__posts__content">
          <the-masonry-grid :items.sync="posts" :column-width="columnWidth" :gap="12" class="brain-slogans__group">
            <template #default="{ item }">
              <a class="tg__posts__item" :href="item.link" target="_blank">
                <span v-if="item.content" :class="[
                    'tg__posts__item__content',
                    { 'tg__posts__item__content_video': item.media.video },
                    { 'tg__posts__item__content_image': item.media.image }
                ]" v-html="item.content" />
                <span class="tg__posts__item__date" v-if="item.date" v-html="item.date" />
              </a>
            </template>
          </the-masonry-grid>
        </div>
      </div>
    </div>
<!--    <div class="container-fluid">-->
<!--      <div class="row tg__posts__content">-->
<!--        <div v-for="(post, index) in posts" :key="`tg-post-${index}`" class="col col-12 col-md-3">-->
<!--          -->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TheMasonryGrid from '../components/TheMasonryGrid.vue';

export default {
  name: 'TheTelegramPosts',
  components: {
    TheMasonryGrid
  },
  computed: {
    ...mapGetters({
      postLoading: 'channel/postLoading',
      posts: 'channel/posts'
    }),
    columnWidth() {
      return typeof window !== 'undefined' && Number.isInteger(window.innerWidth) ? Number(window.innerWidth >= 1920 ? 300 : ((window.innerWidth - 40) / 3) - (12 * 2)) : 300;
    },
  },
  mounted() {
    console.log(this.columnWidth);
    this.initPosts();
  },
  methods: {
    ...mapActions({
      getPosts: 'channel/GET_POSTS',
    }),
    async initPosts() {
      await this.getPosts();
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

.tg__posts {
  @media (min-width: 992px) {
    margin-top: 375px;
  }
  @media (max-width: 991px) {
    margin-top: 162px;
  }

  &__title {
    @media (min-width: 992px) {
      @include text('white', 'headbutton');
    }
    @media (max-width: 991px) {
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      color: #FFFFFF;
    }
  }

  &__content {
    margin-top: 80px;
  }

  &__item {
    background-color: #FFFFFF;
    border-radius: 16px;
    padding: 24px 20px;
    display: block;
    width: 100%;
    transition: all 0.3s 0s cubic-bezier(0.65, 0, 0.35, 1);

    &__date {
      display: block;
      margin-top: 20px;
      color: rgba(0,0,0,0.5);
      text-align: right;
      width: 100%;
    }

    &__content {
      color: #000000;
      font-weight: 500;
      font-size: 16px;
      line-height: 100%;
      transition: all 0.3s 0s cubic-bezier(0.65, 0, 0.35, 1);

      &_video, &_image {
        a {
          display: block;
          img {
            width: 100%;
            border-radius: 11px;
          }
        }
      }

      &_image {
        img {
          width: 100%;
          border-radius: 11px;
          object-fit: cover;
        }
      }

      br:first-child {
        display: none;
      }
    }

    &:hover {
      .tg__posts__item__content {
        color: #14C1DE;
      }
      transform: scale(1.035);
    }
  }
}
</style>