<style scoped>
@import url("https://unpkg.com/purecss@1.0.1/build/pure-min.css");
</style>

<template>
  <div id="user">
    <h1 class="title">Login</h1>
    <section class="todoapp">
      <div>
        <header class="header">
          <form class="pure-form pure-form-aligned" @submit.prevent="checkUser">
            <fieldset>
              <div class="pure-control-group">
                <label for="name">ID</label>
                <input id="name" type="text" placeholder="ID" v-model="id" />
              </div>

              <div class="pure-control-group">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Password" v-model="password" />
              </div>

              <div class="pure-controls">
                <button class="pure-button pure-button-primary">Login</button>
              </div>
            </fieldset>
          </form>
          <button class="pure-button pure-button-primary" v-on:click="routeUserCreate">New User</button>
          <!-- <input class="login" autocomplete="off" v-model="id" />
          <br />
          <input class="login" autocomplete="off" v-model="password" />
          <br />
          <button class="login" v-on:click="checkUser">Login</button>-->
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
    checkUser: function() {
      var user = this.id && this.id.trim();
      if (!user) {
        return;
      }

      api
        .checkUser(user)
        .then(response => {
          this.$log.debug("Checking User: ", response.data.password);
          if (this.password == response.data.password) {
            this.$router.push({ name: "todos", params: { id: user } });
          }
        })
        .catch(error => {
          this.$log.debug(error);
          this.error = "Failed to load User";
        })
        .finally(() => (this.loading = false));
    },
    routeUserCreate: function() {
      this.$router.push({ name: "create" });
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