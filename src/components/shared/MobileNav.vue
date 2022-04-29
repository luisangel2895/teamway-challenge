<template lang="pug">
.mobile-nav(v-if="isLogged")
    .mobile-nav__form
        .img-form
            img(src="@/assets/nav/nav-form.svg")
        .img-new-quiz(@click="createQuiz")
            img(src="@/assets/nav/new-quiz.svg")
    .mobile-nav__links
        .link-home.link(@click="goHome")
            img(src="@/assets/nav/home-fill.svg" v-if="currentView === 'Home'").fade-in
            img(src="@/assets/nav/home.svg" v-else)
        .link-search.link(@click="goSearch")
            img(src="@/assets/nav/search-fill.svg" v-if="currentView === 'Search'").fade-in
            img(src="@/assets/nav/search.svg" v-else)
        .link-stats.link(@click="goStats")
            img(src="@/assets/nav/stats-fill.svg" v-if="currentView === 'Stats'").fade-in
            img(src="@/assets/nav/stats.svg" v-else)
        .link-profile.link(@click="goProfile")
            img(src="@/assets/nav/profile-fill.svg" v-if="currentView === 'Profile'").fade-in
            img(src="@/assets/nav/profile.svg" v-else)
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapMutations, mapState } from 'vuex';

@Options({
  computed: mapState(['isLogged', 'currentView']),
  methods: mapMutations(['SET_CURRENT_VIEW']),
})
export default class MobileNav extends Vue {
  SET_CURRENT_VIEW!: (view: string) => void;

  goHome(): void {
    this.$router.push({ name: 'Home' });
    this.SET_CURRENT_VIEW('Home');
  }

  goSearch(): void {
    this.$router.push({ name: 'Search' });
    this.SET_CURRENT_VIEW('Search');
  }

  goStats(): void {
    this.$router.push({ name: 'Stats' });
    this.SET_CURRENT_VIEW('Stats');
  }

  goProfile(): void {
    this.$router.push({ name: 'Profile' });
    this.SET_CURRENT_VIEW('Profile');
  }

  createQuiz(): void {
    this.$router.push({ name: 'CreateQuiz' });
    this.SET_CURRENT_VIEW('');
  }
}
</script>

<style lang="scss">
.mobile-nav {
  width: 100vw;
  position: fixed;
  bottom: -5px;
  z-index: 10;

  &__form {
    width: 100vw;

    .img-form {
      img {
        width: 100vw;
      }
    }
    .img-new-quiz {
      position: fixed;
      text-align: center;
      bottom: 30px;
      right: calc(50% - 60px);
      img {
        width: 120px;
      }
    }
  }

  &__links {
    width: 100vw;
    position: absolute;
    bottom: 25px;
    z-index: 15;
    display: flex;
    justify-content: space-evenly;
    .link {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .link:active {
      border-radius: 100%;
      background-color: $grey_color_4;
      animation-name: show-circle;
      animation-duration: 0.7s;
    }
    .link-search {
      margin-right: 40px;
    }
    .link-stats {
      margin-left: 40px;
    }
  }
}
.fade-in {
  animation-name: fade-in;
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes show-circle {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
