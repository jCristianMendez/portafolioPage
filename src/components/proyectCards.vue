<template>
  <div>
    <p class="black--text display-3 text-center mt-10">
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
                    class="d-flex transition-fast-in-fast-out accent v-card--reveal display-3 white--text"
                    style="height: 100%"
                  >
                    Descripcion
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="pt-6" style="position: relative">
                <h3 class="display-1 font-weight-light mb-2" style="color: #ff6b7e">
                  {{ proyecto.title }}
                </h3>
                <v-row align="center" justify="center" class="ma-0">
                  <v-icon
                    class="ml-2"
                    color="primary"
                    @click="redirect(proyecto.url)"
                    >mdi-open-in-new</v-icon
                  >
                  <v-icon
                    class="ml-2"
                    color="primary"
                    v-if="proyecto.gitUrl != 'none'"
                    >mdi-github</v-icon
                  >
                </v-row>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-else>
      <v-row>
        <v-col cols="12" md="4">
          <v-skeleton-loader
            v-bind="attrs"
            type="card-avatar, article, actions"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="date-picker"
          ></v-skeleton-loader>
        </v-col>

        <v-col cols="12" md="4">
          <v-skeleton-loader
            v-bind="attrs"
            type="article, actions"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="table-heading, list-item-two-line, image, table-tfoot"
          ></v-skeleton-loader>
        </v-col>

        <v-col cols="12" md="4">
          <v-skeleton-loader
            v-bind="attrs"
            type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions"
          ></v-skeleton-loader>

          <v-skeleton-loader
            v-bind="attrs"
            type="list-item-avatar-three-line, image, article"
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
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>