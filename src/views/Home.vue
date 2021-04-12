<template>
  <v-app>
    <AppBar></AppBar>

    <v-main id="scrolling-techniques-7">
      <v-img
        style="height: 90vh"
        gradient="rgba(0,0,0,0.1), rgba(0,0,0,0.8)"
        :src="require('@/assets/principal.png')"
      >
        <v-row align="center" justify="start" class="ma-0 top-left">
          <v-col cols="12" class="pa-1">
            <div class="white--text">
              <p class="titulosSize" style="filter: brightness(100%)">
                My name is Cristian.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="auto" class="pa-1">
            <div class="white--text"><p class="titulosSize">I'm a</p></div>
          </v-col>
          <v-col cols="12" md="auto" class="pa-1">
            <div>
              <h1 class="titulosSize" style="color: #6ec1e4">
                Front-end Developer
              </h1>
            </div>
          </v-col>
        </v-row>
      </v-img>

      <proyectCards class="mb-10" id="proyects"></proyectCards>

      <Contact class="pb-10" id="contact"></Contact>
    </v-main>

    <div class="footer-login" style="background-color: rgba(74, 74, 74, 0.7)">
      <v-row align="center" justify="center" class="ma-0">
        <span class="text-center font-weight-medium">
          <strong class="white--text"> Jose Cristian Mendez Mora 2021</strong>
        </span>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              class="ml-2"
              color="white"
              @click="
                redirect('https://www.facebook.com/profile.php?id=1407906105')
              "
              v-bind="attrs"
              v-on="on"
              >mdi-facebook</v-icon
            >
          </template>
          <span>Facebook</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              class="ml-2"
              color="white"
              @click="
                redirect(
                  'https://www.linkedin.com/in/jos%C3%A9-cristian-mendez-mora-8a7783115/'
                )
              "
              v-bind="attrs"
              v-on="on"
              >mdi-linkedin</v-icon
            >
          </template>
          <span>Linkedin</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              class="ml-2"
              color="white"
              @click=""
              onclick="parent.location='mailto:cristian8553@gmai.com'"
              v-bind="attrs"
              v-on="on"
              >mdi-email</v-icon
            >
          </template>
          <span>Email</span>
        </v-tooltip>
      </v-row>
    </div>
  </v-app>
</template>

<style>
.container {
  position: relative;
  text-align: center;
  color: white;
}

.titulosSize {
  font-size: 82px !important;
  line-height: 1 !important;
  font-family: Poppins !important;
  font-weight: 600 !important;
}

@media only screen and (max-width: 600px) {
  .titulosSize {
    font-size: 24px !important;
    line-height: 0 !important;
    font-family: Poppins !important;
    font-weight: 300 !important;
  }
}

.top-left {
  position: absolute;
  top: 40%;
  left: 16px;
}

.footer-login {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: auto;
  text-align: center;
}

h1 {
  font-size: 5em;
  color: white;
  text-transform: uppercase;
}

span {
  border-right: 0.05em solid;
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>

<script src="./js/home.js">
</script>