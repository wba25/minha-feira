<template>
    <div class="container">
        <div class="row">
            <div class="col-12 align-middle">
                <h2 class="" for="">Tire uma foto da sua mercadoria:</h2>
                <div class="camera-modal">
                    <video ref="video" class="camera-stream embed-responsive"/>
                    <div class="camera-modal-container">
                    </div>
                    <v-btn class="take-picture-button" @click="capture" color="pink" dark fab>
                        <v-icon>camera</v-icon>
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        crop:String,
        qty:String,
        distance:String,
        camera_pictures: Array
    },
    data(){
        return{}
    },
    mounted () {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
            .then(mediaStream => {
                this.mediaStream = mediaStream  
                this.$refs.video.srcObject = mediaStream
                this.$refs.video.play()
            })
            .catch(error => console.error('getUserMedia() error:', error))
        }
        else if(navigator.getUserMedia) { // Standard
            navigator.getUserMedia({ video: true }, function(mediaStream) {
                this.mediaStream = mediaStream 
                this.$refs.video.srcObject = mediaStream;
                this.$refs.video.play()
            }, errBack);
        } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
            navigator.webkitGetUserMedia({ video: true }, function(mediaStream){
                this.mediaStream = mediaStream 
                this.$refs.video.srcObject = window.webkitURL.createObjectURL(mediaStream);
                this.$refs.video.play()
            }, errBack);
        } else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
            navigator.mozGetUserMedia({ video: true }, function(mediaStream){
                this.mediaStream = mediaStream 
                this.$refs.video.srcObject = window.URL.createObjectURL(mediaStream);
                this.$refs.video.play()
            }, errBack);
        }
    },
    destroyed () {
        const tracks = this.mediaStream.getTracks()
        tracks.map(track => track.stop())
    },
    methods: {
        capture () {
            const vm = this;
            const mediaStreamTrack = this.mediaStream.getVideoTracks()[0]
            const imageCapture = new window.ImageCapture(mediaStreamTrack)
            return imageCapture.takePhoto().then(blob => {
                this.camera_pictures.push(blob);
                this.$router.push({name: 'addpictures',params:{crop: this.crop + "", qty: this.qty+"", distance: this.distance, camera_pictures: this.camera_pictures }})
            })
        }
    }
}
</script>

<style scoped>
    .camera-modal {
        width: 100%;
        height: 100%;
        top: 20;
        left: 0;
        position: absolute;
        background-color: white;
        z-index: 10;
    }
    .camera-stream {
    }
    .camera-modal-container {
        position: absolute;
        bottom: 0;
        width: 100%;
        align-items: center;
        margin-bottom: 24px;
    }
    .take-picture-button {
        display: block;
        margin: auto;
        margin-top: 20px;
    }
</style>