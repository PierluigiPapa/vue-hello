const {createApp} = Vue

createApp ({
    data () {
        return {
            message: "Barbero! Barbero! Illuminaci il sentiero!",
            barbero: "text-center text-success"
        }
    }
}).mount ('#app')