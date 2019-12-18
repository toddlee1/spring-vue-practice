<template>
  <div id="user">
    <h1 class="title">Login</h1>
    <section class="todoapp">
      <div>
        <header class="header">
          <input class="login" autocomplete="off" v-model="id" />
          <br />
          <input class="login" autocomplete="off" v-model="password" />
          <br />
          <input class="login" autocomplete="off" v-model="name" />
          <br />
          <button class="login" v-on:click="createUser">Register</button>
        </header>
        <section class="main"></section>
        <footer class="footer"></footer>
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
    createUser: function() {
      var id = this.id && this.id.trim();
      var password = this.password && this.password.trim();
      var name = this.name && this.name.trim();

      if (!id || !password || !name) {
        return;
      }

      api
        .createUser(id, password, name)
        .then(response => {
          this.$log.debug("Creating User: ", id);
          if (this.password == response.data.password) {
            this.$router.push({ name: "login" });
          }
        })
        .catch(error => {
          this.$log.debug(error);
          this.error = "Failed to load User";
        })
        .finally(() => (this.loading = false));
    }
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