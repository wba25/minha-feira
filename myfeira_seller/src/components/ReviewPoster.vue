<template>
    <div class="container">
        <h1>Você confirma os dados da sua publicação?</h1>
        <table class="table table-striped">
            <tbody>
                <tr>
                    <th scope="row">Cultivo</th>
                    <td>{{crop}}</td>
                </tr>
                <tr>
                    <th scope="row">Quantidade estimada</th>
                    <td>{{qty}} kg</td>
                </tr>
                <tr>
                    <th scope="row">Clientes em até</th>
                    <td>{{distance}} km</td>
                </tr>
            </tbody>
        </table>
        
        <h3>Fotos adicionadas da lavoura:</h3>            
        <div v-for="pic_url in pictures" class="col">
            <img class="img-fluid img-thumbnail" :src="pic_url"/>
        </div>
        
        <button style="width:100%" @click="confirm" class="btn btn-success btn-lg">
            <i class="fas fa-check"></i> Publicar {{crop}}
        </button>
        <br>
        <br>
        <button style="width:100%" @click="cancel" class="btn btn-secondary btn-lg">
            <i class="fas fa-times"></i> Cancelar {{crop}}
        </button>
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
        confirm() {
            var new_tender = {
                crop_name: this.crop,
                qty: this.qty,
                distance: this.distance,
                pictures: this.pictures
            }
            //this.$terders = [new_tender, new_tender, new_tender]
            console.log(this.$terders);
            this.$router.push({name: 'home',params:{}}); 
            
        },
        cancel() {
            this.$router.push({name: 'home',params:{}});          
        }
    },
    mounted () {
        this.pictures = this.camera_pictures.map(this.getURL);
    }
}
</script>