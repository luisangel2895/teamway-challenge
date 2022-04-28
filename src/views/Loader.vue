<template lang="pug">
.loader-page
  .loader-page__forms
    img.loader-page__forms-image(src="@/assets/loader/forms.svg")
  .loader-page__container
    .loader-page__container-box
      .loader-page__container-box__logo
        img(src="@/assets/loader/logo.svg")
      .loader-page__container-box__name {{ logoName }}
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Loader extends Vue {
  logoName = 'Angel Quiz';
}
</script>

<style lang="scss" scoped>
.loader-page {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: $primary_color;
  animation-name: fade-out;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  z-index: 100;

  &__forms {
    width: 100vw;
    height: 100vh;
    position: absolute;

    &-image {
      width: 100vw;
      height: 100vh;
      animation-name: fade-in;
      animation-duration: 2.5s;
      animation-fill-mode: forwards;
    }
  }

  &__container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    &-box__logo {
      text-align: center;
      img {
        animation-name: colorize;
        animation-duration: 2s;
        animation-fill-mode: forwards;
      }
    }
    &-box__name {
      text-align: center;
      font-size: 3.6rem;
      font-family: $logo_font;
      font-weight: 800;
      color: $white_color;
      animation-name: fade-in;
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes colorize {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    filter: grayscale(100%);
  }
  100% {
    opacity: 1;
    filter: grayscale(0%);
  }
}
</style>
