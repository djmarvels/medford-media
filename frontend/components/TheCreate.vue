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
  padding-top: 224px;
  overflow: hidden;

  &-title {
    width: 100%;
    max-width: 750px;
    margin-left: calc((100vw - $sizeXl) / 2);
    @include text('white', 'headbutton');
  }

  &-item {
    width: 100%;
    position: relative;

    &--mixcast, &--concept {
      margin-left: calc((100vw - $sizeXl) / 2);
    }

    &--mixcast {
      max-width: 1203px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
    &--concept {
      margin-top: 247px;
      padding-bottom: 223px;
      max-width: calc($sizeXl + ((100vw - $sizeXl) / 2));
    }
    &--filming {
      margin-top: 105.31px;
      padding-bottom: 330px;
      margin-left: calc((100vw - 1440px) / 2);
    }
    &--ar {
      margin-top: -205px;
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
        margin-left: 39px;
      }
      &--filming {
        position: relative;
        max-width: 521px;
        margin-left: 191px;
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
        @include exact-size(677px, 444px);
        opacity: 0.4;
        margin-left: -57px;
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
        @include exact-size(1228.79px, 531.53px);
        transform: rotate(4.22deg);
        margin-left: -89px;
        margin-top: -24.37px;
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
        top: calc(145px + 88.69px);
        left: 598px;
        width: 100%;
      }
      &--director {
        position: absolute;

        &--monitor {
          top: 189px;
          left: auto;
          right: -238px;
          max-width: 340px;
        }
        &--cameras {
          max-width: 245px;
          top: auto;
          bottom: 195px;
          left: -83px;
        }
        &--stabiliser {
          max-width: 275px;
          top: auto;
          bottom: 218px;
          left: auto;
          right: -211px;
        }
      }
      &--dron, &--ar {
        position: absolute;
      }
      &--dron {
        top: 299.21px;
        left: auto;
        right: 3.6px;
        max-width: 360px;
      }
      &--ar {
        top: 205px;
        left: -216px;
        max-width: 340px;
      }
    }
    &-video {
      &--concept, &--ar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      &--ar {
        mix-blend-mode: lighten;
      }
    }
  }
}
</style>