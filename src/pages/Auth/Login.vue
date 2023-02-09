<template>
  <div>
    <div>
      <h1>Login</h1>
      <div id="firebaseui-auth-container" v-if="showLoading"></div>
      <div id="loader" v-else>Loading...</div>
      <div>
        <p>
          <router-link :to="{ name: 'Register' }" class="ml-2"
            >Register</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import emailAuthentication from "@/mixins/Auth/EmailAuthentication.js";

export default {
  name: "Login",
  mixins: [emailAuthentication],
  data: () => ({}),
};
</script>
