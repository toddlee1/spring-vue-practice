import Vue from 'vue'
import VueRouter from 'vue-router'

import Todos from '../components/Todos'
import Login from '../components/Login'

Vue.use(VueRouter)

// const Test = { template: '<p>Test</p>'}
// const Fuck = { template: '<p>Fuck</p>'}


const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Todos
      },
      {
        path: '/login',
        component: Login
      }
    ]
});

export default router