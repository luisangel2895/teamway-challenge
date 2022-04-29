import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Introduction from '@/views/Introduction.vue';
import Search from '@/views/Search.vue';
import Stats from '@/views/Stats.vue';
import Profile from '@/views/Profile.vue';
import CreateQuiz from '@/views/CreateQuiz.vue';
import Quiz from '@/views/Quiz.vue';
import NotFound from '@/components/shared/NotFound.vue';
import Result from '@/components/quiz/Result.vue';
import ReviewAnswers from '@/views/ReviewAnswers.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/create-quiz',
    name: 'CreateQuiz',
    component: CreateQuiz,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz,
  },
  {
    path: '/results',
    name: 'Result',
    component: Result,
  },
  {
    path: '/review',
    name: 'Review',
    component: ReviewAnswers,
  },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
