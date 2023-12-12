var modal= document.getElementById("openModal");
var btn = document.getElementById("modal_open");
var video=document.getElementById("video_soc");

btn.onclick=function(){
    modal.style.display="block";
    video.play();
   
}

window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
        video.pause();
        video.currentTime = 0;
    }
}