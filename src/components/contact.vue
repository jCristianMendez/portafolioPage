<template>
  <div style="background-color: #37c9dfCC">
    <p class="black--text subtitlesSize text-center pt-10 pb-10">
      Contact
    </p>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="11">
          <v-text-field color="accent" :rules="[rules.required]" label="Name" v-model="contacto.nombre"></v-text-field>
        </v-col>
        <v-col cols="12"  md="11">
          <v-text-field color="accent" :rules="[rules.phone]" label="Phone" hint="Optional" v-mask="'(###) ###-####'" v-model="contacto.phone" persistent-hint></v-text-field>
        </v-col>
        <v-col cols="12"  md="11">
          <v-text-field color="accent" :rules="[rules.required, rules.email]" label="Email" v-model="contacto.email"></v-text-field>
        </v-col>
        <v-col cols="12"  md="11">
          <v-text-field color="accent" :rules="[rules.required]" label="Message" v-model="contacto.message"></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-btn block rounded class="accent" @click="sendEmail"><v-icon right dark class="mr-1"> mdi-send </v-icon>send</v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-dialog
      v-model="dialogLoading"
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Sending contact please wait...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    valid:  false,
    contacto:{
      nombre: '',
      phone: '',
      email: '',
      message: '',
    },
    rules: {
        required: v => !!v || "Required field",
        email: v => /.+@.+\..+/.test(v) || "Email must be valid",
        phone: (v) => (v=='' || v.length == 14) || 'Phone most have at least 10 digits',
      },
  }),
  computed: {
    ...mapGetters(["dialogLoading"]),
  },
  methods:{
    sendEmail(){
      if(this.$refs.form.validate()){
        this.$store.dispatch("mandarCorreo", this.contacto);
      }else{
        this.$store.dispatch("toastError", 'You most fill the required fields');
      }
    },
  }
}
</script>