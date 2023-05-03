<template>
  <div class="container">
    <div class="row">
      <div class="header">
        <nuxt-link to="/" class="header__brand">
          <img src="../assets/images/logo.svg" alt="Logo" class="header__brand__logo">
        </nuxt-link>
        <ul class="header__menu">
          <li class="header__menu__item" v-for="(route, routeKey) in navigationRoutes" :key="`nav-route-${routeKey}`">
            <nuxt-link :to="route.to"
                       v-html="route.label"
                       class="header__menu__link"
            />
          </li>
        </ul>
        <div class="header__action">
          <a href="tel:74951390993" class="header__action__number">+7 495 139-09-93</a>
          <div class="header__action__link" @click="setCallbackPopup(true)">Обратный звонок</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    navigationRoutes: [
      { to: '/', label: 'Услуги и цены' },
      { to: '/', label: 'Обзор' },
      { to: '/', label: 'Контакты' }
    ],
  }),
  methods: {
    ...mapMutations({
      setCallbackPopup: 'page/SET_CALLBACK_POPUP',
    })
  },
}
</script>

<style scoped lang="scss">
@import '../assets/styles/mixins';

.header {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 39px;

  &__brand {
    display: block;
    margin-right: 62px;

    &__logo {
      @include exact-size(231px, 62.63px);
    }
  }

  &__menu {
    list-style-type: none;
    margin-bottom: 0;
    padding: 6px 0 0;

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    &__item {
      &:not(&:last-child) {
        margin-right: 30px;
      }
    }

    &__link {
      @include text('white', 'menu');
      display: block;
      max-width: max-content;
    }
  }

  &__action {
    padding-top: 8px;
    margin-left: auto;

    &__number {
      display: block;
      @include text('white', 'menu');
    }
    &__link {
      cursor: pointer;
      @include text('lightblue', 'menu');
    }
  }
}
</style>