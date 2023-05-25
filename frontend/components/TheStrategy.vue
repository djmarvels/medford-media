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
              <img src="../assets/images/strategy_arrow_down_mobile.svg" class="strategy-item-action-arrow strategy-item-action-arrow--mobile strategy-item-action-arrow--mobile-up">
              <img src="../assets/images/strategy-arrow-right.svg" class="strategy-item-action-arrow strategy-item-action-arrow--right" />
            </div>
            <div class="strategy-item-title">Заявляйте о&nbsp;вашем бренде</div>
            <p class="strategy-item-text">Вирусные и&nbsp;хитовые<br>видеоролики<br>связанные с&nbsp;запуском продукта или крупным анонсом нужно<br>выпускать хотябы раз в&nbsp;пол года</p>
          </div>
          <div class="strategy-item strategy-item--constantly">
            <div class="strategy-item-action">
              Постоянно
              <img src="../assets/images/strategy_arrow_down_mobile.svg" class="strategy-item-action-arrow strategy-item-action-arrow--mobile strategy-item-action-arrow--mobile-down">
            </div>
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
  background-repeat: no-repeat;

  @media (min-width: 1700px) {
    background-size: contain;
  }
  @media (max-width: 1649px) and (min-width: 1200px) {
    background-size: 100%;
  }
  @media (min-width: 1200px) {
    background-image: url('../assets/images/strategy-background.png');
    background-position: 100% 50%;
    margin-top: 200px;
    padding: 121px 0 49px;
  }
  @media (max-width: 1199px) {
    background-image: url('../assets/images/strategy-background-mobile.png');
    background-size: 100% 100%;
    background-position: 50% calc(47px + 144px);
    padding: 0 0 49px;
    margin-top: 177px;
  }


  &-title {
    margin-bottom: 0;
    @media (min-width: 992px) {
      @include text('white', 'headbutton');
    }
    @media (max-width: 991px) {
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      color: #FFFFFF;
    }
    @media (max-width: 575px) {
      max-width: calc(100% - (35px * 2));
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 374px) {
      font-size: 32px;
      line-height: 120%;
    }
  }
  &-items {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    @media (min-width: 1200px) {
      margin-top: 153px;
      flex-direction: row;
    }
    @media (max-width: 1199px) {
      margin-top: 71px;
      flex-direction: column;
    }
    @media (max-width: 575px) {
      max-width: calc(100% - (35px * 2));
      margin-left: auto;
      margin-right: auto;
    }
  }
  &-item {
    width: 100%;
    &-action {
      @include text('white', 'titleRow');
      position: relative;
      max-width: max-content;

      @media (max-width: 1199px) {
        font-size: 36px;
        line-height: 120%;
        font-weight: 400;
        margin-bottom: 14px;
      }

      &-arrow {
        position: absolute;

        @media (min-width: 1200px) {
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
        &:not(&--mobile) {
          @media (max-width: 1199px) {
            display: none;
          }
        }
        &--mobile {
          @media (min-width: 1200px) {
            display: none;
          }
          @media (max-width: 1199px) {
            @include exact-size(229px, 30px);
            transform-origin: left top;

            &-up {
              left: 30px;
              top: calc(100% + 14px);
              transform: rotate(90deg);
            }
            &-down {
              left: 0;
              transform: rotate(-90deg);
              top: calc(100% + 229px + 20px);
            }
          }
        }
      }
    }
    &-title {
      @include text('white', 'subtitleRow');

      @media (min-width: 1200px) {
        margin: 30px 0 0;
        min-height: 60px;
      }
      @media (max-width: 1199px) {
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        padding-left: 40px;
      }
    }
    &-text {
      @include text('white', 'subtitleRow');
      letter-spacing: 0.02em;
      word-break: break-all;
      word-wrap: normal;
      font-weight: 350;

      @media (min-width: 1200px) {
        margin: 40px 0 0;
      }
      @media (max-width: 1199px) {
        font-size: 24px;
        line-height: 30px;
        letter-spacing: 0.02em;
        margin: 20px 0 0;
        padding-left: 40px;
      }

      @media (max-width: 1199px) and (min-width: 576px) {
        br {
          display: none;
        }
      }

      @media (max-width: 575px) {
        font-size: 18px;
        line-height: 120%;
        margin-top: 12px;
        word-break: inherit;
        white-space: inherit;
      }
    }
    &--important {
      @media (min-width: 1200px) {
        @include exact-col(300px);
      }
    }
    &--constantly {
      @media (min-width: 1200px) {
        @include exact-col(295px);
        margin-left: 70px;
      }
    }
    &--useful {
      @media (min-width: 1200px) {
        @include exact-col(335px);
        margin-left: auto;
      }
    }

    @media (max-width: 1199px) {
      &--important > &-text, &--constantly > &-text {
        min-height: 200px;
        padding-right: 35px;
        word-break: break-word;
      }
    }
  }
}
</style>