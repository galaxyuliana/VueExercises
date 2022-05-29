import {createRouter, createWebHistory} from 'vue-router'
import ExerciseList from './components/ExerciseList.vue'
import Exercise01 from './components/Exercise/01/Exercise01.vue'
import Exercise02 from './components/Exercise/02/Exercise02.vue'
import Exercise03 from './components/Exercise/03/Exercise03.vue'
import Exercise04 from './components/Exercise/04/Exercise04.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: ExerciseList
  },
  {
    path: '/01',
    name: 'Exercise01',
    component: Exercise01
  },
  {
    path: '/02',
    name: 'Exercise02',
    component: Exercise02
  },
  {
    path: '/03',
    name: 'Exercise03',
    component: Exercise03
  },
  {
    path: '/04',
    name: 'Exercise04',
    component: Exercise04
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
});