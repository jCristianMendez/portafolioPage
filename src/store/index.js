import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proyectos: [],
    loading: false,
  },
  mutations: {
    setLoading(state) {
      state.loading = !state.loading;
    },
    SetProyectos(state, payload) {
      state.proyectos = payload;
      console.log(state.proyectos);
    },
  },
  actions: {
    toastSuccess(context,title) {
      return Vue.prototype.$swal({
        //https://sweetalert2.github.io/
        icon: "success",
        title:
          "<p style='color:white' class='px14'>" + title || null + "</p>",
        position: "top-end",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 6000,
        toast: true,
        background: "#43A047",
        iconColor: "white",
        showClass: {
          popup: "animate__animated animate__slideInRight",
        },
        hideClass: {
          popup: "animate__animated animate__slideOutDown",
        },
      });
    },
    toastError(context,title) {
      return Vue.prototype.$swal({
        //https://sweetalert2.github.io/
        icon: "error",
        title:
          "<p style='color:white' class='px14'>" + title || null + "</p>",
        position: "top",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 6000,
        toast: true,
        background: "#D50000",
        iconColor: "white",
        showClass: {
          popup: "animate__animated animate__slideInRight",
        },
        hideClass: {
          popup: "animate__animated animate__slideOutDown",
        },
      });
    },
    redirect(context,url){
      window.open(url, '_blank');
    },
    obtenerProyectos({ commit }) {
      commit('setLoading')
      axios
        .get(
          //https://jcmm.icu/Portafolio/ws/proyectos/getProyectos
          //http://localhost:8084/Portafolio/ws/proyectos/getProyectos
          "https://jcmm.icu/Portafolio/ws/proyectos/getProyectos"
        )
        .then((response) => {
          commit("SetProyectos", response.data);
          commit('setLoading')
        }).catch((error) => {
          console.error("GetMenu: " + error);
        });
    },
  },
  getters: {
    proyectos: (state) => state.proyectos,
    loading: (state) => state.loading,
  },
})
