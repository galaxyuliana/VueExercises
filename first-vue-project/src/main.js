import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import ComponentA from './components/Exercise/13/ComponentA.vue'
import ComponentB from './components/Exercise/13/ComponentB.vue'
import ComponentC from './components/Exercise/13/ComponentC.vue'

const app = createApp(App)
.component('ComponentA', ComponentA)
.component('ComponentB', ComponentB)
.component('ComponentC', ComponentC);
app.use(router);
app.mount('#app');
