<template>
    <div class="container h-100">
        <div class="row align-items-center justify-content-center h-100">
            <div class="col-12 align-middle">
                <button style="width:100%" class="btn btn-success btn-lg text-center" @click="$router.push({name: 'cultivationqty', params:{}})">
                    <i class="fas fa-seedling"></i> <br>
                    Agricultura
                </button>
                <br>
                <br>
                <button style="width:100%" class="btn btn-info btn-lg text-center" @click="$router.push({name: 'cultivationqty', params:{}})">
                    <i class="fas fa-fish"></i><br>
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