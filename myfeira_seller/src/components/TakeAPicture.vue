<template>
    <div class="mdl-grid">
        <div>
            <h3 class="" for="">Tive uma foto da sua mercadoria</h3>
            <form action="#">
                
                <button type="submit"  @click="$router.push({name: 'picture', params:{}})" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i class="fas fa-camera"></i> 
                </button>
            </form>
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