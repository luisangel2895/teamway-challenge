<template lang="pug">
.search
    Working(view="Search")
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Working from '@/components/shared/Working.vue';

@Options({
  components: {
    Working,
  },
})
export default class Search extends Vue {}
</script>

<style lang="scss" scoped>
.search {
  width: 100vw;
  height: 100vh;
}
</style>
