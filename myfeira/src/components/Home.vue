<template>
    <div class="container h-100">
        <div class="row align-middle" style="text-align: center">        
            <img class="img-fluid" src="../../public/assets/logo_mf/Logo_Minha_Feira_logo_1280x800.png"/>
            <div class="col-12">
                <h1 v-if="!tenders.length" style="margin-top:20px;">{{welcome_text}}</h1>
                <div v-else>
                    <!-- TODO: render poster cards  -->
                    As propostas
                </div>
            </div>
            <div class="fixed-bottom">
                <div class="container">               
                    <div class="col-12"> 
                        <button class="btn btn-success btn-lg" @click="$router.push({name: 'typeproduction', params:{}})">
                            <i class="fab fa-envira"></i>
                            Vender safra
                        </button>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        getted_tenders:Object
    },
    data(){
        return{
            welcome_text: "Seja bem vindo ao minha feira!",
            tenders: []
        }
    },
    mounted () {
        if(this.getted_tenders != null) this.tenders = this.getted_tenders.map(this.getURL);
    },
    methods:{
        getURL(blob) {
            return URL.createObjectURL(blob);
        }
    }
}
</script>