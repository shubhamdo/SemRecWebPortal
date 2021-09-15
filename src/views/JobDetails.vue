<template>
  <v-layout row wrap :class="`pa-3 pb-1 job`">
    <Navbar />
    <v-flex xs6 sm4 md7 class="pa-3">
      <v-card class="xs6 sm4 md5">
        <v-card-title>
          <h3>Position Details</h3>
        </v-card-title>
        <v-layout wrap :class="`pa-3 pb-1 job ${jobs.status}`">
          <v-flex xs6 sm4 md3>
            <div class="caption grey--text">Job Title</div>
            <div>{{ jobs.header_jobTitle }}</div>
            
          </v-flex>
          <v-flex xs6 sm4 md3>
            <div class="caption grey--text">Company</div>
            <div>{{ jobs.map_employerName }}</div>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <div class="caption grey--text">Location</div>
            <div>{{ jobs.header_location }}</div>
          </v-flex>
        </v-layout>
        <v-layout wrap :class="`pa-3 pb-1 job ${jobs.status}`">
          <v-flex xs6 sm4 md3>
            <div class="caption grey--text">Sector</div>
            <div>{{ jobs.overview_sector }}</div>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <div class="caption grey--text">Posted On</div>
            <div>{{ jobs.overview_industry }}</div>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <!-- <div class="caption grey--text">Posted On</div> -->
            <!-- <div>{{ jobs.postedon }}</div> -->
            <v-btn flat @click="submit" class="error">{{this.apply}}</v-btn>
          </v-flex>

        </v-layout>
        <!-- https://github.com/vuetifyjs/vuetify/issues/6275 -->
<v-layout wrap :class="`pr-3 pl-3 pb-3 `">

  <h3>Similarity Rating</h3>
  </v-layout>
<v-layout wrap :class="`pr-3 pl-3 pb-3 `">
  <span>Please rate the job similarity to help improve our Recommendations</span>
  </v-layout>
<v-layout wrap :class="`pr-3 pl-3 pb-3 `">
  
    <v-rating
  empty-icon="staroutline"
  full-icon="star"
  half-icon="starhalf"
  length="5"
  half-increments
  size="20"
  value="0"
  background-color="grey"
  color="cyan lighten-2"
></v-rating>

  </v-layout>
        <v-layout wrap :class="`pr-3 pl-3 pb-3 jobs ${jobs.status}`">
          <v-flex xs12 sm12 md12>
            <h3 class="black--text pt-4">Job Description</h3>
            <div class="black--text my-2">
              {{ jobs.job_description }} 
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-flex>
    <v-flex xs6 sm4 md5 class="pa-3">
              <v-card-title>
          <h3>Similar Jobs</h3>
        </v-card-title>

      <v-card class="xs6 sm4 md5 my-2" v-for="job in similarJobs" :key="job.job_listingId_long">
        <v-layout wrap :class="`pa-3 pb-1 job ${job.status}`">
          <v-flex xs6 sm4 md6>
            <div class="caption grey--text">Job Title</div>
            <!-- <div>{{ job.header_jobTitle }}</div> -->
            <router-link :to="{ name: 'jobdetails' , params: {id: job.job_listingId_long}}">{{ job.header_jobTitle }}</router-link>
          </v-flex>
          <v-flex xs6 sm4 md6>
            <div class="caption grey--text">Company</div>
            <div>{{ job.map_employerName }}</div>
          </v-flex>

        </v-layout>
        <v-layout wrap :class="`pa-3 pb-1 job ${job.status}`">
          <v-flex xs6 sm4 md3>
            <div class="caption grey--text">Location</div>
            <div>{{ job.header_location }}</div>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <div class="caption grey--text">Sector</div>
            <div>{{ job.overview_sector }}</div>
          </v-flex>
          <v-flex xs6 sm4 md3>
            <div class="caption grey--text">Posted On</div>
            <div>{{ job.overview_industry }}</div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import format from "date-fns/format";
import axios from "axios";
import HeartRating from 'vue-rate-it';
import Navbar from '../components/Navbar';
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["header-name"] = "value";
import { mapGetters } from "vuex";
export default {
  components: { Navbar },
  data() {
    return {
      jobId: "",
      apply: "Apply Now",
      jobs: {
        title: "ETL/Database Developer",
        company: "HSBC Global Technology (HSBC GLT)",
        location: "India",
        postedon: "1st Jan 2019",
        status: "Entry",
        sector: "IT",
        companysize: "50 - 100 persons",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          job_listingId_long: ""
      },
      reqdata: {
        job: this.jobs, 
        userId: this.userID
        },
      similarJobs: "",
    };
  },
  watch: {
    "$route.params.id"(val) {
      // call the method which loads your initial state
      let that = this;
      console.log("ID changed:",this.$route.params.id)
      this.jobId = this.$route.params.id;
      this.apply="Apply Now";
      this.getJobDetails(this.jobId, that);
      this.getSimilarJobs(this.jobId, that);
    },
},
  methods: {
    submit() {
      console.log(this.jobs);
      console.log(this.userID);
      let that = this;
      axios
      .post("http://localhost:5001/applyjob", {job: this.jobs, userId: this.userID}, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
      })
      .then(function (response) {
        console.log("Response Job Details", response.data);
        that.apply = "Applied"
      });

    },
    getJobDetails(jobId, that){
      axios
      .get("http://localhost:5001/jobdetails?jobId="+jobId, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
      })
      .then(function (response) {
        console.log("Response Job Details", response.data.data[0]);
        that.jobs = response.data.data[0]
      });
    },
    getSimilarJobs(jobId, that){
      axios
      .post("http://localhost:5001/srec", {"jobId":jobId}, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
      })
      .then(function (response) {
        console.log("Response Job Details", response.data.data);
        that.similarJobs = response.data.data
      });

    }
  },
  computed: {
    formattedDate() {
      console.log(this.due);
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    },
    ...mapGetters({
      userID: "getMyUserId",
    }),
  },
  created(){
    this.apply="Apply Now";
    this.jobId = this.$route.params.id
    console.log("Job Id:",this.$route.params.id)
    let that = this;

    this.getJobDetails(this.jobId, that);
    this.getSimilarJobs(this.jobId, that);

  }
};
</script>
