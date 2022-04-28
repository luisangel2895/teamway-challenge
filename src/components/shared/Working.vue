<template lang="pug">
.working
    .working__image
        img(src="@/assets/working/working.svg")
    .working__box
        .working__box-title Sorry :(
        .working__box-subtitle The view "{{view}}" is not available yet,
            |  our developers are working hard to have this view ready as soon as possible.
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    view: {
      type: String,
      default: 'View X',
    },
  },
})
export default class Working extends Vue {}
</script>

<style lang="scss">
.working {
  font-family: $text_font;
  background-color: $primary_color;
  &__image {
    width: 100vw;
    height: 40vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    img {
      width: 100%;
    }
  }
  &__box {
    width: 96vw;
    height: 60vh;
    margin: auto;
    border-radius: 40px;
    background-color: $white_color;
    &-title {
      padding-top: 40px;
      width: 100%;
      text-align: center;
      font-size: 2.4rem;
      font-weight: 700;
    }
    &-subtitle {
      width: 100%;
      padding: 40px 40px 40px 20px;
      color: $grey_color_2;
      font-size: 1.6rem;
      font-weight: 500;
      text-align: center;
    }
  }
}
</style>
