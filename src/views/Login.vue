<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    
    <v-layout row wrap align-center>
      <v-flex md4> </v-flex>
      <v-flex>
        <v-card class="pa-5">
          WELCOME TO
          <span class="text-center light-blue--text text--accent-3"
            >EMPLOY</span
          >
          <span>.ORG</span>

          <h4 class="text-center mt-4">Ensure your E-mail for login</h4>
          <v-form>
            <v-text-field
              v-model="loginEmail"
              label="Email"
              name="Email"
              prepend-icon="email"
              type="text"
              color="light-blue accent-3"
            />

            <v-text-field
              v-model="loginPassword"
              id="password"
              label="Password"
              name="password"
              prepend-icon="lock"
              type="password"
              color="light-blue accent-3"
            />
          </v-form>
          <h5 class="text-center mt-4 red--text">{{ errormsg }}</h5>
          <h3 class="text-center mt-4">Forgot your password ?</h3>
          <v-btn rounded color="light-blue accent-3" @click="signin" dark
            >SIGN IN</v-btn
          >
          <h3 class="text-center mt-4">Would you like to register?</h3>
          <v-btn rounded color="light-blue accent-3" @click="signup" class="my-3" dark
            >SIGN UP</v-btn
          >
        </v-card>
      </v-flex>
      <v-flex md4> </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
// import * as Vue from 'vue' // in Vue 3
import axios from "axios";
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["header-name"] = "value";
export default {
  data: () => ({
    loginEmail: "",
    errormsg: "",
    loginPassword: "",
    step: 1,
    login: {
      email: null,
      password: null,
    },
  }),
  computed: mapState({
    userId: (state) => state.account.userId,
  }),
  props: {
    source: String,
  },
  methods: {
    signin() {
      let that = this;
      // this.$router.push({name: 'Dashboard'})
      console.log("Login", this.step, this.loginEmail, this.loginPassword);
      this.login.email = this.loginEmail;
      this.login.password = this.loginPassword;
      console.log(
        "Login login",
        this.login,
        this.login.email,
        this.login.password
      );
      axios
        .post("http://localhost:5001/login", this.login, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
        })
        .then(function (response) {
          console.log("Login Posts", response);
          // redirect()
          that.step = "self.step + 1";
          console.log("STEP", response.data.flag);
          if (response.data.flag == 1) {
            that.$store.commit("login", that.login.email);
            that.$router.push({ path: "/dashboard" });
          } else {
            that.errormsg = "Wrong Password Or Username";
          }
        });
    },
        signup() {
          this.$router.push('/register')
        }
  },
};
</script>