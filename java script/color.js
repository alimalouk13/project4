class Color{
    constructor(){
      this.color1=document.getElementById("color1");
      this.color1.addEventListener("click",()=>{
      this. select_color("color1")
      })
      this.color2=document.getElementById("color2");
      this.color2.addEventListener("click",()=>{
      this. select_color("color2")
      })
      this.color3=document.getElementById("color3");
      this.color3.addEventListener("click",()=>{
      this. select_color("color3")
      })
      this.color4=document.getElementById("color4");
      this.color4.addEventListener("click",()=>{
      this. select_color("color4")
      })
      this.color5=document.getElementById("color5");
      this.color5.addEventListener("click",()=>{
      this. select_color("color5")
      })
      if(localStorage.getItem("SaveColor")== null){
        document.body.style.background="rgb(44 130 101)"
      }
      this.select_color(localStorage.getItem("SaveColor"));
    }
    select_color(color){
      if(color=="color1"){
        document.body.style.background="linear-gradient(to right, rgb(199 54 219), rgb(136 119 223) 50%)";
      } else if(color=="color2"){
        document.body.style.background="linear-gradient(to right, #00d2ff, #928dab 50%)";
      } else if(color=="color3"){
        document.body.style.background="linear-gradient(to right, #eb3333, #148f5d)";
      } else if(color=="color4"){
        document.body.style.background="linear-gradient(to right, #1e8326, #4155a7)";
      } else if(color=="color5"){
        document.body.style.background="linear-gradient(to right, rgb(0 0 0), rgb(255 255 255))";
      }
      localStorage.setItem("SaveColor",color);
    }
}
onload = new Color();