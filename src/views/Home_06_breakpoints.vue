<template>
  <div>
    <h1 class="subheading grey--text">Breakpoint Test {{ imageHeight }}</h1>
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            1
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            2
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="12">
          <v-card class="pa-2" outlined tile>
            3
          </v-card>
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12">
          <v-card class="pa-2" outlined tile>
            4
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-2" justify="start">
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            1
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            2
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="12">
          <v-card class="pa-2" outlined tile>
            3
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-2" justify="center">
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            1
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            2
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="12">
          <v-card class="pa-2" outlined tile>
            3
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-2" justify="end">
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            1
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            2
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="12">
          <v-card class="pa-2" outlined tile>
            3
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-2" justify="space-around">
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            1
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            2
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="12">
          <v-card class="pa-2" outlined tile>
            3
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-2" justify="space-between">
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            1
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="6">
          <v-card class="pa-2" outlined tile>
            2
          </v-card>
        </v-col>
        <v-col cols="12" lg="2" md="4" sm="12">
          <v-card class="pa-2" outlined tile>
            3
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col cols="12" lg="6" md="6" sm="12">
            <v-card class="pa-2" outlined tile>
              <div class="caption grey--text">Project title</div>
              <div>Create a new website</div>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2" md="2" sm="4">
            <v-card class="pa-2" outlined tile>
              <div class="caption grey--text">Person</div>
              <div>The Net Ninja</div>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2" md="2" sm="4">
            <v-card class="pa-2" outlined tile>
              <div class="caption grey--text">Due by</div>
              <div>1st Jan 2019</div>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2" md="2" sm="4">
            <v-card class="pa-2" outlined tile>
              <div class="caption grey--text">Status</div>
              <div>ongoing</div>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},

  data: () => ({}),

  mounted() {
    console.log(this.$vuetify.breakpoint);
  },

  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "220px - " + this.$vuetify.breakpoint.name;
        case "sm":
          return "400px - " + this.$vuetify.breakpoint.name;
        case "md":
          return "500px - " + this.$vuetify.breakpoint.name;
        case "lg":
          return "600px - " + this.$vuetify.breakpoint.name;
        case "xl":
          return "800px - " + this.$vuetify.breakpoint.name;
        default:
          return this.$vuetify.breakpoint.name;
      }
    },
  },
};
</script>

<style></style>
