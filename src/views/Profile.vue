<template>
  <div class="profile">
    <h1 class="subheading grey--text">Profile</h1>

    <v-container class="my-1">
      <v-card flat v-for="user in profile" :key="user.title">
        <v-layout row wrap :class="`pa-3 user ${user.status}`">
          <v-flex xs12 md3 v-for="person in profile" :key="person.name">
            <v-card flat class="text-xs-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="120" class="grey lighten-2">
                  <img :src="person.avatar" />
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{ user.name }}</div>
                <div class="grey--text">{{ user.role }}</div>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs6 sm4 md9>
            <v-layout row wrap><div class="black--text pt-4">Profile Summary</div>
            <v-icon small left class="pa-4">edit</v-icon></v-layout>
            
            <div class="grey--text">
              {{ user.summary }}
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

      <v-container class="my-1">
        <v-layout row justify-start class="mb-3">
          <v-tooltip top>
            <v-btn
              small
              flat
              color="grey"
              @click="sortBy('title')"
              slot="activator"
            >
              <v-icon small left>folder</v-icon>
              <span class="caption text-lowercase">By Job Title</span>
            </v-btn>
            <span>Sort by project name</span>
          </v-tooltip>
          <v-tooltip top>
            <v-btn
              small
              flat
              color="grey"
              @click="sortBy('startdate')"
              slot="activator"
            >
              <v-icon small left>person</v-icon>
              <span class="caption text-lowercase">By Company</span>
            </v-btn>
            <span>Sort by project author</span>
          </v-tooltip>
        </v-layout>

        <v-card class="my-2" flat v-for="job in jobs" :key="job.title">
          <!-- Position Tile / Company / Location -->
          <v-layout row wrap :class="`pa-3 job ${job.status}`">
            <v-flex xs12 md2>
              <div class="caption grey--text">Postion Title</div>
              <div>{{ job.title }}</div>
            </v-flex>
            <v-flex xs6 sm4 md3>
              <div class="caption grey--text">Company</div>
              <div>{{ job.company }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Location</div>
              <div>{{ job.location }}</div>
            </v-flex>
          </v-layout>
          <!-- Row 2 Sector / Start Date / Location -->
          <v-layout wrap :class="`pa-3 pb-1 job ${job.status}`">
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Sector</div>
              <div>{{ job.sector }}</div>
            </v-flex>
            <v-flex xs6 sm4 md3>
              <div class="caption grey--text">Start Date</div>
              <div>{{ job.startdate }}</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">End Date</div>
              <div>{{ job.enddate }}</div>
            </v-flex>
          </v-layout>
          <v-layout wrap :class="`pr-3 pl-3 pb-3 job ${job.status}`">
            <v-flex xs6 sm4 md12>
              <div class="black--text pt-4">Profile Summary</div>
              <div class="grey--text my-2">{{ job.description }}</div>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: [
        {
          name: "Shubham Shinde",
          role: "Data Engineer",
          avatar: "/avatar-2.png",
          summary:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
      jobs: [
        {
          title: "ETL/Database Developer",
          company: "HSBC Global Technology (HSBC GLT)",
          location: "India",
          startdate: "1st Jan 2019",
          status: "Entry",
          sector: "IT",
          enddate: "50 - 100 persons",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          title: "Program Manager",
          company: "Accenture",
          location: "India",
          startdate: "10th Jan 2019",
          status: "Mid-Senior",
          sector: "IT",
          enddate: "50 - 100 persons",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          title: "Big Data Analyst",
          company: "SmartRecruiters",
          location: "India",
          startdate: "20th Dec 2018",
          status: "Senior",
          sector: "IT",
          enddate: "50 - 100 persons",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          title: "Partner Success Manager",
          company: "Accenture",
          location: "India",
          startdate: "20th Oct 2018",
          status: "Entry",
          sector: "IT",
          enddate: "50 - 100 persons",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.jobs.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>