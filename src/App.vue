<template>
  <v-app class="grey leading-4">
    <Navbar/>
    <v-main class="mx-4 mt-4">
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
