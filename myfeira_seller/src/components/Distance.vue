<template>
    <div class="container h-100">
        <div class="row align-items-center h-100">
            <div class="col-12 align-middle">
                <h1 class="" for="">Qual a distância máxima até seus compradores em <strong>km</strong>?</h1>
                <form>
                    <div class="form-group">
                        <input v-model="distance" type="number" class="form-control form-control-lg" id="id_distance" placeholder="ex: 200">
                    </div>
                    <button type="button" @click="confirm" class="btn btn-success btn-lg">
                        <i class="fas fa-check"></i> Confirmar distância
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        crop:String,
        qty:String
    },
    data(){
        return{
            distance: 200
        }
    },
    methods: {
        confirm() {
            this.$router.push({name: 'picture', params:{crop: this.crop + "", qty: this.qty+"", distance: this.distance, camera_pictures: []}})
        }
    }
}
</script>