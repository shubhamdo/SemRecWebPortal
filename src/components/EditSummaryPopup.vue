<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator"><v-icon small>edit</v-icon></v-btn>
    <v-card>
      <v-card-title>
        <h2>Summary</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            v-model="name"
            label="Name"
            prepend-icon="person"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            v-model="title"
            label="Current Role"
            prepend-icon="person"
            :rules="inputRules"
          ></v-text-field>

          <v-textarea
            v-model="content"
            label="Update Summary"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>
          <v-spacer></v-spacer>

          <v-btn flat @click="submit" class="success mx-0 mt-3">Done</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import { mapGetters } from "vuex";
import axios from "axios";
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["header-name"] = "value";

export default {
  data() {
    return {
      name: "",
      email: "",
      title: "",
      content: "",
      due: null,
      menu: false,
      prof: {
        title: null,
        name: null,
        email: null,
        summary: null,
      },
      inputRules: [
        (v) => !!v || "This field is required",
        (v) => v.length >= 3 || "Minimum length is 3 characters",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.prof.email = this.userID;
        this.prof.title = this.title;
        this.prof.summary = this.content;
        this.prof.name = this.name;

        console.log(this.title, this.content, this.prof.email, this.prof);
        let that = this;
        axios
          .post("http://localhost:5001/profilesummary", this.prof, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
            },
          })
          .then(function (response) {
            console.log("Response Load Summary", response);
            // that.$router.push({ path: "/adduser" });
            // that.dialog = true
          });
      }
    },
  },
  computed: {
    ...mapGetters({
      userID: "getMyUserId",
    }),
    formattedDate() {
      console.log(this.due);
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    },
  },
};
</script>
