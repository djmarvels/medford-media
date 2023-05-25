<template>
  <div class="showreel">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <h3 class="showreel-title">Шоурил</h3>
        </div>
        <div class="col col-12">
          <div class="showreel-video">
            <iframe id="showReelVideo" ref="showReelVideo" class="showreel-video-frame" src="https://player.vimeo.com/video/821658436?autoplay=0&loop=1&autopause=0&muted=0&controls=1" width="1281" height="747" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheShowreel'
}
</script>

<style lang="scss">
@import '../assets/styles/mixins';

.showreel {
  @media (min-width: 992px) {
    margin-top: calc(84px + 43px);
    padding-left: 51px;
  }
  @media (max-width: 991px) {
    margin-top: 38px;
  }

  &-title {
    @media (min-width: 992px) {
      @include text('white', 'title');
    }
    @media (max-width: 991px) {
      font-weight: 400;
      font-size: 36px;
      line-height: 111.5%;
      color: #FFFFFF;
    }
  }
  &-video {
    margin: 29px auto 0;
    width: 100%;
    border-radius: 12px;

    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    &-frame {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }
}
</style>