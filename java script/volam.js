class Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.audio_file.volume= 50/100;
        this.volum_range=document.getElementById("volum_range");
        this.volum_range.addEventListener("change",()=>{
            this.audio_file.volume= this.volum_range.value/100; 
        })
        this.volum_spaed=document.getElementById("volum_spaed");
        this.volum_spaed.playbackRate=1;
        this.volum_spaed.addEventListener("change",()=>{
            this.audio_file.playbackRate= this.volum_spaed.value/100; 
        })

    }
}
onload = new Volume();
