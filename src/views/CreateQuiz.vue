<template lang="pug">
.create-quiz
    Working(view="Create Quiz")
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Working from '@/components/shared/Working.vue';

@Options({
  components: {
    Working,
  },
})
export default class CreateQuiz extends Vue {}
</script>

<style lang="scss">
.create-quiz {
  width: 100vw;
  height: 100vh;
}
</style>
