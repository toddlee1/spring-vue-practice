import Vue from 'vue'
import VueRouter from 'vue-router'

import Todos from '../components/Todos'
import Login from '../components/Login'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        name: 'todos',
        path: '/',
        component: Todos,
        props: true
      },
      {
        name: 'login',
        path: '/login',
        component: Login,
        props: true
      }
    ]
});

export default router