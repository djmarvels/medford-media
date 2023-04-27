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
  margin-top: 375px;
  &-title {
    @include text('white', 'headbutton');
  }
  &-image {
    margin-top: 119px;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>