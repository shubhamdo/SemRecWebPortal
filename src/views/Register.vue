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

          <h4 class="text-center mt-4">Ensure your E-mail for Registration</h4>
                        <v-form>
                          <v-text-field
                            v-model="regName"
                            label="Name"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="light-blue accent-3"
                          />
                          <v-text-field
                            v-model="regEmail"
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="light-blue accent-3"
                          />

                          <v-text-field
                            v-model="regPassword"
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="light-blue accent-3"
                          />
                        </v-form>
                        <h5 class="text-center mt-4 red--text">{{ errormsg }}</h5>
          <v-btn
            rounded
            color="light-blue accent-3"
            class=""
            @click="signup"
            dark
            >SIGN UP</v-btn
          >

          <h4 class="text-center mt-4">Already registered?</h4>
        <div class="my-3"></div>
          <v-btn rounded color="light-blue accent-3" @click="signin" dark
            >SIGN IN</v-btn
          >
        </v-card>
      </v-flex>
      <v-flex md4> </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import * as Vue from 'vue' // in Vue 3
import axios from "axios";
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["header-name"] = "value";
export default {
  data: () => ({
    regName: "",
    regEmail: "",
    regPassword: "",
    errormsg:"",
    step: 1,
    register: {
      name: null,
      email: null,
      password: null,
    },
  }),
  props: {
    source: String,
  },
  methods: {
    signin() {
      this.$router.push('/')
      // Method for pushing the data to the Database
    },
    signup() {
      let that = this;
      console.log(
        "Registration",
        this.step,
        this.regName,
        this.regEmail,
        this.regPassword
      );
      this.register.name = this.regName;
      this.register.email = this.regEmail;
      this.register.password = this.regPassword;

      axios
        .post("http://localhost:5001/createuser", this.register, {
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
          // this.$router.push({ name: "about" });        
          if (response.data.flag == 1) {
            that.$store.commit("login", that.register.email);
            that.$router.push({ path: "/dashboard" });
          } else if (response.data.flag == -1){
            that.errormsg = "You are already a user please sign in!";
          }

        });

      // Method for pushing the data to the Database
    },
  },
};
</script>