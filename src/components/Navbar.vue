<template>
  <nav>
    <!-- <v-toolbar flat>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar> -->
    <v-app-bar>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on" color="grey"
            ><v-icon small left>expand_more</v-icon><span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-row justify="center" class="mt-5">
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-row>
      <v-row justify="center" class="mt-5">
        <div><h1 class="white--text">tazz009</h1></div>
      </v-row>
      <v-row justify="center" class="mt-5">
        <Popup />
      </v-row>
      <v-list class="mt-5">
        <v-list-item-group>
          <v-list-item
            v-model="item"
            v-for="(link, i) in links"
            :key="i"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon class="white--text" v-text="link.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="white--text"
                v-text="link.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";

export default {
  name: "Navbar",
  components: { Popup },

  data: () => ({
    drawer: false,
    item: "",
    links: [
      { icon: "dashboard", text: "Dashboard", route: "/" },
      { icon: "folder", text: "My Projects", route: "/projects" },
      { icon: "person", text: "Team", route: "/team" },
      { icon: "close_fullscreen", text: "Breakpoints", route: "/breakpoints" }
    ]
  })
};
</script>
