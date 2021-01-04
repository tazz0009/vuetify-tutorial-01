<template>
  <div class="home">
    <h1>Homepage</h1>
    <v-btn class="pink white--text">click me</v-btn>
    <v-btn dark color="pink">click me</v-btn>
    <v-btn color="pink">click me</v-btn>
    <v-btn depressed color="pink">click me</v-btn>

    <v-btn class="pink white--text">
      <v-icon>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>
    <v-btn class="pink white--text">
      <span>email me</span>
      <v-icon right>mdi-voicemail</v-icon>
    </v-btn>
    <v-btn class="pink white--text">
      <span>email me</span>
      <v-icon right small>mdi-voicemail</v-icon>
    </v-btn>
    <v-btn class="pink white--text">
      <span>email me</span>
      <v-icon right large>mdi-voicemail</v-icon>
    </v-btn>
    <v-btn fab>
      <v-icon >mdi-star_rate</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
