<template>
  <v-app-bar
    app
    class="primary"
    elevate-on-scroll
    scroll-target="#scrolling-techniques-7"
  >
    <v-toolbar-title class="white--text"
      >José Cristian Médez mora</v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon large dark>
          <v-icon @click="$vuetify.goTo('#proyects', options)" v-bind="attrs"
          v-on="on"
            >mdi-briefcase</v-icon
          >
        </v-btn>
      </template>
      <span>Proyects</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon large dark>
          <v-icon  @click="$vuetify.goTo('#contact', options)" v-bind="attrs"
          v-on="on">mdi-card-account-mail</v-icon>
        </v-btn>
      </template>
      <span>Contact</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    options() {
      return {
        duration: 300,
        offset: 0,
        easing: "linear",
      };
    },
  },
};
</script>