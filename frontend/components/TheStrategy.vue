<template>
  <div class="strategy">
    <div class="container">
      <div class="row">
        <h3 class="strategy-title">
          Стратегия популярности на&nbsp;Ютубе
        </h3>
        <div class="strategy-items">
          <div class="strategy-item strategy-item--important">
            <div class="strategy-item-action">
              Важно
              <img src="../assets/images/strategy-arrow-right.svg" class="strategy-item-action-arrow strategy-item-action-arrow--right" />
            </div>
            <div class="strategy-item-title">Заявляйте о&nbsp;вашем бренде</div>
            <p class="strategy-item-text">Вирусные и&nbsp;хитовые<br>видеоролики<br>связанные с&nbsp;запуском продукта или крупным анонсом нужно<br>выпускать хотябы раз в&nbsp;пол года</p>
          </div>
          <div class="strategy-item strategy-item--constantly">
            <div class="strategy-item-action">Постоянно</div>
            <div class="strategy-item-title">Вовлекайте в&nbsp;сообщество</div>
            <p class="strategy-item-text">Регулярно публикуйте основной контент<br>в&nbsp;легковоспроизводимом формате. Именно этим занимаются все известные<br>видеоблогеры</p>
          </div>
          <div class="strategy-item strategy-item--useful">
            <div class="strategy-item-action">
              Полезно
              <img src="../assets/images/strategy-arrow-left.svg" class="strategy-item-action-arrow strategy-item-action-arrow--left" />
            </div>
            <div class="strategy-item-title">Помогайте найти</div>
            <p class="strategy-item-text">Создавайте трендовый<br>контент в&nbsp;рамках<br>экспертности вашего<br>бренда, на&nbsp;темы<br>которыми интересуются потребители в&nbsp;поисковых запросах</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheStrategy'
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

.strategy {
  padding: 121px 0 49px;
  margin-top: 200px;
  background-image: url('../assets/images/strategy-background.png');
  background-repeat: no-repeat;
  background-position: 100% 50%;
  @media (min-width: 1700px) {
    background-size: contain;
  }
  @media (max-width: 1649px) {
    background-size: 100%;
  }


  &-title {
    @include text('white', 'headbutton');
    margin-bottom: 0;
  }
  &-items {
    margin-top: 153px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }
  &-item {
    width: 100%;
    &-action {
      @include text('white', 'titleRow');
      position: relative;
      max-width: max-content;

      &-arrow {
        position: absolute;
        top: calc(50% - (31px / 2.2));

        &--right {
          left: calc(100% + 39px);
          right: auto;
        }
        &--left {
          right: calc(100% + 39px);
          left: auto;
        }
      }
    }
    &-title {
      margin: 30px 0 0;
      min-height: 60px;
      @include text('white', 'subtitleRow');
    }
    &-text {
      margin: 40px 0 0;
      @include text('white', 'subtitleRow');
      letter-spacing: 0.02em;
      word-break: break-all;
      word-wrap: normal;
      font-weight: 350;
    }
    &--important {
      @include exact-col(300px);
    }
    &--constantly {
      @include exact-col(295px);
      margin-left: 70px;
    }
    &--useful {
      @include exact-col(335px);
      margin-left: auto;
    }
  }
}
</style>