import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; 
import VueMask from 'v-mask'

Vue.use(Vuetify);
Vue.use(VueSweetalert2);
Vue.use(VueMask)

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#4a4a4a',
                secondary: '#37c9df',
                accent: '#ff6b7e',
            }
        },
        options: { variations: false }
    },
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
