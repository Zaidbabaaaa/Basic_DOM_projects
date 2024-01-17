const randomcolor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color=color+hex[Math.floor(Math.random()*16)];

    }
    return color;
}
let interval;

const startchanging=function(){
   interval= setInterval(changebgcolor,1000);
    function changebgcolor(){
       let body=document.querySelector('body')
       body.style.backgroundColor=randomcolor();
    }
};

document.querySelector("#start").addEventListener("click",startchanging);
const stopchangingcolor=function(){
    clearInterval(interval);
}
document.querySelector("#stop").addEventListener("click",stopchangingcolor)