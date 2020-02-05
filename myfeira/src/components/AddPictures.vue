<template>
    <div class="mdl-grid">
        <div>
            <h3 class="" for="">Adicionar mais fotos da sua lavoura?</h3>
            <form action="#">
                
                <button type="submit"  @click="$router.push({name: 'picture', params:{}})" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                    <i class="fas fa-plus"></i> Adicionar mais fotos
                </button>
            </form>
            
            <button type="submit"  @click="$router.push({name: 'reviewposter', params:{}})" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Concluir
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    }
}
</script>