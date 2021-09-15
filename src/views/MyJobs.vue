<template>
  <div class="jobs">
  <Navbar />
    <h1 class="subheading grey--text">My Jobs</h1>

    <v-container class="my-5">
      <v-expansion-panel>
        <v-expansion-panel-content v-for="job in myjobs" :key="job.job_listingId_long">
          <div slot="header" class="py-1">{{ job.header_jobTitle }}</div>
          <v-card>
            <v-card-text class="px-4 grey--text">
              <!-- <div class="font-weight-bold">Due by {{ job.due }}</div> -->
              <div>{{ job.job_description }}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
    
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["header-name"] = "value";
import { mapGetters } from "vuex";
export default {
  components: { Navbar },
  data() {
    return {
      user: "",
      jobs: [
        { title: 'ETL/Database Developer', person: 'HSBC Global Technology (HSBC GLT)', due: '1st Jan 2019', status: 'Entry', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Program Manager', person: 'Accenture', due: '10th Jan 2019', status: 'Mid-Senior', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Big Data Analyst', person: 'SmartRecruiters', due: '20th Dec 2018', status: 'Senior', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Partner Success Manager', person: 'Accenture', due: '20th Oct 2018', status: 'Entry', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  computed: {
    myjobs() {
      return this.jobs;
    },
    ...mapGetters({
      userID: "getMyUserId",
    }),
  },
  methods: {
    appJobs(){
      let that = this;
          axios
      .get("http://localhost:5001/appliedjobs?email="+this.user, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
      })
      .then(function (response) {
        console.log("Response Job Details", response.data.data);
        that.jobs = response.data.data;
      });
    },
  },
  created(){
    this.user = this.userID
    console.log(this.userID)
      this.appJobs()
    }
}
</script>
