import AppBar from "@/components/appBar.vue";
import proyectCards from "@/components/proyectCards.vue";
import Contact from "@/components/contact.vue";
import downloadCV from "@/components/downloadCV.vue";
import writeTextH1 from "@/components/js/writeTextH1.js";


export default {
    components: {
        AppBar,
        proyectCards,
        Contact,
        downloadCV,
    },
    methods: {
        redirect(url) {
            this.$store.dispatch("redirect", url);
        },
    }
}