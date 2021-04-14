<template>
  <div style="background-color: #EAE4E3">
    <p class="black--text subtitlesSize text-center pt-10 pb-10">
      Download my curriculum vitae
    </p>
    <v-row align="center" justify="center" class="ma-0">
      <v-col cols="auto">
        <v-btn
          color="accent"
          block
          rounded
          @click="redirect('https://www.jcmm.icu/cv/curriculumJCMM.pdf')"
          ><v-icon> mdi-download </v-icon>English CV</v-btn
        >
      </v-col>
      <v-col cols="auto">
        <v-btn
          color="accent"
          block
          rounded
          @click="redirect('https://www.jcmm.icu/cv/JCMMCVenglish.pdf')"
          ><v-icon> mdi-download </v-icon>Español CV</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    redirect(url) {
      this.$store.dispatch("redirect", url);
    },
  },
};
</script>