<template>
  <div class="page">
    <the-header />
    <nuxt ref="page" />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
}
</script>