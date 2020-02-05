<template>
    <div class="mdl-grid">
        <div>
            <h3 class="" for="">Qual a distância máxima até seus compradores:</h3>
            <form action="#">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="sample3" required>
                    <label class="mdl-textfield__label" for="sample3">100km</label>
                </div>
                <button type="submit"  @click="$router.push({name: 'takeapicture', params:{}})" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i class="fas fa-arrow-right"></i>
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