<template>
  <div>
    <p class="black--text subtitlesSize text-center mt-10">
      Proyects and Colaborations
    </p>
    <v-container v-if="!loading">
      <v-row align="center" justify="center" class="ma-0">
        <v-col
          cols="12"
          md="4"
          v-for="(proyecto, index) in proyectos"
          v-bind:key="index"
        >
          <v-hover v-slot="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" max-width="500">
              <v-img
                :src="proyecto.urlImage"
                lazy-src="https://jcmm.icu/images/loading.jpg"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out accent v-card--reveal display-3 white--text subtitle-1"
                    style="height: 100%"
                  >
                    {{ proyecto.descripcion }}
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative">
                <h3 class="display-1 font-weight-light mb-2" style="color: #ff6b7e">
                  {{ proyecto.title }}
                </h3>
                <v-row align="center" justify="center" class="ma-0">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        large
                        class="ml-2"
                        color="primary"
                        @click="redirect(proyecto.url)"
                        v-bind="attrs"
                        v-on="on"
                        >mdi-open-in-new</v-icon
                      >
                    </template>
                    <span>Go to {{proyecto.title}}</span>
                  </v-tooltip>

                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        large
                        class="ml-2"
                        color="primary"
                        @click="redirect(proyecto.gitUrl)"
                        v-if="proyecto.gitUrl != 'none'"
                        v-bind="attrs"
                        v-on="on"
                        >mdi-github</v-icon
                      >
                    </template>
                    <span>Go to code</span>
                  </v-tooltip>
                  
                  
                </v-row>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-else>
      <v-row>
        <v-col cols="12" md="4" v-for="n in 6" :key="n">
          <v-skeleton-loader
            v-bind="attrs"
            type="card, card-heading, actions"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("obtenerProyectos");
  },
  methods: {
    redirect(url) {
      this.$store.dispatch("redirect", url);
    },
  },
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2,
    },
  }),
  computed: {
    ...mapGetters(["proyectos", "loading"]),
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>