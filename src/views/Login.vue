<template lang="pug">
.fragment(:class="{'fade-out':fadeOut}")
  .fragment__background
    img.fragment__background-image(src="@/assets/loader/forms-login.svg")
  .fragment__container
    .fragment__container-logo-image
        img(src="@/assets/loader/logo.svg")
    .fragment__container-main-image
        img(src="@/assets/loader/login.svg")
    .fragment__container-data
        .container-data
            .container-data__title Login or Sign Up
            .container-data__subtitle Login to take diferents quiz, take part in challenge and more.
            .container-data__button
                button(@click="goHome") Login
            .container-data__google
                button(@click="goHome")
                  img(src="@/assets/loader/google-logo.svg")
                  |Login with Google
            .container-data__facebook
                button(@click="goHome")
                  img(src="@/assets/loader/facebook-logo.svg")
                  |Login with Facebook
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapActions } from 'vuex';

@Options({
  methods: {
    ...mapActions(['updateStatusLogin']),
  },
})
export default class Login extends Vue {
  updateStatusLogin!: (status: boolean) => void;

  fadeOut = false;

  async goHome(): Promise<void> {
    this.updateStatusLogin(true);
    this.fadeOut = true;
    await setTimeout(() => {
      this.$router.push({ name: 'Home' });
    }, 500);
  }
}
</script>

<style lang="scss" scoped>
.fragment {
  width: 100%;
  height: 100vh;
  background-color: $primary_color;
  z-index: 40;
  position: absolute;

  &__background {
    width: 100%;
    height: 100vh;
    position: absolute;

    &-image {
      width: 100%;
      height: 100vh;
      animation-name: fade-in;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
  }

  &__container {
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    flex-direction: column;

    &-logo-image {
      height: 15vh;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 15%;
      }
    }

    &-main-image {
      height: 40vh;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 90%;
      }
    }

    &-data {
      height: 45vh;
      font-family: $text_font;

      .container-data {
        margin: auto;
        width: 93%;
        height: 43.5vh;
        padding: 30px;
        background-color: $white_color;
        border-radius: 20px;

        &__title {
          font-weight: 700;
          color: $black_color;
          font-size: 2.4rem;
          text-align: center;
        }

        &__subtitle {
          padding-top: 10px;
          color: $grey_color_2;
          font-size: 1.6rem;
          text-align: center;
        }

        &__button {
          text-align: center;
          padding-top: 20px;

          button {
            width: 100%;
            padding-top: 15px;
            padding-bottom: 15px;
            background-color: $primary_color;
            border: none;
            color: $white_color;
            border-radius: 20px;
            font-size: 1.6rem;
          }
        }

        &__google {
          text-align: center;
          padding-top: 15px;
          button {
            width: 100%;
            padding-top: 12px;
            padding-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid $grey_color_4;
            border-radius: 20px;
            background-color: $white_color;
            color: $black_color;
            font-size: 1.6rem;
            font-weight: 600;

            img {
              margin-right: 10px;
            }
          }
        }

        &__facebook {
          text-align: center;
          padding-top: 15px;
          button {
            width: 100%;
            padding-top: 15px;
            padding-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 20px;
            background-color: #0056b2;
            color: $white_color;
            font-size: 1.6rem;
            font-weight: 600;

            img {
              margin-right: 10px;
            }
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

.fade-out {
  animation-name: fade-out;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@media (min-width: 450px) {
  .fragment {
    max-width: 450px;
  }
}
</style>
