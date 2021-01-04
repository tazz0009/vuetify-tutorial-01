<template>
  <div>
    <h1 class="subheading grey--text">
      Team
    </h1>

    <v-container class="my-5">
      <v-row justify="start">
        <v-col v-for="person in team" :key="person.name" cols="auto">
          <v-card width="300" class="ma-3">
            <v-responsive class="pt-4">
              image goes here
            </v-responsive>
            <v-card-title v-text="person.name"> </v-card-title>
            <v-card-subtitle v-text="person.role"> </v-card-subtitle>
            <v-card-actions>
              <v-btn text color="grey"><v-icon small left>message</v-icon><span>message</span></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    team: [
      { name: "The Net Ninja", role: "Web developer" },
      { name: "Ryu", role: "Graphic designer" },
      { name: "Chun Li", role: "Web developer" },
      { name: "Gouken", role: "Social media maverick" },
      { name: "Yoshi", role: "Sales guru" }
    ]
  })
};
</script>

<style></style>
