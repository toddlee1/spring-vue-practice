<template>
  <div id="app">
    <!-- <Todos /> -->
    <router-view></router-view>
    <footer class="info">
      <p><router-link to="/">Todos</router-link></p>
      <p><router-link to="/login">Login</router-link></p>
      <p>Based on a project written by <a href="http://evanyou.me">Evan You</a></p>
      <p>Original Vue TodoApp project is <a href="https://vuejs.org/v2/examples/todomvc.html">here</a></p>
      <p>Modified for this tutorial by Andrew Hughes</p>
    </footer>
  </div>
</template>

<script>
  // import Todos from './components/Todos'
  // import Login from './components/Login'

  // import Vue from 'vue'
  // import VueRouter from 'vue-router'
  // app Vue instance

  // Vue.use(VueRouter)

  // const app = {
  //   name: 'app',
  //   components: {
  //     Todos
  //   },
  //   // app initial state
  //   data: () => {
  //     return {
  //     }
  //   }
  // }

//   const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'Todos',
//       components: { Todos }
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       components: { Login }
//     }
//   ]
// })

  export default {}
</script>

<style>
  [v-cloak] { display: none; }
</style>