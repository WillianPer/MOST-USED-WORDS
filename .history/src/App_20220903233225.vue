<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <HomeVue/>
    </v-main>
  </v-app>
</template>

<script>

import HomeVue from './components/HomeVue.vue'
import HomeVue from './components/HomeVue.vue'

export default {
  name: "App",

  components: {
    // eslint-disable-next-line vue/no-unused-components
    HomeVue,
    HomeVue
},

  data: () => ({
    //
  }),
};
</script>
