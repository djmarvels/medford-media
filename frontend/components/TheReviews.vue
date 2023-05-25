<template>
  <div class="reviews">
    <div class="container">
      <h3 class="reviews-title">Отзывы клиентов</h3>
      <div class="reviews-image">
        <img src="../assets/images/reviews.svg" alt="Reviews">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheReviews',
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

.reviews {
  @media (min-width: 992px) {
    margin-top: 375px;
  }
  @media (max-width: 991px) {
    margin-top: 128px;
  }
  &-title {
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
  &-image {
    @media (min-width: 992px) {
      margin-top: 119px;
    }
    @media (max-width: 991px) {
      margin-top: 48px;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>