const {createApp} = Vue

createApp ({
    data () {
        return {
            message: "Barbero! Barbero! Illuminaci il sentiero!",
            barbero: "text-center text-success",
            imgBarbero: "assets/img/Alessandro_Barbero_Dominus.jpg",
            dominus: "position-absolute top-50 start-50 translate-middle rounded-5",
        }
    }
}).mount ('#app')