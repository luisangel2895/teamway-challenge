<template lang="pug">
.introduction
  Fragment1(v-if="currentFragmentLoader === 1 || closeFragment1")
  Fragment2(v-if="currentFragmentLoader === 2 || closeFragment2")
  Fragment3(v-if="currentFragmentLoader === 3 || closeFragment3")
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex';
// Components
import Fragment1 from '@/components/introduction/Fragment1.vue';
import Fragment2 from '@/components/introduction/Fragment2.vue';
import Fragment3 from '@/components/introduction/Fragment3.vue';

@Options({
  components: {
    Fragment1,
    Fragment2,
    Fragment3,
  },
  computed: mapState([
    'currentFragmentLoader',
    'closeFragment1',
    'closeFragment2',
    'closeFragment3',
  ]),
})
export default class Introduction extends Vue {
  currentFragmentLoader!: number;
}
</script>

<style lang="scss" scoped>
.introduction {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 40;
  display: flex;
  background-color: $primary_color;
}
</style>
