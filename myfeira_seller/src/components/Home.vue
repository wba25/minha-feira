<template>
    <div class="container h-100">
        <div class="row align-middle" style="text-align: center"> 
            <div class="col-12 h-25"> 
                <!--<img class="img-fluid h-25" src="../../public/assets/logo_mf/Logo_Minha_Feira_favicon_APP.png"/>
                --><p class="lead" style="color: #009444">{{title}}</p>  
            </div>    
            
            <div class="col-12">
                <div v-if="is_loading">
                    <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div v-else>
                    <div v-if="menu_index==0">
                        <div class="col-12">
                            <div class="card-group">
                                <div v-for="ad in adverts" class="card">
                                    <v-img v-if="ad.pictures != null" class="card-img-top" :src="ad.pictures[0]"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{{ad.crop}}</h5>
                                        <p class="card-text lead">{{ad.qty}} kg</p>
                                        <p class="card-text">Produtor {{ad.productor_name}} está à {{ad.productor_distance}} km de você </p>
                                        <a href="#" class="btn btn-success text-white">Abrir</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="menu_index==1">
                        <div class="col-12 text-left">
                            <form class="form-inline">
                                <div class="form-group w-100">
                                    <input class="form-control" type="search" placeholder="Ex: Feijão" aria-label="Search">
                                    <button class="btn btn-success my-2 my-sm-0 float-right">Buscar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div v-else>
                        <div class="col-12 text-left">
                            <form class="form-inline">
                                <div class="form-group w-100">
                                    <label for="new_distance">Distância máxima que você gostaria de encontrar agricultores:</label>
                                    <input class="form-control w-100" v-model="distance" type="number" placeholder="" id="new_distance">
                                    <button class="btn btn-success my-2 my-sm-0 float-right">Atualizar Distância</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fixed-bottom">
                <nav class="navbar navbar-light bg-light" style="padding: 0;margin: 0">
                    <!--<div class="container">
                        <div class="row">-->
                            <div class="col-4" style="padding: 0; margin: 0">
                                <button v-if="menu_index==0" type="button" class="btn btn-light" @click="open_explore">
                                    <i class="fas fa-compass text-success" style="font-size: 2.5em"></i>
                                </button>
                                <button v-else type="button" class="btn btn-light" @click="open_explore">
                                    <i class="fas fa-compass text-secondary" style="font-size: 2.5em"></i>
                                </button>
                            </div>
                            <div class="col-4">
                                <button v-if="menu_index==1" type="button" class="btn btn-light" @click="open_search">
                                    <i class="fas fa-search-dollar text-success" style="font-size: 2.5em"></i>
                                </button>
                                <button v-else type="button" class="btn btn-light" @click="open_search">
                                    <i class="fas fa-search-dollar text-secondary" style="font-size: 2.5em"></i>
                                </button>
                            </div>
                            <div class="col-4">
                                <button v-if="menu_index==2" type="button" class="btn btn-light" @click="open_settings">
                                    <i class="fas fa-cog text-success" style="font-size: 2.5em"></i>
                                </button>
                                <button v-else type="button" class="btn btn-light" @click="open_settings">
                                    <i class="fas fa-cog text-secondary" style="font-size: 2.5em"></i>
                                </button>
                            </div>
                        <!--</div>
                    </div>-->
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../configFirebase.js'
export default {
    props: {
        getted_tenders:Object
    },
    data(){
        return{
            menu_index: 0,
            title: "",
            distance: 200,
            is_loading: true,
            adverts: [
                {
                    id: 0,
                    crop: "Milho",
                    qty: 1000,
                    pictures: [
                        "../../public/assets/logo_mf/Logo_Minha_Feira_logo_1280x800.png",
                        "../../public/assets/logo_mf/Logo_Minha_Feira_logo_1280x800.png",
                        "../../public/assets/logo_mf/Logo_Minha_Feira_logo_1280x800.png"
                    ],
                    productor_name: "Francisco",
                    productor_distance: 100,
                    productor_phone: "(82) 9 9631-3072"
                },
                {
                    id: 0,
                    crop: "Feijão",
                    qty: 500,
                    pictures: [
                        "../../public/assets/logo_mf/Logo_Minha_Feira_logo_1280x800.png",
                        "../../public/assets/logo_mf/Logo_Minha_Feira_logo_1280x800.png",
                        "../../public/assets/logo_mf/Logo_Minha_Feira_logo_1280x800.png"
                    ],
                    productor_name: "João",
                    productor_distance: 142,
                    productor_phone: "(81) 9 8291-1337"
                },
            ]
        }
    },
    mounted () {
        this.open_explore();

        firebase.db.collection('advertisements').orderBy('created_at').onSnapshot((snapShot) => {
            this.adverts=[];
            snapShot.forEach((t)  => {
                this.adverts.push({
                    crop:t.data().crop,
                    qty:t.data().qty,
                    distance:t.data().distance,
                    pictures:t.data().pictures,
                    productor_name: "João",
                    productor_distance: 142,
                    productor_phone: "(81) 9 8291-1337"
                })
            });
        });
    },
    methods:{
        open_explore() {
            this.is_loading = true;
            this.menu_index = 0;
            this.title = "Encontre todas os produtos agrícolas à venda em até "+this.distance+"km";
            this.is_loading = false;
        },
        open_search() {
            this.is_loading = true;
            this.menu_index = 1;
            this.title = "Procure por um produto agrícola específico";
            this.is_loading = false;
        },
        open_settings() {
            this.is_loading = true;
            this.menu_index = 2;
            this.title = "Configurações";
            this.is_loading = false;
        }
    }
}
</script>