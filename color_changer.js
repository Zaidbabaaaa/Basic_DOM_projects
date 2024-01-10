const mybutton=document.querySelectorAll('.button')
console.log(mybutton);
const mybody=document.querySelector('body')


mybutton.forEach(function(btn){
    btn.addEventListener('click',function(e){
        if(e.target.id==='blue'){
            mybody.style.backgroundColor="blue"
           
        }
        if(e.target.id==='black'){
            mybody.style.backgroundColor="black"
           
        }
        if(e.target.id==='orange'){
            mybody.style.backgroundColor="orange"
           
        }
        if(e.target.id==='purple'){
            mybody.style.backgroundColor="purple"
           
        }
    });
});