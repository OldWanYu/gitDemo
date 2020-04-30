<template>
    <div class="playmini">
        <audio :src="url" autoplay controls style="width:100%;"></audio>
    </div>
</template>
<script>
export default {
    data(){
        return{
            url:'',
            
        }
    },
    methods:{
        play(){
            console.log('local',localStorage.getItem('playSong'))
               var url=localStorage.getItem('playSong')
                
                this.url=url;
        }
    },
    created(){
        this.play()
    }
}
</script>
<style>
.playmini{
    width: 100%;
    position: fixed;
    bottom: 0;
}
</style>