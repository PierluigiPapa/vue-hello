const {createApp} = Vue

createApp ({
    data () {
        return {
            message: "Barbero! Barbero! Illuminaci il sentiero!",
            barbero: "color text-align-center"
        }
    }
}).mount ('#app')