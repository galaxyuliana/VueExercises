import {createRouter, createWebHistory} from 'vue-router'
import ExerciseList from './components/ExerciseList.vue'
import Exercise01 from './components/Exercise/01/Exercise01.vue'
import Exercise02 from './components/Exercise/02/Exercise02.vue'
import Exercise03 from './components/Exercise/03/Exercise03.vue'
import Exercise04 from './components/Exercise/04/Exercise04.vue'
import Exercise05 from './components/Exercise/05/Exercise05.vue'
import Exercise06 from './components/Exercise/06/Exercise06.vue'
import Exercise07 from './components/Exercise/07/Exercise07.vue'
import Exercise08 from './components/Exercise/08/Exercise08.vue'

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
  },
  {
    path: '/05',
    name: 'Exercise05',
    component: Exercise05
  },
  {
    path: '/06',
    name: 'Exercise06',
    component: Exercise06
  },
  {
    path: '/07',
    name: 'Exercise07',
    component: Exercise07
  },
  {
    path: '/08',
    name: 'Exercise08',
    component: Exercise08
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
});