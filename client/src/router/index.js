import Vue from 'vue'
import VueRouter from 'vue-router'

import Todos from '../components/Todos'
import Login from '../components/Login'
import UserCreate from '../components/UserCreate'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        name: 'todos',
        path: '/todos',
        component: Todos,
        props: true
      },
      {
        name: 'login',
        path: '/',
        component: Login,
        props: true
      },
      {
        name: 'create',
        path: '/create',
        component: UserCreate,
        props: true
      }
    ]
});

export default router