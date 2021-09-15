<template>
  <!-- https://www.youtube.com/watch?v=8lTCBtMYcig -->
  <div class="dashboard">
    <Navbar />
    <h1 class="subheading grey--text">Your Job Feed</h1>

    <v-container class="my-5">
      <v-layout row justify-start class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase">By Job Title</span>
          </v-btn>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('company')" slot="activator">
            <v-icon small left>person</v-icon>
            <span class="caption text-lowercase">By Company</span>
          </v-btn>
          <span>Sort by project author</span>
        </v-tooltip>
      </v-layout>
      
      <v-card flat v-for="job in jobs" class="my-2" :key="job.job_listingId_long">
        <v-layout row wrap :class="`pa-3 job ${job.status}`">
          <v-flex xs12 md2>
            <div class="caption grey--text">Job Title</div>
            <!-- <div>{{ job.title }}</div> -->
            <router-link :to="{ name: 'jobdetails' , params: {id: job.job_listingId_long}}">{{ job.header_jobTitle }}</router-link>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Company</div>
            <div>{{ job.map_employerName }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Location</div>
            <div>{{ job.map_location }}</div>
          </v-flex>
          <v-flex xs6 sm4 md1>
            <div class="caption grey--text">Sector</div>
            <div>{{ job.overview_sector }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Overview Industry</div>
            <div>{{ job.overview_industry }}</div>
          </v-flex>
            <v-flex xs6 sm4 md1>
            <div class="caption grey--text">Company Size</div>
            <div>{{ job.overview_size }}</div>
          </v-flex>
          <v-flex xs2 sm4 md1> 
            <div class="center">
              <v-chip small :class="`success white--text my-2 caption`">{{ job.overview_sector}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
              <v-layout row wrap :class="`pa-3`">
          <v-flex xs2 sm4 md1> 
          <v-btn rounded color="light-blue accent-3" @click="previous" class="my-3" dark
            >PREVIOUS</v-btn
          >
          </v-flex>
          <v-flex xs2 sm4 md10> 
          </v-flex>
          <v-flex xs2 sm4 md1> 
          <v-btn rounded color="light-blue accent-3" @click="next" class="my-3" dark
            >NEXT</v-btn
          >
          </v-flex>
          
          </v-layout>
    </v-container>
   
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import { mapGetters } from "vuex";
import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["header-name"] = "value";

export default {
  components: { Navbar },
  data() {
    return {
      page: 0,
      currentList: "",
      jobRec: "",
      jobs: [],
      jobsArr : [[
        { id: 1,title: 'ETL/Database Developer', company: 'HSBC Global Technology (HSBC GLT)', location: 'India',postedon: '1st Jan 2019', status: 'Entry', sector:'IT', companysize:'50 - 100 persons'},
      ],
      [  
        { id: 2, title: 'Program Manager', company: 'Accenture', location: 'India',postedon: '10th Jan 2019', status: 'Mid-Senior', sector:'IT', companysize:'50 - 100 persons'}
      ],
      [ 
         { id: 3, title: 'Big Data Analyst', company: 'SmartRecruiters', location: 'India',postedon: '20th Dec 2018', status: 'Senior', sector:'IT', companysize:'50 - 100 persons'}
      ],
      [
        { id: 4, title: 'Partner Success Manager', company: 'Accenture', location: 'India',postedon: '20th Oct 2018', status: 'Entry', sector:'IT', companysize:'50 - 100 persons'}
      ]
      ]
    }
  },
  computed: {
    ...mapGetters({
      userID: "getMyUserId",
    }),
  },
  methods: {
    sortBy(prop) {
      this.jobs.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    },
    next(){
      this.page = this.page + 1;
      // this.jobs = this.jobsArr[this.page];
      this.currentList = this.jobRec[this.page]
      console.log("Current List", this.currentList)
      this.getjobdetails(this.currentList)
    },
    previous(){
      this.page = this.page - 1;
      // this.jobs = this.jobsArr[this.page];
      this.currentList = this.jobRec[this.page]
      console.log("Current List", this.currentList)
      this.getjobdetails(this.currentList)
    },
    getjobdetails(jobList){
      let that = this;
      axios
      .post("http://localhost:5001/crecdetails",jobList, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
      })
      .then(function (response) {
        console.log("Response Cred Details", response.data.data);
        that.jobs = response.data.data
      });
    
    }
  },
  created(){
    // GET DATA FROM API for 1000 Recommendations
    // this.jobs = this.jobsArr[this.page]
    let that = this
    // GET PROFILE ROLES
    axios
      .get("http://localhost:5001/crec?email=" + this.userID, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        },
      })
      .then(function (response) {
        console.log("Response from GET Roles", response.data);
        // Has the (list of list) with all 1000 records
        that.jobRec = response.data.data
        // Take only 1st jobarray and pass to currentList
        that.currentList = response.data.data[0]
        console.log("Current List", that.currentList)
        that.getjobdetails(that.currentList)

      });
      // console.log("Current List",this.currentList)
  }
}
</script>

<style>

.job.complete{
  border-left: 4px solid #3cd1c2;
}
.job.ongoing{
  border-left: 4px solid #ffaa2c;
}
.job.overdue{
  border-left: 4px solid #f83e70;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: #ffaa2c;
}
.v-chip.overdue{
  background: #f83e70;
}

.v-chip.Senior{
  background: #ffaa2c;
}
.v-chip.Mid-Senior{
  background: #3cd1c2;
}
.v-chip.Entry{
  background: #f83e70;
}



</style>
