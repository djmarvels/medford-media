<template>
  <div class="slider">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <client-only>
            <owl-carousel class="slider-carousel" :nav="false" :dots="true" :items="1" :margin="0">
              <div v-for="i in 4" class="slider-item">
                <div class="slider-item-box">
                  <img class="slider-image" src="../assets/images/slider-image.png" alt="Slider">
                </div>
              </div>
            </owl-carousel>
          </client-only>
        </div>
        <div class="col col-12">
          <p class="slider-text"><b>Наша студия</b> с&nbsp;панорамным видом на&nbsp;Москву, для записи видео и&nbsp;подкастов, расположена на&nbsp;33&nbsp;этаже Центрального дома туристов</p>
        </div>
        <div class="col col-12">
          <button type="button" class="slider-button">Заказать услуги</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSlider',
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

.slider {
  &-item {
    overflow: hidden;
    border-radius: 40px;

    &-box {
      width: 100%;
    }
  }
  &-image {
    border-radius: 40px;
    display: block;
    object-fit: cover;
  }
  &-carousel {
    width: 100%;

    @media (max-width: 991px) {
      .owl-theme .owl-nav.disabled + .owl-dots {
        margin-top: 19px;
      }
    }
  }
  &-text {
    @include text('white', 'subtitleRow');
    max-width: 680px;
    margin: 34px auto 0;
    font-weight: 350;
    b {
      font-weight: 500;
    }

    @media (max-width: 991px) {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0.02em;
      max-width: 320px;
      margin: 23px auto 0;
    }
  }
  &-button {
    background-color: $lightblue;
    border-radius: 20px;
    padding: 24px 60px 30px;
    @include text('white', 'headbutton');
    margin: 101px auto 0;
    display: block;

    @media (max-width: 991px) {
      border-radius: 18px;
      margin-top: 77px;
      font-size: 30px;
      line-height: 36px;
      text-align: center;
      color: #FFFFFF;
      font-weight: 400;
      padding: 19px 38px 22px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>