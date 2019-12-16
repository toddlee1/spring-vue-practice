<template>
  <div id="user">
    <h1 class="title">Login</h1>
    <section class="todoapp">
      <div>
        <header class="header">
          <input
            autofocus
            autocomplete="off"
            v-model="id" />
          <br>
          
          <input
            autocomplete="off"
            v-model="password" />
          <br>

          <button 
            class='login'
            v-on:click="checkUser"
          >Login</button>
        </header>
        <section class="main">
        
        </section>
        <footer class="footer">

        </footer>
      </div>
    </section>
  </div>
</template>

<script>
import api from "../Api";

// app Vue instance
export default {

  data: function() {
    return {
      id: "",
      password: "",
      error: null
    };
  },
  methods: {
    checkUser: function() {
      var user = this.id && this.id.trim();
      if (!user) {
        return;
      }

      api
        .checkUser(user)
        .then(response => {
          this.$log.debug("Checking User: ", response.data.password);
          if(this.password == response.data.password) {
            this.$router.push({name: 'todos', params: {id: user }});
          }
        })
        .catch(error => {
          this.$log.debug(error);
          this.error = "Failed to load User";
        })
        .finally(() => (this.loading = false));
    },
  },

  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    "todo-focus": function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
};

// export default Todos;
</script>

<style>
[v-cloak] {
  display: none;
}
</style>