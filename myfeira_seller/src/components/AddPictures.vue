<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="">Fotos adicionadas da sua lavoura:</h2>
            </div>
            <div v-for="(pic_url, index) in pictures" class="col">
                <a href="#" @click="remove_picture(index)">
                    <img class="img-fluid img-thumbnail" :src="pic_url"/>
                </a>
            </div>
            <div class="col-12">               
                <button style="width:100%" @click="take_a_picture" class="btn btn-info btn-lg">
                     Adicionar mais fotos
                </button>
                <br>
                <br>
                <button style="width:100%" @click="confirm" class="btn btn-success btn-lg">
                    <i class="fas fa-check"></i> Confirmar fotos
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {    
    props:{
        crop:String,
        qty:String,
        distance:String,
        camera_pictures:Array
    },
    data(){
        return{
            pictures: []
        }
    },
    computed: {
        
    },
    methods:{
        getURL(blob) {
            return URL.createObjectURL(blob);
        },
        take_a_picture() {
            this.$router.push({name: 'picture',params:{crop: this.crop + "", qty: this.qty+"", distance: this.distance, camera_pictures: this.camera_pictures }})
        },
        confirm() {
            this.$router.push({name: 'reviewposter',params:{crop: this.crop + "", qty: this.qty+"", distance: this.distance, camera_pictures: this.camera_pictures }})
        },
        remove_picture(index) {
            if(this.pictures.lenght == 1) {
                this.pictures = [];
            } 
            else { 
                this.pictures.splice(index, 1);
            }
            this.camera_pictures.splice(index, 1);
        }
    },
    mounted () {
        this.pictures = this.camera_pictures.map(this.getURL);
    }
}
</script>