<template>
  <div>
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <div class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              color="grey lighten-4"
              class="mr-2"
              @click="sortBy('title')"
              :input-value="sortByProp == 'title'"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left samll>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by proect name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              color="grey lighten-4"
              class="mr-2"
              @click="sortBy('person')"
              :input-value="sortByProp == 'person'"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left samll>person</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </div>
      <v-card rounded="false" v-for="project in projects" :key="project.title">
        <v-row no-gutters :class="`pa-3 project ${project.status}`">
          <v-col cols="12" lg="6" md="12" sm="12">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="12" lg="2" md="4" sm="12">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="12" lg="2" md="4" sm="6">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="12" lg="2" md="4" sm="6">
            <div>
              <v-chip
                small
                :input-value="true"
                :class="`${project.status} white--text caption my-2`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},

  data: () => ({
    projects: [
      {
        title: "Design a new website",
        person: "The Net Ninja",
        due: "1st Jan 2019",
        status: "ongoing",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
      {
        title: "Code up the homepage",
        person: "Chun Li",
        due: "10th Jan 2019",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
      {
        title: "Design video thumbnails",
        person: "Ryu",
        due: "20th Dec 2018",
        status: "complete",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
      {
        title: "Create a community forum",
        person: "Gouken",
        due: "20th Oct 2018",
        status: "overdue",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      },
    ],
    sortByProp: "",
  }),

  methods: {
    sortBy(prop) {
      this.sortByProp = prop;
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>
