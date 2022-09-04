<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <HomeVue/>
    </v-main>
    <!-- <v-content>
      <HomeVue/>
    </v-content> -->
  </v-app>
</template>

<script>

import HomeVue from './components/HomeVue'


export default {
  name: "App",

  components: {
    
    HomeVue
},

  data: () => ({
    //
  }),
};
</script>
