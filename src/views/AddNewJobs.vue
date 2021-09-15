<template>
  <v-container bg fill-height grid-list-md text-xs-center>
    
    <v-layout row wrap align-center>
      <v-flex md1> </v-flex>
      <v-flex>
        <v-card class="pa-5">
          
          CREATE A NEW 
          <h2>
          <span class="text-center light-blue--text text--accent-3"
            >JOB LISTING</span
          ></h2>
          <h4 class="text-center mt-4">Please enter the following details</h4>
          <v-form>
            <v-text-field
              v-model="jobTitle"
              label="Job Title"
              prepend-icon="person"
              type="text"
              color="light-blue accent-3"
            />

            <v-text-field
              v-model="employerName"
              label="Employer Name"
              prepend-icon="person"
              type="text"
              color="light-blue accent-3"
            />

        	<v-text-field
              v-model="location"
              label="location"
              prepend-icon="pin"
              type="text"
              color="light-blue accent-3"
            />

            <v-text-field
              v-model="sector"
              label="Sector"
              prepend-icon="business"
              type="text"
              color="light-blue accent-3"
            />

            <v-text-field
              v-model="industry"
              label="Industry"
              prepend-icon="business"
              type="text"
              color="light-blue accent-3"
            />

        <v-textarea
              v-model="jobDescription"
              label="Job Description"
              prepend-icon="edit"
              type="text"
              color="light-blue accent-3"
          ></v-textarea>

          </v-form>
          
          <v-btn rounded color="light-blue accent-3" @click="signin" dark
            >Submit</v-btn
          >
        </v-card>
      </v-flex>
      <v-flex md1> </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Navbar from '../components/Navbar';
import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["header-name"] = "value";

export default {
components: { Navbar },
data: () => ({
    step: 1,
            jobTitle: null,
        employerName: null,
        location: null,
        sector: null,
        jobDescription: null,
        industry: null,
    newJob: {
        jobTitle: null,
        employerName: null,
        location: null,
        sector: null,
        jobDescription: null,
        industry: null
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
    this.newJob.jobTitle= this.jobTitle,
    this.newJob.employerName= this.employerName,
    this.newJob.location= this.location,
    this.newJob.sector=this.sector,
    this.newJob.jobDescription=this.jobDescription,
    this.newJob.industry=this.industry
      // this.$router.push({name: 'Dashboard'})
      console.log("Job", this.jobTitle,this.employerName,this.location,this.sector,this.jobDescription,this.industry);

      axios
        .post("http://localhost:5001/addjob", this.newJob, {
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
          that.$router.push('/jobdetails/'+response.data.id)
        });
    },
  },
};
</script>