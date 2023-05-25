<template>
  <div class="create">
    <h3 class="create-title">Всё что нужно для создания видео и&nbsp;аудио контента</h3>

    <div class="create-item create-item--concept">
      <h6 class="create-item-title create-item-title--concept">
        Разработаем концепцию и&nbsp;сценарий, которые помогут потребителям влюбиться в&nbsp;ваш продукт
      </h6>
      <div class="create-item-content create-item-content--concept">
        <iframe id="conceptVideo" ref="conceptVideo" class="create-item-video create-item-video--concept" src="https://player.vimeo.com/video/820890583?autoplay=0&loop=1&autopause=0&muted=0&controls=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen />
      </div>
    </div>

    <div class="create-item create-item--mixcast">
      <div class="create-item-content create-item-content--mixcast">
        <img class="create-item-image create-item-image--mixcast" src="../assets/images/mixcast.png" alt="MixCast">
      </div>
      <h6 class="create-item-title create-item-title--mixcast">
        Создадим захватывающий эмоции слушателей саунд-дизайн
      </h6>
    </div>

    <div class="create-item create-item--filming">
      <h6 class="create-item-title create-item-title--filming">
        Организуем и&nbsp;проведём профессиональную видеосъёмку
      </h6>
      <div class="create-item-content create-item-content--filming">
        <img class="create-item-image create-item-image--filming" src="../assets/images/filming.png" alt="Filming">

        <p class="create-item-text create-item-text--filming">
          <b>Осветительное спецоборудование</b><br>используется для создания нужной атмосферы в&nbsp;сцене и&nbsp;получения качественных изображений
        </p>
      </div>
    </div>

    <div class="create-item create-item--director">
      <div class="create-item-content create-item-content--director">
        <img class="create-item-image create-item-image--director" src="../assets/images/director.png" alt="Director">

        <p class="create-item-text create-item-text--director create-item-text--director--monitor">
          <b>Монитор режиссера</b><br>помогает контролировать во&nbsp;время съемки: композицию кадра, фокусное расстояние и&nbsp;цветопередачу
        </p>
        <p class="create-item-text create-item-text--director create-item-text--director--cameras">
          <b>Камеры</b> которые мы&nbsp;используем, снимают видео с&nbsp;высоким разрешением от&nbsp;4K
        </p>
        <p class="create-item-text create-item-text--director create-item-text--director--stabiliser">
          <b>Трехосевой стабилизатор</b> позволяет плавно перемещать видеокамеру даже при съемке во&nbsp;время землетрясений
        </p>
      </div>
    </div>

    <div class="create-item create-item--dron">
      <div class="create-item-content create-item-content--dron">
        <img class="create-item-image create-item-image--dron" src="../assets/images/dron.png" alt="Dron">

        <p class="create-item-text create-item-text--dron">
          <b>Наш дрон</b> снимает крышесносные видео полетов над городом, природными ландшафтами и&nbsp;промышленными объектами
        </p>
      </div>
    </div>

    <div class="create-item create-item--ar">
      <div class="create-item-content create-item-content--ar">
        <iframe id="arVideo" ref="arVideo" class="create-item-video create-item-video--ar" src="https://player.vimeo.com/video/821062305?autoplay=0&loop=1&autopause=0&muted=0&controls=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen />
        <p class="create-item-text create-item-text--ar">
          <b>Очки дополненной реальности</b> показывают интеракивные подсказки и&nbsp;позволяют проводить вебинары по&nbsp;ремонту оборудования со&nbsp;съемкой от&nbsp;первого лица
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TheCreate',
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

$sizeXl: 1140px;

.create {
  overflow: hidden;
  @media (min-width: 1200px) {
    padding-top: 224px;
  }
  @media (max-width: 1199px) {
    padding-top: 86px;
  }

  &-title {
    width: 100%;
    @include text('white', 'headbutton');
    @media (min-width: 1200px) {
      margin-left: calc((100vw - $sizeXl) / 2);
      max-width: 750px;
    }
    @media (max-width: 1199px) and (min-width: 992px) {
      padding: 0 35px 0 42px;
    }
    @media (max-width: 991px) {
      max-width: 560px;
      margin: 0 auto;
    }
  }

  &-item {
    width: 100%;
    position: relative;

    &--mixcast, &--concept {
      @media (min-width: 1200px) {
        margin-left: calc((100vw - $sizeXl) / 2);
      }
    }
    &--concept {
      padding: 0 42px;
    }

    &--mixcast {
      max-width: 1203px;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      @media (max-width: 1199px) {
        flex-direction: column;
      }
    }
    &--concept {
      @media (min-width: 992px) {
        margin-top: 247px;
        padding-bottom: 223px;
        max-width: calc($sizeXl + ((100vw - $sizeXl) / 2));
      }
      @media (max-width: 991px) {
        padding-bottom: 77px;
        margin-top: 275px;
        max-width: 435px;
      }
    }
    &--filming {
      margin-top: 105.31px;
      padding-bottom: 330px;

      @media (min-width: 1200px) {
        margin-left: calc((100vw - 1440px) / 2);
      }
    }
    &--ar {
      @media (min-width: 1200px) {
        margin-top: -205px;
      }
      @media (max-width: 1199px) {
        margin-top: -315px;
      }
    }
    &--dron {
      @media (max-width: 1200px) {
        padding-top: 210px;
      }
    }

    &-title {
      width: 100%;
      @include text('white', 'titleRow');
      letter-spacing: 0.02em;

      &--concept {
        max-width: 520px;
      }
      &--mixcast {
        max-width: 487px;
        @media (min-width: 1200px) {
          margin-left: 39px;
        }
        @media (max-width: 1199px) {
          margin: 16px auto 0;
        }
      }
      &--filming {
        position: relative;
        max-width: 521px;
        @media (min-width: 1200px) {
          margin-left: 191px;
        }
        @media (max-width: 1199px) {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
    &-content {
      &--concept {
        position: absolute;
        min-width: 1566px;
        min-height: 881px;
        top: -406px;
        left: -24px;
        z-index: -1;
      }
      &--director {
        position: relative;
        @include exact-size(831px, 957px);
        margin: -60px auto 0;
      }
      &--dron {
        @include exact-size(1060.19px, 883.03px);
        margin: -105px auto 0;
        position: relative;
      }
      &--ar {
        position: relative;
        @include exact-size(1141px, 642px);
        @media (min-width: 1440px) {
          margin-left: calc((100vw - 1440px) / 2 + 351px);
        }
        @media (max-width: 1439px) {
          margin-left: auto;
          margin-right: -52px;
        }
      }
    }
    &-image {
      display: block;

      &--mixcast {
        @media (min-width: 1200px) {
          @include exact-size(677px, 444px);
          opacity: 0.4;
          margin-left: -57px;
        }
        @media (max-width: 1199px) {
          width: 100%;
          height: auto;
        }
      }
      &--director, &--filming {
        mix-blend-mode: screen;
      }
      &--director, &--filming {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
      &--filming {
        @media (min-width: 1200px) {
          @include exact-size(1228.79px, 531.53px);
          margin-left: -89px;
          margin-top: -24.37px;
          transform: rotate(4.22deg);
        }
        @media (max-width: 1199px) {
          margin-left: -144px;
          margin-top: 42.57px;
          @include exact-size(530.42px, 229.44px);
        }
        @media (max-width: 991px) {
          margin-left: -115px;
          margin-top: -75px;
          object-fit: cover;
        }
      }
      &--dron {
        @media (max-width: 1200px) {
          @include exact-size(694.4px, 578.36px);
          left: -242.35px;
        }
      }
    }
    &-text {
      width: 100%;
      letter-spacing: 0.02em;
      @include text('white', 'subtitleRow');
      font-weight: 350;
      b {
        font-weight: 500;
      }

      &--filming {
        max-width: 480px;
        position: absolute;
        width: 100%;

        @media (min-width: 1200px) {
          top: calc(145px + 88.69px);
          left: 598px;
        }
        @media (max-width: 1199px) {
          top: calc(153px + 30px);
          left: calc((100vw - 520px) / 2);
        }
      }
      &--director {
        position: absolute;

        &--monitor {
          max-width: 340px;
          @media (min-width: 1200px) {
            top: 189px;
            left: auto;
            right: -238px;
          }
          @media (max-width: 1199px) {
            left: 15px;
            right: auto;
            top: 0;
          }
        }
        &--cameras {
          max-width: 245px;
          @media (min-width: 1200px) {
            top: auto;
            bottom: 195px;
            left: -83px;
          }
          @media (max-width: 1199px) {
            left: 0;
            top: calc(100% - 200px);
          }
        }
        &--stabiliser {
          max-width: 275px;

          @media (min-width: 1200px) {
            top: auto;
            bottom: 218px;
            left: auto;
            right: -211px;
          }
          @media (max-width: 1199px) {
            left: auto;
            right: 0;
            top: 100%;
          }
        }
      }
      &--dron, &--ar {
        position: absolute;
      }
      &--dron {
        max-width: 360px;
        @media (min-width: 1200px) {
          top: 299.21px;
          left: auto;
          right: 3.6px;
        }
        @media (max-width: 1199px) {
          top: 352px;
          left: auto;
          right: 100px;
        }
      }
      &--ar {
        max-width: 340px;
        @media (min-width: 1200px) {
          top: 205px;
          left: -216px;
        }
        @media (max-width: 1199px) {
          top: calc(100% - (211px + 50px));
          left: calc(50vw - (340px / 2));
        }
      }
    }
    &-video {
      &--concept, &--ar {
        position: absolute;
        top: 0;
        width: 100%;
      }
      &--ar {
        mix-blend-mode: lighten;
      }
      &--ar {
        @media (min-width: 1200px) {
          height: 100%;
          left: 0;
        }
        @media (max-width: 1199px) {
          max-width: calc(100vw - (36px * 2));
          left: 36px;
        }
      }
      &--concept {
        @media (max-width: 991px) {
          @include exact-size(725px, 408px);
          left: calc(50vw - (725px / 2));
          top: calc(-125px + 153px);
        }
      }
    }
  }
}
</style>