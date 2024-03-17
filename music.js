let progress=document.getElementById("progress")
let song=document.getElementById("song")
let controlIcon=document.getElementById("controlIcon")
controlIcon.addEventListener("click",()=>{
    playpause()
})



function playpause(){
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play")

    }
    else{
        song.play();
        controlIcon.classList.add("fa-pause")
        controlIcon.classList.remove("fa-play")
    }
}

