<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="info">Add Role</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Role</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            v-model="title"
            label="Job Title"
            prepend-icon="person"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            v-model="company"
            label="Company"
            prepend-icon="business"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            v-model="location"
            label="Location"
            prepend-icon="room"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            v-model="sector"
            label="Sector"
            prepend-icon="feedback"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            v-model="startdate"
            label="Start Date"
            prepend-icon="date"
            :rules="inputRules"
          ></v-text-field>
          <v-text-field
            v-model="enddate"
            label="End Date"
            prepend-icon="date"
            :rules="inputRules"
          ></v-text-field>

          <!-- <v-menu v-model="menu1" :close-on-content-click="false">
            <v-text-field
              slot="activator"
              :rules="inputRules"
              :value="formattedDate"
              clearable
              v-model="startdate"
              label="Start date"
              prepend-icon="date_range"
            >
            </v-text-field>
            <v-date-picker
              v-model="start"
              @change="menu1 = false"
            ></v-date-picker>
          </v-menu>

          <v-menu v-model="menu2" :close-on-content-click="false">
            <v-text-field
              v-model="enddate"
              slot="activator"
              :rules="inputRules"
              :value="formattedDate"
              clearable
              label="End date"
              prepend-icon="date_range"
            >
            </v-text-field>
            <v-date-picker v-model="end" @change="menu2 = false"></v-date-picker>
          </v-menu> -->
          <v-textarea
            v-model="description"
            label="Description"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>
          <v-spacer></v-spacer>

          <v-btn flat @click="submit" class="success mx-0 mt-3">Add Role</v-btn>
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
      menu1: false,
      menu2: false,
      title: "",
      sector: "",
      email: "",
      company: "",
      location: "",
      startdate: "",
      enddate: "",
      description: "",
      role: {
        title: "",
        sector: "",
        email: "",
        company: "",
        location: "",
        startdate: "",
        enddate: "",
        description: "",
      },
      start: null,
      end: null,
      menu: false,
      inputRules: [
        (v) => !!v || "This field is required",
        (v) => v.length >= 3 || "Minimum length is 3 characters",
      ],
    };
  },
  methods: {
    submit() {
        this.email = this.userID,
console.log("Current user is :", this.email),
        this.role.email = this.email,
        this.role.title = this.title,
        this.role.sector = this.sector,
        this.role.company = this.company,
        this.role.location = this.location,
        this.role.startdate = this.startdate,
        this.role.enddate = this.enddate,
        this.role.description = this.description
      console.log("Current user is :", this.role.email),
      console.log("Current user is :", this.userID, this.role);
      let that = this;
            axios
        .post("http://localhost:5001/profileroles", this.role, {
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
          // that.$router.push({ path: "/adduser" });     
          // that.dialog = true
          // #TODO Add Message to UI, Role added refresh page
        });
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
