<style scoped>
@import url("https://unpkg.com/purecss@1.0.1/build/pure-min.css");
</style>

<template>
  <div id="user">
    <h1 class="title">New User</h1>
    <section class="todoapp">
      <div>
        <header class="header">
          <form class="pure-form pure-form-aligned" @submit.prevent="createUser">
            <fieldset>
              <div class="pure-control-group">
                <label for="name">ID</label>
                <input id="name" type="text" placeholder="ID" v-model="id"/>
              </div>

              <div class="pure-control-group">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Password" v-model="password"/>
              </div>

              <div class="pure-control-group">
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="Name" v-model="name"/>
              </div>

              <div class="pure-controls">
                <button type="submit" class="pure-button pure-button-primary">Create</button>
              </div>
            </fieldset>
          </form>
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
      name: "",
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