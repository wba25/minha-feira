<template>
    <div class="container h-100">
        <div class="row align-middle" style="text-align: center">        
            <img class="img-fluid" src="../../public/assets/logo_mf/Logo_Minha_Feira_logo_1280x800.png"/>
            <div class="col-12">
                <h1 v-if="!tenders.length" style="margin-top:20px;">{{welcome_text}}</h1>
                <div v-else>
                    <div class="col-12">
                        <div class="card-group">
                            <div v-for="ten in tenders" class="card">
                                <v-img v-if="ten.pictures != null" class="card-img-top" :src="ten.pictures[0]"/>
                                <div class="card-body">
                                    <h5 class="card-title">{{ten.crop}}</h5>
                                    <p class="card-text lead">{{ten.qty}} kg</p>
                                    <a href="#" class="btn btn-success text-white">Abrir</a>
                                </div>
                            </div>
                        </div>
                    </div>
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

import firebase from '../configFirebase.js'
export default {
    props: {
    },
    data(){
        return{
            welcome_text: "Seja bem vindo ao minha feira!",
            tenders: []
        }
    },
    mounted () {
        firebase.db.collection('advertisements').orderBy('created_at').onSnapshot((snapShot) => {
            this.tenders=[];
            snapShot.forEach((t)  => {
                this.tenders.push({
                    crop:t.data().crop,
                    qty:t.data().qty,
                    distance:t.data().distance,
                    pictures:t.data().pictures                    
                })
            });
        });
    },
    methods:{
        getURL(blob) {
            return URL.createObjectURL(blob);
        }
    }
}
</script>