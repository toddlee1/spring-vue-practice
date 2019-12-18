<template>
  <div id="app">
    <router-view></router-view>
    <footer class="info">
      <p><router-link to="/">Todos</router-link></p>
      <p><router-link to="/login">Login</router-link></p>
      <p><router-link to="/create">CreateUser</router-link></p>
      <p>Based on a project written by <a href="http://evanyou.me">Evan You</a></p>
      <p>Original Vue TodoApp project is <a href="https://vuejs.org/v2/examples/todomvc.html">here</a></p>
      <p>Modified for this tutorial by Andrew Hughes</p>
    </footer>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  [v-cloak] { display: none; }
</style>