<template>
  <div style="background-color: #37c9dfCC">
    <p class="black--text subtitlesSize text-center pt-10 pb-10">
      Contact in progress.....
    </p>
    <v-row align="center" justify="center" class="ma-0">
      <v-col cols="12" md="11">
        <v-text-field color="accent" label="Name"></v-text-field>
      </v-col>
      <v-col cols="12"  md="11">
        <v-text-field color="accent" label="Phone" hint="Optional" v-mask="'(###) ###-####'" v-model="phone" persistent-hint></v-text-field>
      </v-col>
      <v-col cols="12"  md="11">
        <v-text-field color="accent" label="Email"></v-text-field>
      </v-col>
      <v-col cols="12"  md="11">
        <v-text-field color="accent" label="Message"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn block rounded class="accent" @click="sendEmail"><v-icon right dark class="mr-1"> mdi-send </v-icon>send</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    phone: '',
  }),
  methods:{
    sendEmail(){
        this.$store.dispatch("toastError", 'Correo aun no implementado, en el footer tienes mis redes sociales o email');
    },
  }
}
</script>