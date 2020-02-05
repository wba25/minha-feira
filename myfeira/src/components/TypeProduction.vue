<template>
    <div class="mdl-grid">
        <div style="text-align: center">
            <div class="mdl-cell mdl-cell--12-col">
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="$router.push({name: 'cultivationqty', params:{}})">
                    <i class="fas fa-seedling"></i>
                    Agricultura
                </button>
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="$router.push({name: 'cultivationqty', params:{}})">
                    <i class="fas fa-fish"></i>
                    Pecuaria
                </button>
            </div>
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