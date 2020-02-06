<template>
    <div class="container h-100">
        <div class="row align-items-center h-100">
            <div class="col-12 align-middle">
                <form>
                    <div class="form-group">
                        <label for="id_cultivo" class="lead"><strong>Qual cultivo você irá vender?</strong></label>
                        <input type="text" v-model="crop" class="form-control form-control-lg" id="id_cultivo" placeholder="ex: Mandioca" required>
                    </div>
                    <br>
                    <div class="form-group">
                        <label for="id_qty" class="lead"><strong>Qual a quantidade em kg?</strong></label>
                        <input type="text" v-model="qty" class="form-control form-control-lg" id="id_qty" placeholder="ex: 100" required>
                    </div>
                </form>
                
                <button type="button" style="width:100%" @click="confirm" class="btn btn-success btn-lg">
                    <i class="fas fa-check"></i> Confirmar
                </button>
                <br><br>
                <div v-if="msg_err != null" class="alert alert-danger" role="alert">
                    {{msg_err}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {    
    data(){
        return{
            crop: "",
            qty: 0,
            msg_err: null 
        }
    },
    methods: {
        confirm() {
            if(this.crop == "" || this.qty == 0) {
                this.msg_err = "Preencha todos os valores corretamente!";
            }
            else{
                this.$router.push({name: 'distance', params:{crop: this.crop + "", qty: this.qty+""}})
            }
        }
    }
}
</script>