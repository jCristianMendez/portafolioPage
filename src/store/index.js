import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    proyectos: [],
    loading: false,
    dialogLoading: false,
    //https://jcmm.icu/Portafolio/ws/
    //http://localhost:8084/Portafolio/ws/
    urlAxios: 'https://jcmm.icu/Portafolio/ws/',
  },
  mutations: {
    setLoading(state) {
      state.loading = !state.loading;
    },
    SetProyectos(state, payload) {
      state.proyectos = payload;
    },
    dialogLoading(state){
      state.dialogLoading = !state.dialogLoading;
    }
  },
  actions: {
    toastSuccess(context, title) {
      return Vue.prototype.$swal({
        //https://sweetalert2.github.io/
        icon: "success",
        title:
          "<p style='color:white'>" + title || null + "</p>",
        position: "top",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 6000,
        toast: true,
        background: "#43A047",
        iconColor: "white",
      });
    },
    toastError(context, title) {
      return Vue.prototype.$swal({
        //https://sweetalert2.github.io/
        icon: "error",
        title:
          "<p style='color:white'>" + title || null + "</p>",
        position: "top",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 6000,
        toast: true,
        background: "#D50000",
        iconColor: "white",
      });
    },
    redirect(context, url) {
      window.open(url, '_blank');
    },
    obtenerProyectos({ commit, getters }) {
      commit('setLoading')
      axios
        .get(
          getters.urlAxios + "proyectos/getProyectos"
        )
        .then((response) => {
          commit("SetProyectos", response.data);
          commit('setLoading')
        }).catch((error) => {
          console.error("GetMenu: " + error);
        });
    },
    mandarCorreo({ commit, getters, dispatch }, contacto) {
      commit('dialogLoading')
      const params = new URLSearchParams();
      params.append("nombre", contacto.nombre);
      params.append("phone", contacto.phone);
      params.append("email", contacto.email);
      params.append("message", contacto.message);
      axios({
        method: "POST",
        url: getters.urlAxios + "email/mandar",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: params
      }).then((response) => {
        dispatch('toastSuccess',response.data.mensaje);
        commit('dialogLoading')
      }).catch((error) => {
        commit('dialogLoading')
        //dispatch('toastError',error); 
      });
    },
  },
  getters: {
    proyectos: (state) => state.proyectos,
    loading: (state) => state.loading,
    urlAxios: (state) => state.urlAxios,
    dialogLoading: (state) => state.dialogLoading,
  },
})
