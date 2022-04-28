<template lang="pug">
.home
  .profile-home
    .profile-home__profile
      .profile-home__profile-time
        .image-time
          img(src="@/assets/home/sun.svg")
        .text-time GOOD MORNING
      .profile-home__profile-name Angel Orellana
    .profile-home__image
      img(src="@/assets/home/profile.jpg")
  .recent-quiz
    .recent-quiz__data
      .recent-quiz__data-title RECENT QUIZ
      .recent-quiz__data-test
        .test-icon
          img(src="@/assets/home/headphones.svg")
        .test-text Personality Quiz
    .recent-quiz__graphic
      img(src="@/assets/home/graphic.svg")
  .recomendation
    .recomendation__background
      .recomendation__background__image-boy
        img(src="@/assets/home/men.svg")
      .recomendation__background__forms
        img(src="@/assets/home/recomendation.svg")
      .recomendation__background__image-girl
        img(src="@/assets/home/girl.svg")
    .recomendation__container
      .recomendation__container-title RECOMENDATION
      .recomendation__container-text Dont forget share your results with your friends
      .recomendation__container-button
        button Share with Friends
  .tests
    .tests__title  Quizzes
    .tests__container
      QuizComponent(v-for="(quiz,index) in quizzes" :key="index" :quiz="quiz")
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState, mapActions } from 'vuex';
// Components
import QuizComponent from '@/components/shared/QuizComponent.vue';

@Options({
  components: { QuizComponent },
  computed: {
    ...mapState(['isLogged', 'quizzes']),
  },
  methods: mapActions(['getAllQuizes']),
})
export default class Home extends Vue {
  isLogged!: boolean;

  getAllQuizes!: () => Promise<void>;

  mounted(): void {
    if (!this.isLogged) {
      this.$router.push({ name: 'Introduction' });
    }
    this.getAllQuizes();
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: $primary_color;
  padding-top: 50px;
  font-family: $text_font;

  .profile-home {
    width: 90vw;
    margin: auto;
    display: flex;
    align-items: center;

    &__profile {
      width: 70%;

      &-time {
        display: flex;
        align-items: center;

        .image-tile {
          width: 20px;
        }
        .text-time {
          margin-left: 10px;
          color: $accent_color1;
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
      &-name {
        font-size: 2.4rem;
        font-weight: 600;
        color: $white_color;
      }
    }
    &__image {
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      img {
        width: 56px;
        border-radius: 100%;
      }
    }
  }
  .recent-quiz {
    width: 90vw;
    margin: auto;
    display: flex;
    margin-top: 30px;
    border-radius: 15px;
    padding: 20px;
    background-color: #ffccd5;
    background-image: url('../assets/home/recent-quiz.svg');

    &__data {
      width: 70%;

      &-title {
        color: rgb(102, 0, 18, 0.5);
        font-size: 1.4rem;
        font-weight: 600;
      }

      &-test {
        display: flex;
        align-items: center;
        color: #660012;

        .test-text {
          font-size: 1.8rem;
          font-weight: 600;
          margin-left: 10px;
        }
      }
    }
    &__graphic {
      width: 30%;
      text-align: right;
      img {
        height: 100%;
      }
    }
  }
  .recomendation {
    width: 90%;
    margin: auto;
    margin-top: 20px;

    &__background {
      &__image-boy {
        position: absolute;
        margin-top: 20px;
        margin-left: 20px;
      }

      &__forms {
        width: 100%;
        img {
          width: 100%;
        }
      }

      &__image-girl {
        position: absolute;
        right: 40px;
        margin-top: -80px;
      }
    }

    &__container {
      position: absolute;
      margin-top: -200px;
      text-align: center;
      width: 90%;

      &-title {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.4rem;
        font-weight: 600;
      }

      &-text {
        width: 60%;
        margin-top: 5px;
        margin-left: 20%;
        color: $white_color;
        font-size: 1.8rem;
        font-weight: 600;
      }

      &-button {
        margin-top: 15px;
        button {
          padding: 15px;
          border: none;
          background-color: $white_color;
          border-radius: 20px;
          font-size: 1.4rem;
          font-weight: 600;
          color: $primary_color;
        }
      }
    }
  }
  .tests {
    min-height: 60vh;
    margin-top: 20px;
    padding-bottom: 100px;
    border-radius: 20px 20px 0px 0px;
    background-color: $white_color;
    padding: 20px;

    &__title {
      font-size: 2rem;
      font-weight: 600;
      color: $black_color;
    }
  }
}
</style>
