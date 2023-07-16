<template>
  <component :is="layout"></component>
</template>
<script>
import authLayout from './layout/auth.vue'
import defaultLayout from './layout/default.vue'
export default {
  components: {
    'auth': authLayout,
    'def': defaultLayout,
  },

  computed: {
    layout() {
      return this.$store.getters.layout
    }
    // ...mapGetters([
    //   'layout',
    //   'albums',
    // ]),
  }


}
</script>
<style lang="scss">
  @import '@/styles/style.scss';
</style>