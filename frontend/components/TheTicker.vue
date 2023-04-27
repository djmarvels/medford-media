<template>
  <div class="ticker">
    <div class="container">
      <div class="row">
        <h3 class="ticker-header">
          Наши клиенты
        </h3>
      </div>
    </div>

    <div class="ticker-wrap">
      <div class="ticker-wrap-item">
        <span class="ticker-item-collection-1">
          <span class="ticker-item" v-for="id in 6" :key="`ticker-item-${id}`">
            <img :src="require(`../assets/images/tickers/ticker-${id}.png`)" alt="">
          </span>
        </span>
        <span class="ticker-item-collection-2">
           <span class="ticker-item" v-for="id in 6" :key="`ticker-item-${id}`">
            <img :src="require(`../assets/images/tickers/ticker-${id}.png`)" alt="">
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ticker'
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

@keyframes marquee {
  0% { transform: translateX(0) }
  100% { transform: translateX(-100%) }
}

@keyframes swap {
  0%, 50% { left: 0; }
  50.01%,
  100% { left: 100%; }
}
$duration: 50s;

.ticker {
  &-header {
    width: 100%;
    padding-left: 51px;
    @include text('white', 'title');
  }
  &-wrap {
    width: 100%;
    margin: 36px auto 0;
    overflow: hidden;
    white-space: nowrap;
    bottom: 0;
    min-height: 170px;

    &-item {
      display: inline-block;
      //margin-top: 5px;
      animation: marquee $duration linear infinite;
    }
  }
  &-item-collection-1 {
    position: relative;
    left: 0;
    animation: swap $duration linear infinite;
  }
  &-item {
    display: inline-block;
    padding-right: 120px;
  }
}


</style>