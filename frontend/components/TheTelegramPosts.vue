<template>
  <div class="tg__posts">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <h3 id="behind" class="tg__posts__title">
            За кадром
          </h3>
        </div>
        <div v-if="gridView" class="col col-12 tg__posts__content">
          <the-masonry-grid :items.sync="posts" :column-width="columnWidth" :gap="12" class="tg__posts__content__grid">
            <template #default="{ item }">
              <a class="tg__posts__item" :href="item.link" target="_blank">
                <p v-if="item.content" :class="[
                    'tg__posts__item__content clamp',
                    { 'tg__posts__item__content_video': item.media.video },
                    { 'tg__posts__item__content_image': item.media.image }
                ]" v-html="item.content" />
                <span class="tg__posts__item__date" v-if="item.date" v-html="item.date" />
              </a>
            </template>
          </the-masonry-grid>
        </div>
        <div v-if="postLoading" class="col col-12">
          <div class="tg__posts__loader">
            <div class="tg__posts__loader__spinner" />
          </div>
        </div>
        <div v-else-if="navigationPage < maxPages" class="col col-12 tg__posts__action">
          <button type="button" class="tg__posts__action__button" @click="nextPosts">Загрузить ещё</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import TheMasonryGrid from '../components/TheMasonryGrid.vue';

export default {
  name: 'TheTelegramPosts',
  data: () => ({
    gridView: false,
  }),
  components: {
    TheMasonryGrid
  },
  computed: {
    ...mapGetters({
      maxPages: 'channel/maxPages',
      navigationPage: 'channel/navigationPage',
      postLoading: 'channel/postLoading',
      posts: 'channel/posts'
    }),
    columnWidth() {
      return typeof window !== 'undefined' && Number.isInteger(window.innerWidth) ? Number(((1140 - (12 * 3)) / 3) - (12 * 2)) : 200;
    },
  },
  mounted() {
    this.clearPosts();
    this.fetchPosts();
  },
  methods: {
    ...mapMutations({
      setPostLoading: 'channel/SET_POST_LOADING',
      setNavPage: 'channel/SET_NAV_PAGE',
      clearPosts: 'channel/CLEAR_POSTS',
    }),
    ...mapActions({
      getPosts: 'channel/GET_POSTS',
    }),
    async nextPosts() {
      this.setPostLoading(true);

      setTimeout(async () => {
        if (this.navigationPage < this.maxPages) {
          this.setNavPage(Number(this.navigationPage + 1));
        }
        await this.fetchPosts();
      }, 1000);
    },
    async fetchPosts() {
      if (this.navigationPage === 1) {
        this.gridView = false;
      }

      await this.getPosts({
        page: Number(this.navigationPage),
      });

      if (this.navigationPage === 1) {
        // hack grid
        await this.setGridView(true);
        await this.setGridView(false);
        await this.setGridView(true);
      }
      this.$nextTick(() => this.setPostLoading(false));

      console.log(this.posts.length);
    },

    setGridView(value) {
      return new Promise(resolve => this.$nextTick(() => {
        this.gridView = Boolean(value);
        setTimeout(() => resolve(), 200);
      }));
    },
  },
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

@keyframes rotation {
  from {
    opacity: 1;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(359deg);
  }
}

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

      br:first-child, br:last-child {
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

  &__action {
    margin-top: 40px;

    &__button {
      background-color: $lightblue;
      margin-left: auto;
      display: block;
      color: #FFFFFF;
      text-align: center;

      @media (min-width: 992px) {
        border-radius: 20px;
        font-size: 32px;
        line-height: 38px;
        padding: 18px 32px;
      }

      @media (max-width: 991px) {
        padding: 19px 38px 22px;
        border-radius: 18px;
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;
      }

      @media (max-width: 575px) {
        white-space: nowrap;
        max-width: max-content;
        font-size: 28px;
        margin-left: auto;
        margin-right: auto;
      }

      @media (max-width: 374px) {
        font-size: 24px;
        padding: 14px 34px 14px;
      }
    }
  }

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;

    &__spinner {
      @include exact-size(64px, 64px);
      border: 6px solid rgba(20, 193, 222, 0.3);
      border-top-color: rgba(20, 193, 222, 1.0);
      border-radius: 50%;
      animation: rotation 0.6s infinite linear 0.25s;
      opacity: 0;
    }
  }
}
</style>