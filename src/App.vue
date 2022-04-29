<template lang="pug">
#app
  Loader(v-if="loading")
  main
    router-view
  MobileNav
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Loader from '@/views/Loader.vue';
import MobileNav from '@/components/shared/MobileNav.vue';

@Options({
  components: {
    Loader,
    MobileNav,
  },
})
export default class App extends Vue {
  loading = true;

  async mounted(): Promise<void> {
    await setTimeout(() => {
      this.loading = false;
    }, 3000);
    // this.getNews();
  }
}
</script>

<style lang="scss">
#app {
  main {
    height: calc(100vh - 80px);
  }
}

// @media (min-width: 450px) {
//   #app {
//     width: 450px !important;
//   }
// }
</style>
