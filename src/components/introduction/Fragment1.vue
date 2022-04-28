<template lang="pug">
.fragment(@touchstart="touchStart"
    @touchend="touchEnd"
    :class="{'hide-left':hideLeft, 'entry-left': entryLeft }")
  .fragment__background
    img.fragment__background-image(src="@/assets/loader/forms.svg")
  .fragment__container
    .fragment__container-main-image
        img(src="@/assets/loader/fragment-1.svg")
    .fragment__container-indicador-image
        img(src="@/assets/loader/indicador-1.svg")
    .fragment__container-data
        .container-data
            .container-data__title Remember know yourself is important
            .container-data__button
                button(@click="goLogin") Sign Up
            .container-data__message Already have an account?
                span(@click="goLogin") Login
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapMutations, mapState } from 'vuex';

@Options({
  methods: mapMutations([
    'SET_CURRENT_FRAGMENT_LOADER',
    'SET_PAST_FRAGMENT_LOADER',
    'STATUS_CLOSE_FRAGMENT_1',
  ]),
  computed: mapState(['pastFragmentLoader']),
})
export default class Fragment1 extends Vue {
  touchstartX = 0;

  touchendX = 0;

  hideLeft = false;

  entryLeft = false;

  SET_CURRENT_FRAGMENT_LOADER!: (fragment: number) => void;

  SET_PAST_FRAGMENT_LOADER!: (fragment: number) => void;

  STATUS_CLOSE_FRAGMENT_1!: (status: boolean) => void;

  pastFragmentLoader!: number;

  async handleGesture(): Promise<void> {
    if (this.touchendX < this.touchstartX) {
      this.entryLeft = false;
      this.hideLeft = true;

      this.SET_CURRENT_FRAGMENT_LOADER(2);

      await setTimeout(() => {
        this.STATUS_CLOSE_FRAGMENT_1(false);
      }, 500);
    }
  }

  touchStart(e: TouchEvent): void {
    this.touchstartX = e.changedTouches[0].screenX;
  }

  touchEnd(e: TouchEvent): void {
    this.touchendX = e.changedTouches[0].screenX;
    this.handleGesture();
  }

  goLogin(): void {
    this.$router.push({ name: 'Login' });
  }

  mounted(): void {
    if (this.pastFragmentLoader === 2) {
      this.hideLeft = false;
      this.entryLeft = true;
    }
    this.SET_PAST_FRAGMENT_LOADER(1);
    this.STATUS_CLOSE_FRAGMENT_1(true);
  }
}
</script>

<style lang="scss" scoped>
.fragment {
  width: 100vw;
  height: 100vh;
  background-color: $primary_color;

  &__background {
    width: 100vw;
    height: 100vh;
    position: absolute;

    &-image {
      width: 100vw;
      height: 100vh;
      animation-name: fade-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  }

  &__container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;

    &-main-image {
      height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 90%;
      }
    }

    &-indicador-image {
      position: relative;
      bottom: 30px;
      text-align: center;

      img {
        width: 10%;
      }
    }

    &-data {
      height: 30vh;
      font-family: $text_font;

      .container-data {
        margin: auto;
        width: 93%;
        height: 28vh;
        padding: 30px;
        background-color: $white_color;
        border-radius: 20px;

        &__title {
          font-weight: 700;
          color: $black_color;
          font-size: 2.4rem;
          text-align: center;
        }

        &__button {
          text-align: center;
          padding-top: 20px;

          button {
            width: 100%;
            padding-top: 20px;
            padding-bottom: 20px;
            background-color: $primary_color;
            border: none;
            color: $white_color;
            border-radius: 20px;
            font-size: 1.6rem;
          }
        }

        &__message {
          text-align: center;
          padding-top: 20px;
          font-size: 1.4rem;
          color: $grey_color_2;
          span {
            color: $primary_color;
            font-weight: 700;
            margin-left: 10px;
          }
        }
      }
    }
  }
}

.hide-left {
  animation-name: hide-left;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.entry-left {
  animation-name: entry-left;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes hide-left {
  from {
    position: absolute;
    left: 0px;
  }
  to {
    position: absolute;
    left: -100%;
  }
}

@keyframes entry-left {
  from {
    position: absolute;
    left: -100vw;
  }
  to {
    position: absolute;
    left: 0px;
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
