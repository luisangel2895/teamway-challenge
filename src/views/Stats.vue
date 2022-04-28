<template lang="pug">
.stats
    Working(view="Stats")
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Working from '@/components/shared/Working.vue';

@Options({
  components: {
    Working,
  },
})
export default class Stats extends Vue {}
</script>

<style lang="scss" scoped>
.stats {
  width: 100vw;
  height: 100vh;
}
</style>
