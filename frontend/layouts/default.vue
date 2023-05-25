<template>
  <div class="page">
    <the-header />
    <nuxt ref="page" />
    <client-only>
      <the-order />
      <the-call-back v-if="callbackPopup" />
    </client-only>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheOrder from '../components/TheOrder.vue';
import TheCallBack from '../components/TheCallBack.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'default',
  components: {
    TheHeader,
    TheOrder,
    TheCallBack,
  },
  computed: {
    ...mapGetters({
      orderPopup: 'page/orderPopup',
      callbackPopup: 'page/callbackPopup',
    })
  },
}
</script>