<template>
    <div class="mdl-grid">
        <div style="text-align: center">
            <div class="mdl-cell mdl-cell--12-col">
                <h1 v-if="!tenders.length">{{welcome_text}}</h1>
                <div v-else>
                    <!-- TODO: render poster cards  -->
                    As propostas
                </div>
            </div>
            <div class="mdl-cell mdl-cell--12-col">
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="$router.push({name: 'typeproduction', params:{}})">
                    <i class="fab fa-envira"></i>
                    Vender safra
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            welcome_text: "Seja bem vindo ao minha feira!",
            tenders: []
        }
    }
}
</script>