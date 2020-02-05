<template>
    <div class="mdl-grid">
        <div>
            <form action="#">
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" id="sample3" required>
                    <label class="mdl-textfield__label" for="sample3">Cultura:</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                    <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4" required>
                    <label class="mdl-textfield__label" for="sample4">Quantidade:</label>
                    <span class="mdl-textfield__error">Input is not a number!</span>
                </div>
                <button type="submit"  @click="$router.push({name: 'distance', params:{}})" class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
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