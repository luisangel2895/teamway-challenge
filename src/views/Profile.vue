<template lang="pug">
.profile
  .profile__background
      img(src="@/assets/quiz/background.svg")
  .profile__image
      img(src="@/assets/home/profile.jpg")
  .profile__container
    .profile__container-name Angel Orellana
    .profile__container-rank
      img(src="@/assets/profile/rank.svg")
    .profile__container-stats
      img(src="@/assets/profile/stats.svg")
    .profile__container-graph
      img(src="@/assets/profile/graph.svg")
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>
.profile {
  width: 100vw;
  min-height: 100vh;
  background-color: $primary_color;
  padding-top: 10px;
  font-family: $text_font;

  &__background {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;

    img {
      width: 100vw;
      height: 100vh;
      animation-name: fade-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  }

  &__image {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 60px;
    img {
      width: 90px;
      border-radius: 100%;
      border: 1px solid $grey_color_3;
    }
  }

  &__container {
    width: 94%;
    margin-top: 100px;
    margin-left: 3%;
    background-color: $white_color;
    padding: 50px 20px 120px 20px;
    border-radius: 20px 20px 0px 0px;
    text-align: center;

    &-name {
      font-size: 2.4rem;
      font-weight: 600;
    }

    &-rank {
      margin-top: 20px;
      img {
        width: 100%;
      }
    }

    &-stats {
      margin-top: 20px;
      img {
        width: 100%;
      }
    }

    &-graph {
      margin-top: 20px;
      img {
        width: 100%;
      }
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
</style>
