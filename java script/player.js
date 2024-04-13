class Player{
    constructor(){
     var hightmain = document.getElementById("player");
     hightmain.style.height = screen.height +"px"// تعيد فقط ارقام وتحتاج واجدة screen.height لكي يعمل بشكل صحيح لان ال خاصية +"px" قمنا ب اضافة 
    if(screen.width <620){

        hightmain.style.width = screen.width + "px";
    }
    var hightdiv = document.getElementById("content1")
    hightdiv.style.height = screen.height-276 +"px"
    }
}
onload = new Player();
//class buttons
class Audio_player{
    constructor(){
      this.audio_file = document.getElementById("audio_file");
      this.title_audio = document.getElementById("title_audio");
      this.play_music_button = document.getElementById("play_music");
      this.isplsy;
      this.adres_radio = document.getElementById("adres_radio");
      
      this.play_music_button.addEventListener("click", ()=>{
        this.play_music2();
      });
      this.name_radio=[];
      this.name_radio[0]="mohanad";
      this.name_radio[1]= "houssen";
      this.name_radio[2]= "wafeek";
      this.addres_radio1=[];
      this.addres_radio1[0]="فاحت ريحة البارود";
      this.addres_radio1[1]="ناطر بنت المدرسة";
      this.addres_radio1[2]="متل الطفل عليكي بغار";
      this.sorce_radio=[];
      this.sorce_radio[0]="mohanad.mp3";
      this.sorce_radio[1]="22u383Jh.mp3";
      this.sorce_radio[2]="wafeek.mp3";
      this.server1 =0;
      this.setResours();
      document.getElementById("play_next").addEventListener("click",()=>{
       if(this.server1<this.sorce_radio.length-1){
        ++this.server1;
       this.isplsy=false;
       }else{
        this.server1= 0 ;
        this.isplsy=false;
       }
       localStorage.setItem("save_position",this.server1)//لتخزين البيانات ضمن ذاطرة التخزين من اجل استخدامها لتخزين اخر اغنية قام المستخدم بالاستماع اليها
       this.setResours()
      });
      document.getElementById("play_back").addEventListener("click",()=>{
        if(this.server1>0){
            --this.server1;
         this.isplsy=false;
           }else{
            this.server1=this.sorce_radio.length-1 ;
            this.isplsy=false;
           }
           localStorage.setItem("save_position",this.server1)
           this.setResours() 
      });
    }
    setResours(){
      if(localStorage.getItem("save_position")!=null){// هنا نقول عندما لا تكون ذاكرة التخزين المؤقت فارغة نفذ الاوامر التاليه
        this.server1= localStorage.getItem("save_position"); 
      }
        this.audio_file.src= this.sorce_radio[this.server1]; 
        this.title_audio.innerHTML = this.addres_radio1[this.server1]; 
        this.adres_radio.innerHTML = this.name_radio[this.server1]; 
        this.play_music2()
    }
    play_music2(){
       if(this.isplsy == false){
        this.play_music_button.src="./imeg/pause.png";
        this.audio_file.play();
        this.isplsy = true;
        
       }else {
        this.play_music_button.src="./imeg/play.png";
        this.audio_file.pause();
        this.isplsy = false;
       }
    }
}
onload = new Audio_player();
// function Audio_Player(){
//     document.getElementById("audio_file").play()}

