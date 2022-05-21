import {createRouter, createWebHistory} from 'vue-router'
import ExerciseList from './components/ExerciseList.vue'
import Exercise01 from './components/Exercise/01/Exercise01.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: ExerciseList
  },
  {
    path: '/01',
    name: 'Exercise01',
    component: Exercise01
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
});